import type { ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
};

/** Word-masked heading. Wrap words in *asterisks* for the gold accent. Animated by ScrollAnimations via [data-split]. */
export function SplitHeading({ text, as: Tag = "h2", className = "" }: Props) {
  const plain = text.replace(/\*/g, "");
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  let key = 0;
  return (
    <Tag aria-label={plain} data-split className={`display ${className}`}>
      {parts.map((part) => {
        const gold = part.startsWith("*");
        const raw = part.replace(/\*/g, "");
        const words = raw.split(" ").filter(Boolean);
        const trailing = raw.endsWith(" ");
        const leading = raw.startsWith(" ");
        return words.map((w, i) => (
          <span key={key++} aria-hidden className="word-mask">
            <span className={`word-inner ${gold ? "gold-text" : ""}`}>
              {i === 0 && leading ? "\u00a0" : ""}
              {w}
              {i < words.length - 1 || trailing ? "\u00a0" : ""}
            </span>
          </span>
        ));
      })}
    </Tag>
  );
}

/** Paragraph whose words light up as you scroll through it. */
export function ScrubText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <p data-scrub aria-label={text} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="scrub-word">
          {w}&nbsp;
        </span>
      ))}
    </p>
  );
}
