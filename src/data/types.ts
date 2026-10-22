export type LangId = "html" | "css" | "javascript";

export interface CodeSet {
  html: string;
  css: string;
  js: string;
}

export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  /** Parágrafos curtos de explicação. */
  explanation: string[];
  /** Palavras-chave extras para a busca. */
  tags?: string[];
  code: CodeSet;
}

export interface Language {
  id: LangId;
  name: string;
  tagline: string;
  intro: { what: string; purpose: string; creator: string };
  lessons: Lesson[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  explanation: string[];
  /** Palavras-chave extras para a busca. */
  tags?: string[];
  code: CodeSet;
}
