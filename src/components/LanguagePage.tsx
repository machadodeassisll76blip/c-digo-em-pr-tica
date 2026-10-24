import { Link } from "@tanstack/react-router";
import { lessonKey, type Language } from "@/data";
import { useProgress } from "@/hooks/use-progress";
import { GlossaryBlock } from "./GlossaryBlock";
import { ProgressBar } from "./ProgressBar";

export function LanguagePage({ lang }: { lang: Language }) {
  const { isDone } = useProgress();
  const count = lang.lessons.filter((s) => isDone(lessonKey(lang.id, s.slug))).length;

  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-sm text-primary">// linguagem</p>
        <h1 className="text-4xl font-bold sm:text-5xl">{lang.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{lang.tagline}</p>
      </header>

      <section className="grid gap-4 md:grid-cols-3" aria-label="Resumo">
        {[
          ["O que é", lang.intro.what],
          ["Para que serve", lang.intro.purpose],
          ["Quem criou", lang.intro.creator],
        ].map(([t, d]) => (
          <div key={t} className="card">
            <h2 className="font-mono text-sm text-primary">{t}</h2>
            <p className="mt-2 text-sm leading-relaxed">{d}</p>
          </div>
        ))}
      </section>

      <section aria-labelledby="licoes">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
          <h2 id="licoes" className="text-2xl font-bold">Lições</h2>
          <div className="w-full sm:w-64"><ProgressBar value={count} max={lang.lessons.length} label={lang.name} /></div>
        </div>
        <ol className="grid gap-3">
          {lang.lessons.map((s, i) => {
            const done = isDone(lessonKey(lang.id, s.slug));
            return (
              <li key={s.slug}>
                <Link to="/aula/$lang/$slug" params={{ lang: lang.id, slug: s.slug }} className="card card-link flex items-center gap-4">
                  <span className="font-mono text-2xl text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{s.title}</span>
                    <span className="block text-sm text-muted-foreground">{s.summary}</span>
                  </span>
                  {done && <span className="badge">✓ concluída</span>}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <GlossaryBlock lang={lang.id} />
    </div>
  );
}
