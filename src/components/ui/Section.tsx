import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import Container from "./Container";
import Reveal from "./Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: Props) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <Reveal direction="up" duration={650}>
            <header
              className={cn(
                "mb-10 max-w-2xl",
                align === "center" && "mx-auto text-center"
              )}
            >
              {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
              {title && <h2 className="section-title mt-2">{title}</h2>}
              {description && (
                <p className="mt-4 text-base text-stone-600 sm:text-lg">
                  {description}
                </p>
              )}
            </header>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
