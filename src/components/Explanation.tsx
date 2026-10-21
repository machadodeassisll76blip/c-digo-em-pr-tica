/** Renderiza parágrafos, destacando trechos entre <tags> como código. */
export function Explanation({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-3 text-base leading-relaxed">
      {paragraphs.map((p, i) => (
        <p key={i}>
          {p.split(/(<[^>]+>)/g).map((part, j) =>
            part.startsWith("<") ? <code key={j} className="inline-code">{part}</code> : part,
          )}
        </p>
      ))}
    </div>
  );
}
