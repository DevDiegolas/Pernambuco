import { cn } from "../../lib/cn";
import { scrollToSection } from "../../lib/scroll";

export default function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const text = variant === "dark" ? "text-ink-900" : "text-white";
  const accent = variant === "dark" ? "text-brand-600" : "text-brand-400";
  return (
    <a
      href="#topo"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("topo");
      }}
      className={cn(
        "flex items-center gap-2 font-display font-extrabold tracking-tight",
        className
      )}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path d="M4 19 L12 6 L20 19 Z" fill="currentColor" />
          <rect x="10" y="14" width="4" height="5" fill="#ea580c" />
        </svg>
      </span>
      <span className={cn("text-lg leading-none", text)}>
        Pernambuco
        <span className={cn("ml-1 text-xs font-bold uppercase tracking-widest", accent)}>
          Materiais
        </span>
      </span>
    </a>
  );
}
