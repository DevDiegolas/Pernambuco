import Container from "../../components/ui/Container";
import Icon from "../../components/ui/Icon";
import Reveal from "../../components/ui/Reveal";
import { highlights } from "../../data/highlights";

export default function Highlights() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <Container className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 90} direction="up">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200 transition group-hover:scale-110">
                <Icon name={h.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-ink-900">{h.title}</h3>
                <p className="text-sm text-stone-600">{h.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
