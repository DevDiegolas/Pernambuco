import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import ContactInfo from "./ContactInfo";
import MapEmbed from "./MapEmbed";
import { SECTIONS } from "../../lib/sections";

export default function ContactSection() {
  return (
    <Section
      id={SECTIONS.contato}
      eyebrow="Onde encontrar"
      title="Estamos prontos para atender você"
      description="Visite a loja, ligue ou chame no WhatsApp. Estamos a um clique da sua obra."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal direction="up">
          <ContactInfo />
        </Reveal>
        <Reveal direction="up" delay={150} className="space-y-4">
          <h3 className="font-display text-2xl font-bold text-ink-900">
            Como chegar
          </h3>
          <MapEmbed />
        </Reveal>
      </div>
    </Section>
  );
}
