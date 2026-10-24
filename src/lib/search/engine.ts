/**
 * Motor de busca local (sem servidor). Exporta `search()` com resultados
 * estruturados — um futuro assistente de IA pode reutilizar `buildIndex`/`search`
 * como fonte de contexto (RAG) sem alterar a interface de busca.
 */
import { languages, projects } from "@/data";
import { dictionaryEntries } from "@/data/dictionary";
import { synonyms } from "./synonyms";

export type GroupId = "html" | "css" | "javascript" | "projetos" | "dicionario";
export const groupLabels: Record<GroupId, string> = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  projetos: "Projetos",
  dicionario: "Dicionário",
};

/** Identificador do verbete no índice de busca e no HTML da página do dicionário. */
export const dictionaryDocId = (lang: string, id: string) => `dicionario/${lang}/${id}`;
export const dictionaryDomId = (lang: string, id: string) => `verbete-${lang}-${id}`;

export interface SearchDoc {
  id: string;
  group: GroupId;
  title: string;
  summary: string;
  tags: string[];
  text: string; // explicação
  code: string;
  link:
    | { to: "/aula/$lang/$slug"; params: { lang: string; slug: string } }
    | { to: "/projetos"; hash: string }
    | { to: "/dicionario"; hash: string };
}

export interface SearchResult { doc: SearchDoc; score: number; snippet: string; field: string }

export const normalize = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/** Normaliza preservando o comprimento (para destacar trechos). */
const normKeep = (s: string) => [...s].map((c) => normalize(c)[0] ?? c).join("");

const words = (s: string) => normalize(s).split(/[^a-z0-9]+/).filter((w) => w.length > 1);

let cache: SearchDoc[] | null = null;
export function buildIndex(): SearchDoc[] {
  if (cache) return cache;
  const docs: SearchDoc[] = languages.flatMap((l) =>
    l.lessons.map((s) => ({
      id: `${l.id}/${s.slug}`, group: l.id, title: s.title, summary: s.summary,
      tags: [...s.slug.split("-"), ...(s.tags ?? [])],
      text: s.explanation.join(" "), code: `${s.code.html}\n${s.code.css}\n${s.code.js}`,
      link: { to: "/aula/$lang/$slug" as const, params: { lang: l.id, slug: s.slug } },
    })),
  );
  for (const p of projects) docs.push({
    id: `projetos/${p.slug}`, group: "projetos", title: p.title, summary: p.summary,
    tags: [p.slug, ...(p.tags ?? [])], text: p.explanation.join(" "),
    code: `${p.code.html}\n${p.code.css}\n${p.code.js}`, link: { to: "/projetos", hash: p.slug },
  });
  const seen = new Set<string>();
  for (const e of dictionaryEntries) {
    const id = dictionaryDocId(e.language, e.id);
    if (seen.has(id)) continue;
    seen.add(id);
    docs.push({
      id, group: "dicionario", title: e.name, summary: e.description,
      tags: [...e.tags, e.language, e.category, e.kind, ...(e.obsolete ? ["obsoleto"] : [])],
      text: [e.description, e.note ?? "", e.alternative ?? ""].join(" "),
      code: `${e.syntax}\n${e.example}`,
      link: { to: "/dicionario", hash: dictionaryDomId(e.language, e.id) },
    });
  }
  cache = docs;
  return docs;
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++)
      cur[j] = Math.min(prev[j]! + 1, cur[j - 1]! + 1, prev[j - 1]! + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[b.length]!;
}

/** Termo bate com uma palavra? 1 = exato/prefixo, 0.6 = com erro de digitação, 0 = não. */
function termMatch(term: string, word: string): number {
  if (word.startsWith(term) || (term.length > 3 && word.includes(term))) return 1;
  if (term.length < 4) return 0;
  const tol = term.length > 6 ? 2 : 1;
  const d = levenshtein(term, word.slice(0, term.length + 1));
  return Math.min(d, levenshtein(term, word)) <= tol ? 0.6 : 0;
}

/** Expande a consulta com sinônimos (frases e palavras soltas). */
export function expandQuery(q: string): { terms: string[]; extra: string[] } {
  const nq = normalize(q).trim();
  const terms = words(nq);
  const extra = new Set<string>();
  for (const [key, vals] of Object.entries(synonyms)) {
    const k = normalize(key);
    const hit = k.includes(" ") ? nq.includes(k) : terms.some((t) => t === k || (t.length > 4 && levenshtein(t, k) <= 1));
    if (hit) vals.forEach((v) => words(v).forEach((w) => extra.add(w)));
  }
  return { terms, extra: [...extra] };
}

