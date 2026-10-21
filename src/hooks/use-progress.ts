import { useCallback, useEffect, useState } from "react";

const KEY = "estudos-progresso";
const EVENT = "progresso-atualizado";

function read(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

/** Lições concluídas, salvas no localStorage e sincronizadas entre componentes. */
export function useProgress() {
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setDone(read());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((key: string) => {
    const cur = read();
    const next = cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key];
    localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return { done, isDone: (k: string) => done.includes(k), toggle };
}
