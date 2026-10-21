import { createFileRoute } from "@tanstack/react-router";
import { LanguagePage } from "@/components/LanguagePage";
import { cssLanguage } from "@/data/css";

export const Route = createFileRoute("/css")({
  head: () => ({
    meta: [
      { title: "CSS — estuda.dev" },
      { name: "description", content: "Lições interativas de CSS em português." },
      { property: "og:title", content: "CSS — estuda.dev" },
      { property: "og:description", content: "Lições interativas de CSS em português." },
    ],
  }),
  component: () => <LanguagePage lang={cssLanguage} />,
});
