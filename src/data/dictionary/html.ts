import { htmlElements } from "./html-elements";
import { htmlAttributes } from "./html-attributes";
import { htmlObsolete } from "./html-obsolete";
import type { DictionaryEntry } from "./types";
export const htmlDictionary: DictionaryEntry[] = [...htmlElements, ...htmlAttributes, ...htmlObsolete];
export const htmlGlossaryIds = ["html", "head", "body", "a", "img", "form", "input", "label", "global-id", "global-class", "global-aria-star", "main"];
