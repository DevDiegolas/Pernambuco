import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import Logo from "./Logo";
import { store } from "../../data/store";
import { cn } from "../../lib/cn";
import { NAV_ITEMS } from "../../lib/sections";
import { scrollToSection, useActiveSection } from "../../lib/scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-stone-200/70 bg-stone-50/85 backdrop-blur-md saturate-150">
      <Container className="flex h-[88px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.filter((n) => n.id !== "topo").map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(item.id);
              }}
              className={cn(
                "text-sm font-medium transition-colors",
                active === item.id
                  ? "text-brand-600"
                  : "text-ink-800 hover:text-brand-500"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${store.contact.phoneRaw}`}
            className="btn btn-sm btn-outline"
            style={{ fontWeight: 500 }}
          >
            <Phone className="h-4 w-4" />
            {store.contact.phone}
          </a>
          <a
            href={`https://wa.me/${store.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-stone-200 bg-white text-ink-900 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-stone-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.filter((n) => n.id !== "topo").map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.id);
                }}
                className={cn(
                  "border-b border-stone-100 px-2 py-3 text-base font-medium",
                  active === item.id ? "text-brand-600" : "text-ink-800"
                )}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${store.contact.phoneRaw}`}
                className="btn btn-outline justify-center"
              >
                <Phone className="h-4 w-4" /> Ligar
              </a>
              <a
                href={`https://wa.me/${store.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary justify-center"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
