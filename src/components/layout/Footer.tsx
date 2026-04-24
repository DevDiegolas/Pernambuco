import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Container from "../ui/Container";
import Logo from "./Logo";
import { store } from "../../data/store";
import { NAV_ITEMS } from "../../lib/sections";
import { scrollToSection } from "../../lib/scroll";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 bg-ink-900 text-stone-300">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <Logo variant="light" />
          <p className="max-w-md text-sm text-stone-400">{store.tagline}</p>
          <div className="flex gap-3">
            {store.social.instagram && (
              <a
                href={store.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {store.social.facebook && (
              <a
                href={store.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Navegar
          </h3>
          <ul className="space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>
                {store.address.street}, {store.address.neighborhood}
                <br />
                {store.address.city} — {store.address.state}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-400" />
              <a href={`tel:${store.contact.phone.replace(/\D/g, "")}`}>
                {store.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-400" />
              <a href={`mailto:${store.contact.email}`}>{store.contact.email}</a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-stone-500 sm:flex-row">
          <p>© {year} {store.name}. Todos os direitos reservados.</p>
          <p>Feito com cuidado para a sua obra.</p>
        </Container>
      </div>
    </footer>
  );
}
