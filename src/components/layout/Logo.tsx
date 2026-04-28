import { cn } from "../../lib/cn";
import { scrollToSection } from "../../lib/scroll";

type Props = {
  variant?: "default" | "compact";
  className?: string;
  /** Mostra/esconde a marca textual ao lado da logo */
  showText?: boolean;
};

// A logo PNG já carrega o nome "PERNAMBUCO MATERIAIS DE CONSTRUÇÃO".
// Por padrão, exibimos só a imagem para evitar duplicidade visual.
export default function Logo({
  className,
  showText = false,
  variant = "default",
}: Props) {
  const height = variant === "compact" ? "h-20" : "h-20";

  return (
    <a
      href="#topo"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("topo");
      }}
      className={cn(
        "inline-flex items-center gap-3 font-display font-extrabold tracking-tight",
        className
      )}
      aria-label="Pernambuco Materiais de Construção"
    >
      <img
        src="/logo-pernambuco.png"
        alt="Pernambuco Materiais"
        className={cn(height, "w-auto select-none")}
        draggable={false}
      />
      {showText && (
        <span className="hidden text-base leading-none text-ink-900 sm:inline-flex sm:flex-col">
          Pernambuco
          <span className="mt-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-stone-500">
            Materiais
          </span>
        </span>
      )}
    </a>
  );
}
