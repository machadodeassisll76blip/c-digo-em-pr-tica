import { useEffect, useState } from "react";
import { SearchDialog } from "./SearchDialog";

/** Barra superior com o gatilho da busca e o atalho Ctrl+K / Cmd+K. */
export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [mac, setMac] = useState(false);

  useEffect(() => {
    setMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button className="search-trigger hidden sm:flex" onClick={() => setOpen(true)} aria-label="Abrir busca">
        <span aria-hidden className="text-primary">⌕</span>
        <span className="flex-1 text-left text-muted-foreground">Buscar lições, projetos e código…</span>
        <kbd className="kbd">{mac ? "⌘" : "Ctrl"} K</kbd>
      </button>
      <button className="btn btn-ghost px-3 sm:hidden" onClick={() => setOpen(true)} aria-label="Abrir busca">
        <span aria-hidden className="text-lg">⌕</span>
      </button>
      <SearchDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
