import { createFileRoute } from "@tanstack/react-router";
import { LanguagePage } from "@/components/LanguagePage";
import { htmlLanguage } from "@/data/html";

export const Route = createFileRoute("/html")({
  head: () => ({
    meta: [
      { title: "HTML — estuda.dev" },
      { name: "description", content: "Lições interativas de HTML em português." },
      { property: "og:title", content: "HTML — estuda.dev" },
      { property: "og:description", content: "Lições interativas de HTML em português." },
    ],
  }),
  component: () => <LanguagePage lang={htmlLanguage} />,
});
