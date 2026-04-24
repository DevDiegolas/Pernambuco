import type { ReactNode } from "react";
import { useInView } from "../../lib/useInView";
import { cn } from "../../lib/cn";

type Direction = "up" | "down" | "left" | "right" | "fade";

const initial: Record<Direction, string> = {
  up: "translate-y-6",
  down: "-translate-y-6",
  left: "translate-x-6",
  right: "-translate-x-6",
  fade: "",
};

type Props = {
  children: ReactNode;
  /** Duração em ms (default 700) */
  duration?: number;
  /** Delay em ms para stagger (default 0) */
  delay?: number;
  /** Direção da entrada */
  direction?: Direction;
  className?: string;
};

export default function Reveal({
  children,
  duration = 700,
  delay = 0,
  direction = "up",
  className,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        "transition-all ease-out will-change-transform",
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${initial[direction]}`,
        className
      )}
    >
      {children}
    </div>
  );
}
