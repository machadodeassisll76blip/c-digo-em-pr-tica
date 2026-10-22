import { useNavigate } from "@tanstack/react-router";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { groupLabels, highlight, search, suggest, type GroupId, type SearchResult } from "@/lib/search/engine";

const ORDER: GroupId[] = ["html", "css", "javascript", "projetos"];

/**
 * Painel de busca. `aside` é um espaço reservado para, no futuro,
 * renderizar um assistente de IA ao lado dos resultados.
 */
export function SearchDialog({ open, onClose, aside }: { open: boolean; onClose: () => void; aside?: React.ReactNode }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const navigate = useNavigate();

  const results = useMemo(() => search(q), [q]);
  const grouped = useMemo(() => {
    const flat: SearchResult[] = [];
    const groups = ORDER.map((g) => {
      const items = results.filter((r) => r.doc.group === g);
      flat.push(...items);
      return { g, items };
    }).filter((x) => x.items.length);
    return { groups, flat };
  }, [results]);

  useEffect(() => { setActive(0); }, [q]);
  useEffect(() => {
    if (open) { setTimeout(() => inputRef.current?.focus(), 0); document.body.style.overflow = "hidden"; }
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    document.getElementById(`${listId}-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active, listId]);

  if (!open) return null;

  const go = (r: SearchResult) => {
    const l = r.doc.link;
    if (l.to === "/projetos") navigate({ to: "/projetos", hash: l.hash });
    else navigate({ to: l.to, params: l.params });
    setQ("");
    onClose();
  };

  const onKey = (e: React.KeyboardEvent) => {
    const n = grouped.flat.length;
    if (e.key === "Escape") { e.preventDefault(); onClose(); }
    else if (e.key === "ArrowDown" && n) { e.preventDefault(); setActive((a) => (a + 1) % n); }
    else if (e.key === "ArrowUp" && n) { e.preventDefault(); setActive((a) => (a - 1 + n) % n); }
    else if (e.key === "Enter" && grouped.flat[active]) { e.preventDefault(); go(grouped.flat[active]); }
  };

  let idx = -1;
  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center sm:p-6 sm:pt-[10vh]" role="dialog" aria-modal="true" aria-label="Buscar no site">
      <button className="absolute inset-0 bg-background/85" aria-label="Fechar busca" tabIndex={-1} onClick={onClose} />
      <div className="search-panel" onKeyDown={onKey}>
        <div className="flex items-center gap-2 border-b border-border p-3">
          <span aria-hidden className="font-mono text-primary">⌕</span>
          <label htmlFor={`${listId}-input`} className="sr-only">Buscar lições, projetos e código</label>
          <input
            ref={inputRef}
            id={`${listId}-input`}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Busque: flexbox, centralizar, salvar dados…"
            className="search-input"
            role="combobox"
            aria-expanded={grouped.flat.length > 0}
            aria-controls={listId}
            aria-activedescendant={grouped.flat.length ? `${listId}-${active}` : undefined}
            autoComplete="off"
          />
          <button className="btn btn-ghost px-3" onClick={onClose} aria-label="Fechar busca">Esc</button>
        </div>
        <div className="flex min-h-0 flex-1">
          <div id={listId} role="listbox" aria-label="Resultados" className="min-h-0 flex-1 overflow-y-auto p-2">
            {!q.trim() && <p className="p-4 text-sm text-muted-foreground">Digite para buscar em títulos, explicações e no código dos exemplos. Use ↑ ↓ para navegar e Enter para abrir.</p>}
            {q.trim() && !grouped.flat.length && (
              <div className="p-4 text-sm" aria-live="polite">
                <p>Não encontramos nada para “{q}”. 🤔</p>
                <p className="mt-3 text-muted-foreground">Que tal tentar:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {suggest(q).map((s) => (
                    <button key={s} className="badge hover:bg-accent" onClick={() => { setQ(s); inputRef.current?.focus(); }}>{s}</button>
                  ))}
                </div>
              </div>
            )}
            {grouped.groups.map(({ g, items }) => (
              <div key={g} role="group" aria-label={groupLabels[g]} className="mb-2">
                <p className="px-3 py-1 font-mono text-xs uppercase text-primary">{groupLabels[g]}</p>
                {items.map((r) => {
                  idx++;
                  const i = idx;
                  return (
                    <div
                      key={r.doc.id}
                      id={`${listId}-${i}`}
                      role="option"
                      aria-selected={i === active}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => go(r)}
                      className="search-option"
                    >
                      <span className="block font-semibold">{r.doc.title}</span>
                      <span className={`block text-sm text-muted-foreground ${r.field === "code" ? "font-mono text-xs" : ""}`}>
                        {r.field === "code" && <span className="mr-1 text-primary">código:</span>}
                        {highlight(r.snippet, q).map((p, k) => p.hit ? <mark key={k} className="search-mark">{p.text}</mark> : <span key={k}>{p.text}</span>)}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
            <p className="sr-only" aria-live="polite">{q.trim() ? `${grouped.flat.length} resultados` : ""}</p>
          </div>
          {aside && <aside className="hidden w-80 border-l border-border lg:block">{aside}</aside>}
        </div>
      </div>
    </div>
  );
}
