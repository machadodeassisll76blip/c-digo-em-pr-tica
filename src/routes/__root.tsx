import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SearchBar } from "@/components/search/SearchBar";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "estuda.dev" },
      { name: "description", content: "Estude HTML, CSS e JavaScript com editor interativo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [open, setOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <div className="flex items-center justify-between border-b border-border bg-sidebar px-4 py-3 md:hidden">
        <span className="font-mono font-bold text-primary">&lt;estuda.dev /&gt;</span>
        <div className="flex gap-2">
          <SearchBar />
          <button className="btn btn-ghost" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
      </div>
      <div className="sticky top-0 z-40 hidden border-b border-border bg-background/90 px-10 py-3 backdrop-blur md:ml-72 md:block">
        <div className="mx-auto max-w-5xl"><SearchBar /></div>
      </div>
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-border bg-sidebar md:block">
        <Sidebar />
      </aside>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="absolute inset-0 bg-background/80" aria-label="Fechar menu" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-xs border-r border-border bg-sidebar">
            <button className="btn btn-ghost absolute right-2 top-2" aria-label="Fechar menu" onClick={() => setOpen(false)}>✕</button>
            <Sidebar onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
      <main id="conteudo" className="min-w-0 px-4 py-8 md:ml-72 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </main>
    </QueryClientProvider>
  );
}
