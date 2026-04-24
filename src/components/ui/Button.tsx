import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { scrollToSection } from "../../lib/scroll";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

type Common = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonProps = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type AnchorProps = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
    external?: boolean;
  };

type ScrollProps = Common & {
  as: "scroll";
  to: string; // id de seção
};

type Props = ButtonProps | AnchorProps | ScrollProps;

export default function Button(props: Props) {
  const { variant = "primary", className, children } = props;
  const cls = cn(variants[variant], className);

  if (props.as === "scroll") {
    return (
      <a
        href={`#${props.to}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(props.to);
        }}
        className={cls}
      >
        {children}
      </a>
    );
  }
  if (props.as === "a") {
    const { href, external, ...rest } = props;
    return (
      <a
        {...rest}
        href={href}
        className={cls}
        target={external ? "_blank" : rest.target}
        rel={external ? "noopener noreferrer" : rest.rel}
      >
        {children}
      </a>
    );
  }
  const { as: _as, ...rest } = props as ButtonProps;
  return (
    <button {...rest} className={cls}>
      {children}
    </button>
  );
}
