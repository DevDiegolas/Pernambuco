import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import { store } from "../../data/store";
import { cn } from "../../lib/cn";
import { NAV_ITEMS } from "../../lib/sections";
import { scrollToSection, useActiveSection } from "../../lib/scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition",
        scrolled
          ? "bg-white/85 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-white"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(item.id);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                active === item.id
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink-700 hover:bg-stone-100"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${store.contact.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink-800 hover:text-brand-700"
          >
            <Phone className="h-4 w-4" />
            {store.contact.phone}
          </a>
          <Button
            as="a"
            external
            href={`https://wa.me/${store.contact.whatsapp}`}
            variant="primary"
          >
            WhatsApp
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-stone-200 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-stone-200 bg-white md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.id);
                }}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-semibold",
                  active === item.id
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-800 hover:bg-stone-100"
                )}
              >
                {item.label}
              </a>
            ))}
            <Button
              as="a"
              external
              href={`https://wa.me/${store.contact.whatsapp}`}
              variant="primary"
              className="mt-2 w-full"
            >
              Falar no WhatsApp
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
