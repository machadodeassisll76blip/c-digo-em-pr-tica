import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { languages, lessonKey } from "@/data";
import { useProgress } from "@/hooks/use-progress";
import { ProgressBar } from "./ProgressBar";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const [q, setQ] = useState("");
  const { isDone } = useProgress();

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return languages.flatMap((l) =>
      l.lessons
        .filter((s) => (s.title + " " + s.summary).toLowerCase().includes(term))
        .map((s) => ({ lang: l, lesson: s })),
    );
  }, [q]);

  return (
    <nav aria-label="Navegação principal" className="flex h-full flex-col gap-4 overflow-y-auto p-4">
      <Link to="/" onClick={onNavigate} className="font-mono text-lg font-bold text-primary">
        &lt;estuda.dev /&gt;
      </Link>

      <div>
        <label htmlFor="busca" className="sr-only">Buscar lições</label>
        <input
          id="busca"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar lições..."
          className="input"
        />
        {q && (
          <ul className="mt-2 space-y-1" aria-live="polite">
            {results.length === 0 && <li className="px-2 text-sm text-muted-foreground">Nada encontrado.</li>}
            {results.map(({ lang, lesson }) => (
              <li key={lang.id + lesson.slug}>
                <Link
                  to="/aula/$lang/$slug"
                  params={{ lang: lang.id, slug: lesson.slug }}
                  onClick={() => { setQ(""); onNavigate?.(); }}
                  className="nav-link"
                >
                  <span className="font-mono text-xs text-primary">{lang.name}</span> {lesson.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/" onClick={onNavigate} className="nav-link" activeOptions={{ exact: true }}>
        Início
      </Link>

      {languages.map((l) => {
        const count = l.lessons.filter((s) => isDone(lessonKey(l.id, s.slug))).length;
        return (
          <div key={l.id}>
            <Link to={`/${l.id}` as "/html"} onClick={onNavigate} className="nav-link font-semibold">
              {l.name}
            </Link>
            <div className="px-3 pb-1">
              <ProgressBar value={count} max={l.lessons.length} label={l.name} />
            </div>
            <ul className="ml-3 border-l border-border">
              {l.lessons.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/aula/$lang/$slug"
                    params={{ lang: l.id, slug: s.slug }}
                    onClick={onNavigate}
                    className="nav-link nav-sub"
                  >
                    <span aria-hidden className={isDone(lessonKey(l.id, s.slug)) ? "text-primary" : "text-muted-foreground"}>
                      {isDone(lessonKey(l.id, s.slug)) ? "✓" : "○"}
                    </span>{" "}
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <Link to="/dicionario" onClick={onNavigate} className="nav-link font-semibold">
        Dicionário
      </Link>

      <Link to="/projetos" onClick={onNavigate} className="nav-link font-semibold">
        Projetos
      </Link>
    </nav>
  );
}
