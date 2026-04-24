import { ArrowRight, MapPin, Star } from "lucide-react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import Chip from "../../components/ui/Chip";
import Reveal from "../../components/ui/Reveal";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

export default function Hero() {
  return (
    <section
      id={SECTIONS.topo}
      className="relative overflow-hidden bg-ink-900 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-40"
      />
      <div
        aria-hidden
        className="anim-pulse-glow pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-brand-600/30 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Reveal direction="up" duration={500}>
            <Chip className="bg-white/10 text-brand-200 ring-brand-300/30">
              <Star className="h-3.5 w-3.5" /> Loja parceira da sua obra
            </Chip>
          </Reveal>
          <Reveal direction="up" delay={80} duration={700}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Tudo para a sua obra,{" "}
              <span className="text-brand-400">do alicerce ao acabamento.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="mt-5 max-w-xl text-lg text-stone-300">
              {store.description}
            </p>
          </Reveal>
          <Reveal direction="up" delay={260}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="scroll" to={SECTIONS.produtos} variant="primary">
                Ver produtos <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="scroll" to={SECTIONS.contato} variant="ghost">
                <MapPin className="h-4 w-4" /> Como chegar
              </Button>
            </div>
          </Reveal>
          <Reveal direction="up" delay={360}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-stone-400">Itens</dt>
                <dd className="font-display text-2xl font-bold">+1.500</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-stone-400">Anos</dt>
                <dd className="font-display text-2xl font-bold">+15</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-stone-400">Bairros</dt>
                <dd className="font-display text-2xl font-bold">20+</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal direction="left" delay={200} duration={900} className="relative">
          <div className="anim-float">
            <PlaceholderImage
              label="Foto da loja em breve"
              ratio="tall"
              className="rotate-1 ring-white/10"
            />
          </div>
          <div className="anim-float-slow absolute -bottom-6 -left-6 hidden w-56 sm:block">
            <PlaceholderImage label="Equipe" ratio="square" className="ring-white/10" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
