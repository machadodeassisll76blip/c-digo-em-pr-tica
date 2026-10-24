import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { languages } from "@/data";
import type { LangId } from "@/data/types";
import { categoryLabels, dictionaries, type DictionaryCategory, type DictionaryEntry } from "@/data/dictionary";
import { dictionaryDocId, dictionaryDomId, normalize, search, suggest } from "@/lib/search/engine";

const LANGS: { id: LangId; name: string }[] = [
  { id: "html", name: "HTML" },
  { id: "css", name: "CSS" },
  { id: "javascript", name: "JavaScript" },
];

const isLang = (v: string): v is LangId => v === "html" || v === "css" || v === "javascript";

/** Remove verbetes repetidos (mesmo id na mesma linguagem) e ordena de A a Z. */
function prepare(list: DictionaryEntry[]): DictionaryEntry[] {
  const seen = new Set<string>();
  return list
    .filter((e) => (seen.has(e.id) ? false : (seen.add(e.id), true)))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}

const entriesByLang: Record<LangId, DictionaryEntry[]> = {
  html: prepare(dictionaries.html),
  css: prepare(dictionaries.css),
  javascript: prepare(dictionaries.javascript),
};
const byDocId = new Map(
  LANGS.flatMap(({ id }) => entriesByLang[id].map((e) => [dictionaryDocId(e.language, e.id), e] as const)),
);

const letterOf = (name: string) => {
  const c = normalize(name).replace(/[^a-z0-9]/g, "")[0];
  return c && /[a-z]/.test(c) ? c.toUpperCase() : "#";
};

function CodeBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* sem permissão para copiar: o usuário ainda pode selecionar o texto */
    }
  };
  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="font-mono text-xs uppercase text-muted-foreground">{label}</span>
        <button type="button" className="btn btn-ghost px-3 py-1 text-xs" onClick={copy} aria-label={`Copiar ${label.toLowerCase()}`}>
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-md border border-border bg-background/60 p-3 font-mono text-xs leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function EntryCard({ entry, highlighted }: { entry: DictionaryEntry; highlighted: boolean }) {
  const lessonExists =
    entry.lesson !== undefined &&
    languages.some((l) => l.id === entry.language && l.lessons.some((s) => s.slug === entry.lesson));
  return (
    <article
      id={dictionaryDomId(entry.language, entry.id)}
      className={`card scroll-mt-24 ${highlighted ? "ring-2 ring-primary" : ""}`}
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 260px" }}
    >
      <header className="flex flex-wrap items-center gap-2">
        <h3 className="font-mono text-lg font-bold text-primary">{entry.name}</h3>
        <span className="badge">{categoryLabels[entry.category]}</span>
        {entry.obsolete && <span className="badge">⚠ obsoleto, não use</span>}
      </header>
      <p className="mt-2 text-sm leading-relaxed">{entry.description}</p>
      {entry.alternative && (
        <p className="mt-2 text-sm"><strong>Alternativa moderna:</strong> {entry.alternative}</p>
      )}
      {entry.note && <p className="mt-1 text-xs text-muted-foreground">{entry.note}</p>}
      <div className="mt-3 space-y-3">
        <CodeBlock label="Sintaxe" code={entry.syntax} />
        <CodeBlock label="Exemplo" code={entry.example} />
      </div>
      {lessonExists && entry.lesson && (
        <p className="mt-3 text-sm">
          <Link to="/aula/$lang/$slug" params={{ lang: entry.language, slug: entry.lesson }} className="text-primary underline">
            Ver a lição relacionada →
          </Link>
        </p>
      )}
    </article>
  );
}

