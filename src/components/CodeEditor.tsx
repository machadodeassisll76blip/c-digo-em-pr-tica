import { useEffect, useMemo, useState } from "react";
import type { CodeSet } from "@/data/types";

type Tab = keyof CodeSet;
const TABS: { id: Tab; label: string }[] = [
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "js", label: "JS" },
];

// Se o localStorage não estiver disponível no iframe isolado, usamos uma versão em memória.
const storageShim = `<script>(function(){try{window.localStorage.getItem('x')}catch(e){var m={};var s={getItem:function(k){return k in m?m[k]:null},setItem:function(k,v){m[k]=String(v)},removeItem:function(k){delete m[k]},clear:function(){m={}},key:function(i){return Object.keys(m)[i]||null},get length(){return Object.keys(m).length}};Object.defineProperty(window,'localStorage',{value:s});}})();<\/script>`;

function buildDoc({ html, css, js }: CodeSet) {
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">${storageShim}<style>${css}</style></head><body>${html}<script>try{${js}\n}catch(e){document.body.insertAdjacentHTML('beforeend','<pre style="color:#c00;white-space:pre-wrap">Erro: '+e.message+'</pre>')}<\/script></body></html>`;
}

export function CodeEditor({ initial, title }: { initial: CodeSet; title: string }) {
  const [code, setCode] = useState<CodeSet>(initial);
  const [tab, setTab] = useState<Tab>(initial.html ? "html" : "js");
  const [doc, setDoc] = useState(() => buildDoc(initial));
  const [runKey, setRunKey] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCode(initial);
  }, [initial]);

  // Atualiza a pré-visualização enquanto digita (com pequeno atraso).
  useEffect(() => {
    const t = setTimeout(() => setDoc(buildDoc(code)), 400);
    return () => clearTimeout(t);
  }, [code]);

  const lines = useMemo(() => code[tab].split("\n").length, [code, tab]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code[tab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignora */
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      const el = e.currentTarget;
      const { selectionStart: s, selectionEnd: end, value } = el;
      const next = value.slice(0, s) + "  " + value.slice(end);
      setCode((c) => ({ ...c, [tab]: next }));
      requestAnimationFrame(() => el.setSelectionRange(s + 2, s + 2));
    }
  };

  return (
    <section aria-label={`Editor interativo: ${title}`} className="editor-shell">
      <div className="grid gap-0 xl:grid-cols-2">
        <div className="flex min-w-0 flex-col border-b border-border xl:border-b-0 xl:border-r">
          <div role="tablist" aria-label="Linguagem" className="flex border-b border-border">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls="painel-codigo"
                onClick={() => setTab(t.id)}
                className="editor-tab"
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex min-h-0 flex-1">
            <div aria-hidden className="code-gutter">
              {Array.from({ length: lines }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <textarea
              id="painel-codigo"
              role="tabpanel"
              aria-labelledby={`tab-${tab}`}
              aria-label={`Código ${tab.toUpperCase()}`}
              value={code[tab]}
              onChange={(e) => setCode((c) => ({ ...c, [tab]: e.target.value }))}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
              wrap="off"
              className="code-area"
              style={{ height: `${Math.max(lines, 12) * 1.6 + 2}rem` }}
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              ● Resultado
            </span>
          </div>
          <iframe
            key={runKey}
            title={`Pré-visualização: ${title}`}
            srcDoc={doc}
            sandbox="allow-scripts allow-modals allow-forms"
            className="preview-frame"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-border p-3">
        <button className="btn btn-primary" onClick={() => { setDoc(buildDoc(code)); setRunKey((k) => k + 1); }}>
          ▶ Executar
        </button>
        <button className="btn btn-ghost" onClick={copy}>
          {copied ? "✓ Copiado!" : `Copiar ${tab.toUpperCase()}`}
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => {
            setCode(initial);
            setDoc(buildDoc(initial));
            setRunKey((k) => k + 1);
          }}
        >
          ↺ Restaurar exemplo
        </button>
      </div>
    </section>
  );
}
