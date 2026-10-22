import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CodeEditor } from "@/components/CodeEditor";
import { Explanation } from "@/components/Explanation";
import { getLanguage, lessonKey } from "@/data";
import { useProgress } from "@/hooks/use-progress";

export const Route = createFileRoute("/aula/$lang/$slug")({
  loader: ({ params }) => {
    const lang = getLanguage(params.lang);
    const idx = lang?.lessons.findIndex((l) => l.slug === params.slug) ?? -1;
    if (!lang || idx < 0) throw notFound();
    return { langId: lang.id, idx };
  },
  head: ({ params }) => {
    const lesson = getLanguage(params.lang)?.lessons.find((l) => l.slug === params.slug);
    const title = lesson ? `${lesson.title} — estuda.dev` : "Lição — estuda.dev";
    const desc = lesson?.summary ?? "Lição interativa";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: Aula,
});

function Aula() {
  const { langId, idx } = Route.useLoaderData();
  const lang = getLanguage(langId)!;
  const lesson = lang.lessons[idx]!;
  const prev = lang.lessons[idx - 1];
  const next = lang.lessons[idx + 1];
  const { isDone, toggle } = useProgress();
  const key = lessonKey(lang.id, lesson.slug);
  const done = isDone(key);

  return (
    <article className="space-y-6">
      <header>
        <Link to={`/${lang.id}` as "/html"} className="font-mono text-sm text-primary hover:underline">
          ← {lang.name} · lição {idx + 1}/{lang.lessons.length}
        </Link>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{lesson.title}</h1>
        <p className="mt-1 text-muted-foreground">{lesson.summary}</p>
      </header>
      <Explanation paragraphs={lesson.explanation} />
      <CodeEditor key={key} initial={lesson.code} title={lesson.title} />
      <button className={done ? "btn btn-primary" : "btn btn-ghost"} aria-pressed={done} onClick={() => toggle(key)}>
        {done ? "✓ Lição concluída" : "Marcar como concluída"}
      </button>
      <nav aria-label="Navegação entre lições" className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link to="/aula/$lang/$slug" params={{ lang: lang.id, slug: prev.slug }} className="card card-link">
            <span className="block font-mono text-xs text-muted-foreground">← Anterior</span>
            {prev.title}
          </Link>
        ) : <span />}
        {next && (
          <Link to="/aula/$lang/$slug" params={{ lang: lang.id, slug: next.slug }} className="card card-link text-right">
            <span className="block font-mono text-xs text-muted-foreground">Próxima →</span>
            {next.title}
          </Link>
        )}
      </nav>
    </article>
  );
}