const FIELDS = [
  { key: "title", w: 10 }, { key: "tags", w: 7 }, { key: "summary", w: 5 }, { key: "text", w: 3 }, { key: "code", w: 1.5 },
] as const;

function fieldText(d: SearchDoc, k: (typeof FIELDS)[number]["key"]) {
  return k === "tags" ? d.tags.join(" ") : d[k];
}

const wordCache = new Map<string, string[]>();
function docWords(d: SearchDoc, k: string, text: string) {
  const id = d.id + k;
  let w = wordCache.get(id);
  if (!w) { w = [...new Set(words(text))]; wordCache.set(id, w); }
  return w;
}

function makeSnippet(text: string, matched: string): string {
  const flat = text.replace(/\s+/g, " ");
  const i = normKeep(flat).indexOf(matched);
  if (i < 0) return flat.slice(0, 110);
  const start = Math.max(0, i - 40);
  return (start > 0 ? "…" : "") + flat.slice(start, start + 120) + (start + 120 < flat.length ? "…" : "");
}

/**
 * Busca em lições, projetos e dicionário. Com `group`, considera só os
 * documentos daquele grupo (usado pela página do Dicionário).
 */
export function search(q: string, limit = 30, group?: GroupId): SearchResult[] {
  const { terms, extra } = expandQuery(q);
  if (!terms.length) return [];
  const all = [...terms.map((t) => ({ t, boost: 1 })), ...extra.map((t) => ({ t, boost: 0.7 }))];
  const out: SearchResult[] = [];
  for (const d of buildIndex()) {
    if (group && d.group !== group) continue;
    let score = 0, best = { s: 0, field: "", word: "", text: "" }, matchedTerms = 0;
    for (const { t, boost } of all) {
      let termBest = 0;
      for (const f of FIELDS) {
        if (boost < 1 && f.w < 5) continue; // sinônimos só valem em título, tags e resumo
        const text = fieldText(d, f.key);
        for (const w of docWords(d, f.key, text)) {
          const m = (boost === 1 ? termMatch(t, w) : w === t || w.startsWith(t) ? 1 : 0) * f.w * boost;
          if (m > termBest) termBest = m;
          if (m > best.s) best = { s: m, field: f.key, word: w, text };
        }
      }
      if (termBest > 0 && boost === 1) matchedTerms++;
      score += termBest;
    }
    if (score > 0 && (matchedTerms > 0 || extra.length)) {
      if (normalize(d.title).includes(normalize(q).trim())) score += 15;
      out.push({ doc: d, score, field: best.field, snippet: best.field === "tags" ? d.summary : makeSnippet(best.text, best.word) });
    }
  }
  out.sort((a, b) => b.score - a.score);
  const top = out[0]?.score ?? 0;
  return out.filter((r) => r.score >= top * 0.25).slice(0, limit);
}

/** Termos parecidos para "Você quis dizer…". */
export function suggest(q: string, n = 5): string[] {
  const t = normalize(q).trim();
  if (!t) return [];
  const vocab = new Set<string>([...Object.keys(synonyms)]);
  buildIndex().forEach((d) => {
    const title = normalize(d.title);
    // No dicionário, só nomes simples (ex.: "fieldset"); evita sugerir "input type=...".
    if (d.group !== "dicionario" || /^[a-z0-9-]+$/.test(title)) vocab.add(title);
    if (d.group !== "dicionario") d.tags.forEach((x) => vocab.add(normalize(x)));
  });
  return [...vocab]
    .map((v) => ({ v, d: levenshtein(t, v) / Math.max(v.length, t.length) }))
    .sort((a, b) => a.d - b.d).slice(0, n).map((x) => x.v);
}

export function highlight(snippet: string, q: string): { text: string; hit: boolean }[] {
  const { terms, extra } = expandQuery(q);
  const ts = [...terms, ...extra].filter((t) => t.length > 1);
  const norm = normKeep(snippet);
  const marks = new Array(snippet.length).fill(false);
  for (const t of ts) {
    let i = norm.indexOf(t);
    while (i >= 0) { for (let k = i; k < i + t.length; k++) marks[k] = true; i = norm.indexOf(t, i + 1); }
  }
  const parts: { text: string; hit: boolean }[] = [];
  for (let i = 0; i < snippet.length; i++) {
    const last = parts[parts.length - 1];
    if (last && last.hit === marks[i]) last.text += snippet[i];
    else parts.push({ text: snippet[i]!, hit: marks[i] });
  }
  return parts;
}
