import { createFileRoute } from "@tanstack/react-router";
import { LanguagePage } from "@/components/LanguagePage";
import { javascriptLanguage } from "@/data/javascript";

export const Route = createFileRoute("/javascript")({
  head: () => ({
    meta: [
      { title: "JavaScript — estuda.dev" },
      { name: "description", content: "Lições interativas de JavaScript em português." },
      { property: "og:title", content: "JavaScript — estuda.dev" },
      { property: "og:description", content: "Lições interativas de JavaScript em português." },
    ],
  }),
  component: () => <LanguagePage lang={javascriptLanguage} />,
});
