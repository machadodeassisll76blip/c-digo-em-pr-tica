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
  code: CodeSet;
}
