import type { LangId } from "@/data/types";
export type DictionaryCategory = "estrutura" | "semantica" | "texto" | "midia" | "listas" | "tabela" | "formulario" | "interatividade" | "atributos-globais" | "atributos" | "obsoletos";
export interface DictionaryEntry {
  id: string; name: string; language: LangId; category: DictionaryCategory;
  kind: "element" | "attribute" | "input-type";
  description: string; syntax: string; example: string; tags: string[];
  lesson?: string; obsolete?: boolean; alternative?: string; note?: string;
}
export const categoryLabels: Record<DictionaryCategory, string> = {
  estrutura: "Estrutura", semantica: "Semântica", texto: "Texto", midia: "Mídia", listas: "Listas", tabela: "Tabelas", formulario: "Formulários", interatividade: "Interatividade", "atributos-globais": "Atributos globais", atributos: "Atributos por elemento", obsoletos: "Obsoletos",
};
