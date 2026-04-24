import Section from "../../components/ui/Section";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import Icon from "../../components/ui/Icon";
import Reveal from "../../components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

const points = [
  "Estoque completo para entrega imediata",
  "Profissionais que entendem do produto e da obra",
  "Parcerias com pedreiros, eletricistas e encanadores",
  "Condições especiais para construtores e revendas",
];

const values = [
  {
    icon: "Hammer",
    title: "Feito para a obra real",
    description:
      "Produtos testados no dia a dia, que aguentam o tranco do canteiro.",
  },
  {
    icon: "Users",
    title: "Gente que entende",
    description:
      "Nossa equipe já passou por obras e sabe recomendar o que é certo.",
  },
  {
    icon: "ShieldCheck",
    title: "Compromisso",
    description: "Se prometemos entregar, entregamos. Com nota e garantia.",
  },
];

export default function AboutSection() {
  return (
    <Section
      id={SECTIONS.sobre}
      eyebrow="Sobre nós"
      title={`Conheça a ${store.name}`}
      description="Mais que uma loja, um parceiro de obra para a sua família ou empresa."
      className="bg-stone-100/50"
    >
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div className="space-y-4 text-stone-700">
          <p>
            Começamos pequenos, atendendo a vizinhança com poucos itens e muita
            vontade. Hoje somos referência em materiais de construção na região,
            mantendo o mesmo cuidado de quando abrimos as portas pela primeira
            vez.
          </p>
          <p>
            Nosso compromisso é simples: produtos de qualidade, preço justo e
            atendimento que entende o que o seu projeto precisa — seja uma
            reforma de banheiro ou uma obra do zero.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-ink-800">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <PlaceholderImage label="Fachada da loja" ratio="video" />
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 100} direction="up">
            <div className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200">
                <Icon name={v.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-stone-600">{v.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
