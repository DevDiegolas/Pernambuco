import { MessageCircle, MapPin } from "lucide-react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-10 text-white shadow-soft sm:p-14">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Vai começar uma obra? Fale com a gente.
              </h2>
              <p className="mt-3 max-w-md text-brand-50/90">
                Montamos seu orçamento na hora e indicamos os melhores materiais
                para o seu projeto.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button
                as="a"
                external
                href={`https://wa.me/${store.contact.whatsapp}`}
                variant="primary"
                className="bg-white text-brand-700 hover:bg-stone-100"
              >
                <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
              </Button>
              <Button as="scroll" to={SECTIONS.contato} variant="ghost">
                <MapPin className="h-4 w-4" /> Ver localização
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
