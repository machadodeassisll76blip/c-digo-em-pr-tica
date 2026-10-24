import { htmlDictionary } from "./html";
import { cssDictionary } from "./css";
import { javascriptDictionary } from "./javascript";
import type { LangId } from "@/data/types";
import type { DictionaryEntry } from "./types";
export const dictionaries: Record<LangId, DictionaryEntry[]> = { html: htmlDictionary, css: cssDictionary, javascript: javascriptDictionary };
export const dictionaryEntries = Object.values(dictionaries).flat();
export * from "./types";
