import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { dictionaries, type DictionaryEntry } from "@/data/dictionary";
import { htmlGlossaryIds } from "@/data/dictionary/html";
import type { LangId } from "@/data/types";
import { dictionaryDomId } from "@/lib/search/engine";

/** Termos que aparecem no glossário de cada linguagem (CSS e JavaScript chegam nas próximas etapas). */
const glossaryIds: Partial<Record<LangId, string[]>> = { html: htmlGlossaryIds };
const langNames: Record<LangId, string> = { html: "HTML", css: "CSS", javascript: "JavaScript" };

/** Primeira frase da descrição, para o glossário ficar compacto. */
const firstSentence = (s: string) => {
  const i = s.indexOf(". ");
  return i > 0 ? s.slice(0, i + 1) : s;
};

export function GlossaryBlock({ lang }: { lang: LangId }) {
  const ids = glossaryIds[lang];
  const entries = useMemo(() => {
    if (!ids) return [];
    const byId = new Map(dictionaries[lang].map((e) => [e.id, e]));
    return ids.map((id) => byId.get(id)).filter((e): e is DictionaryEntry => Boolean(e));
  }, [ids, lang]);

  if (!entries.length) return null;

  return (
    <section aria-labelledby="glossario">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <h2 id="glossario" className="text-2xl font-bold">Glossário</h2>
        <Link to="/dicionario" hash={`lang-${lang}`} className="btn">
          Ver dicionário completo de {langNames[lang]}
        </Link>
      </div>
      <dl className="grid gap-3 sm:grid-cols-2">
        {entries.map((e) => (
          <div key={e.id} className="card">
            <dt>
              <Link to="/dicionario" hash={dictionaryDomId(e.language, e.id)} className="font-mono font-bold text-primary">
                {e.name}
              </Link>
            </dt>
            <dd className="mt-1 text-sm leading-relaxed">{firstSentence(e.description)}</dd>
            <dd className="mt-2 overflow-x-auto font-mono text-xs text-muted-foreground">
              <code>{e.syntax}</code>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
