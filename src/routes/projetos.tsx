import { createFileRoute } from "@tanstack/react-router";
import { CodeEditor } from "@/components/CodeEditor";
import { Explanation } from "@/components/Explanation";
import { projects } from "@/data";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos práticos — estuda.dev" },
      { name: "description", content: "Notícias, loja e lista de tarefas com HTML, CSS e JS." },
      { property: "og:title", content: "Projetos práticos — estuda.dev" },
      { property: "og:description", content: "Notícias, loja e lista de tarefas com HTML, CSS e JS." },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  return (
    <div className="space-y-12">
      <header>
        <p className="font-mono text-sm text-primary">// mão na massa</p>
        <h1 className="text-4xl font-bold">Projetos</h1>
        <p className="mt-2 text-muted-foreground">Três projetos completos unindo HTML, CSS e JavaScript.</p>
      </header>
      {projects.map((p, i) => (
        <section key={p.slug} aria-labelledby={p.slug} className="space-y-4">
          <h2 id={p.slug} className="text-2xl font-bold">
            <span className="font-mono text-primary">{i + 1}.</span> {p.title}
          </h2>
          <p className="text-muted-foreground">{p.summary}</p>
          <Explanation paragraphs={p.explanation} />
          <CodeEditor initial={p.code} title={p.title} />
        </section>
      ))}
    </div>
  );
}