export function DictionaryPage() {
  const [lang, setLang] = useState<LangId>("html");
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<DictionaryCategory | "todas">("todas");
  const [highlightId, setHighlightId] = useState<string | null>(null);

  // Links como /dicionario#lang-html ou /dicionario#verbete-html-fieldset
  const rawHash = useRouterState({ select: (s) => s.location.hash });
  const hash = rawHash.replace(/^#/, "");
  useEffect(() => {
    if (!hash) return;
    if (hash.startsWith("lang-")) {
      const l = hash.slice(5);
      if (isLang(l)) { setLang(l); setQ(""); setCategory("todas"); }
      return;
    }
    if (hash.startsWith("verbete-")) {
      const entry = [...byDocId.values()].find((e) => dictionaryDomId(e.language, e.id) === hash);
      if (!entry) return;
      setLang(entry.language);
      setQ("");
      setCategory("todas");
      setHighlightId(hash);
      const t = setTimeout(() => document.getElementById(hash)?.scrollIntoView({ block: "center", behavior: "smooth" }), 80);
      return () => clearTimeout(t);
    }
  }, [hash]);
  useEffect(() => {
    if (!highlightId) return;
    const t = setTimeout(() => setHighlightId(null), 4000);
    return () => clearTimeout(t);
  }, [highlightId]);

  const langEntries = entriesByLang[lang];
  const langName = LANGS.find((l) => l.id === lang)?.name ?? "";
  const searching = q.trim().length > 0;

  const categories = useMemo(() => {
    const counts = new Map<DictionaryCategory, number>();
    for (const e of langEntries) counts.set(e.category, (counts.get(e.category) ?? 0) + 1);
    return [...counts.entries()];
  }, [langEntries]);

  const filtered = useMemo(() => {
    let list: DictionaryEntry[];
    if (searching) {
      list = search(q, 2000, "dicionario")
        .map((r) => byDocId.get(r.doc.id))
        .filter((e): e is DictionaryEntry => e !== undefined && e.language === lang);
    } else {
      list = langEntries;
    }
    return category === "todas" ? list : list.filter((e) => e.category === category);
  }, [q, searching, lang, langEntries, category]);

  const groups = useMemo(() => {
    if (searching) return null;
    const map = new Map<string, DictionaryEntry[]>();
    for (const e of filtered) {
      const L = letterOf(e.name);
      const arr = map.get(L);
      if (arr) arr.push(e); else map.set(L, [e]);
    }
    return [...map.entries()].sort(([a], [b]) => (a === "#" ? 1 : b === "#" ? -1 : a.localeCompare(b)));
  }, [filtered, searching]);

  const chooseLang = (l: LangId) => { setLang(l); setQ(""); setCategory("todas"); };

  return (
    <div className="space-y-6">
      <header>
        <p className="font-mono text-sm text-primary">// dicionário</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Dicionário de códigos</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Consulte elementos, atributos e exemplos prontos para copiar. Use a busca ou o índice de A a Z.
        </p>
      </header>

      <div role="tablist" aria-label="Linguagem" className="flex flex-wrap gap-2">
        {LANGS.map((l) => (
          <button
            key={l.id}
            type="button"
            role="tab"
            aria-selected={lang === l.id}
            className={lang === l.id ? "btn" : "btn btn-ghost"}
            onClick={() => chooseLang(l.id)}
          >
            {l.name} <span className="font-mono text-xs opacity-70">({entriesByLang[l.id].length})</span>
          </button>
        ))}
      </div>

      {langEntries.length === 0 ? (
        <div className="card" role="tabpanel">
          <p className="font-semibold">O dicionário de {langName} chega em uma das próximas etapas. 🚧</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Enquanto isso, você pode estudar as lições de {langName}.
          </p>
          <p className="mt-3">
            <Link to={`/${lang}` as "/html"} className="btn">Ir para as lições de {langName}</Link>
          </p>
        </div>
      ) : (
        <div className="space-y-6" role="tabpanel">
          <div className="space-y-3">
            <label htmlFor="busca-dicionario" className="sr-only">Buscar no dicionário de {langName}</label>
            <input
              id="busca-dicionario"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={`Buscar no dicionário de ${langName}…`}
              className="input"
              autoComplete="off"
            />
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
              <button type="button" className={category === "todas" ? "btn px-3 py-1 text-xs" : "btn btn-ghost px-3 py-1 text-xs"} onClick={() => setCategory("todas")}>
                Todas
              </button>
              {categories.map(([c, n]) => (
                <button key={c} type="button" className={category === c ? "btn px-3 py-1 text-xs" : "btn btn-ghost px-3 py-1 text-xs"} onClick={() => setCategory(c)}>
                  {categoryLabels[c]} ({n})
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "verbete" : "verbetes"}
              {searching ? ` para “${q.trim()}”` : ""}
            </p>
          </div>

          {groups && groups.length > 0 && (
            <nav aria-label="Índice de A a Z" className="flex flex-wrap gap-1">
              {groups.map(([L]) => (
                <button
                  key={L}
                  type="button"
                  className="btn btn-ghost px-3 py-1 font-mono text-xs"
                  onClick={() => document.getElementById(`letra-${L === "#" ? "outros" : L}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  {L}
                </button>
              ))}
            </nav>
          )}

          {filtered.length === 0 && (
            <div className="card" aria-live="polite">
              <p>Não encontramos nada para “{q.trim()}” aqui. 🤔</p>
              {searching && suggest(q).length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {suggest(q).map((s) => (
                    <button key={s} type="button" className="badge hover:bg-accent" onClick={() => setQ(s)}>{s}</button>
                  ))}
                </div>
              )}
            </div>
          )}

          {groups
            ? groups.map(([L, list]) => (
                <section key={L} aria-labelledby={`letra-${L === "#" ? "outros" : L}`} className="space-y-3">
                  <h2 id={`letra-${L === "#" ? "outros" : L}`} className="scroll-mt-24 font-mono text-2xl font-bold text-primary">{L}</h2>
                  {list.map((e) => (
                    <EntryCard key={e.id} entry={e} highlighted={highlightId === dictionaryDomId(e.language, e.id)} />
                  ))}
                </section>
              ))
            : filtered.map((e) => (
                <EntryCard key={e.id} entry={e} highlighted={highlightId === dictionaryDomId(e.language, e.id)} />
              ))}
        </div>
      )}
    </div>
  );
}
