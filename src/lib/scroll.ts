import type { SectionId } from "./sections";

// Scrolla para uma seção específica respeitando o offset da Navbar fixa.
// Usado em todos os links da nav e nos CTAs internos.
export function scrollToSection(id: SectionId | string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Hook que monitora qual seção está visível pra destacar item ativo na Navbar.
import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], offset = 100): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + offset;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return active;
}
