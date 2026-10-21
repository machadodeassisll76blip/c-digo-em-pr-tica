import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "estuda.dev — HTML, CSS e JavaScript na prática" },
      { name: "description", content: "Lições interativas em português de HTML, CSS e JavaScript com editor ao vivo." },
      { property: "og:title", content: "estuda.dev — HTML, CSS e JavaScript na prática" },
      { property: "og:description", content: "Lições interativas em português com editor ao vivo." },
    ],
  }),
  component: Index,
});

const cards = [
  { to: "/html", t: "HTML", d: "Estrutura, semântica e formulários.", tag: "<html>" },
  { to: "/css", t: "CSS", d: "Box model, Flexbox, Grid e animações.", tag: "{ css }" },
  { to: "/javascript", t: "JavaScript", d: "DOM, eventos, fetch e async/await.", tag: "() => js" },
  { to: "/projetos", t: "Projetos", d: "Notícias, loja e lista de tarefas.", tag: "build()" },
] as const;

function Index() {
  return (
    <div className="space-y-10">
      <header className="space-y-4 pt-4">
        <p className="font-mono text-sm text-primary">$ npm run aprender</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          Aprenda a web <span className="text-gradient">escrevendo código</span>.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Lições curtas de HTML, CSS e JavaScript para nível intermediário, cada uma com um editor ao vivo.
          Seu progresso fica salvo no navegador.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="card card-link block">
            <span className="font-mono text-sm text-primary">{c.tag}</span>
            <h2 className="mt-2 text-2xl font-bold">{c.t}</h2>
            <p className="mt-1 text-muted-foreground">{c.d}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
