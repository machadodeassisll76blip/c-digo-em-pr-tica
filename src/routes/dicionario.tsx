import { createFileRoute } from "@tanstack/react-router";
import { DictionaryPage } from "@/components/DictionaryPage";

export const Route = createFileRoute("/dicionario")({
  head: () => ({
    meta: [
      { title: "Dicionário de códigos — estuda.dev" },
      { name: "description", content: "Dicionário de HTML, CSS e JavaScript em português, com exemplos para copiar." },
      { property: "og:title", content: "Dicionário de códigos — estuda.dev" },
      { property: "og:description", content: "Dicionário de HTML, CSS e JavaScript em português, com exemplos para copiar." },
    ],
  }),
  component: () => <DictionaryPage />,
});
