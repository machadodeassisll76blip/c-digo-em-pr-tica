import { cssLanguage } from "./css";
import { htmlLanguage } from "./html";
import { javascriptLanguage } from "./javascript";
import type { LangId, Language } from "./types";

export const languages: Language[] = [htmlLanguage, cssLanguage, javascriptLanguage];

export function getLanguage(id: string): Language | undefined {
  return languages.find((l) => l.id === id);
}

export const lessonKey = (lang: LangId, slug: string) => `${lang}/${slug}`;

export * from "./types";
export { projects } from "./projects";
