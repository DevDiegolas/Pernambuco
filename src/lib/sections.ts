// IDs únicos de cada seção da single-page.
// Centralizados aqui pra Navbar, Footer e os anchors usarem a mesma fonte.
export const SECTIONS = {
  topo: "topo",
  produtos: "produtos",
  sobre: "sobre",
  contato: "contato",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: SECTIONS.topo, label: "Início" },
  { id: SECTIONS.produtos, label: "Produtos" },
  { id: SECTIONS.sobre, label: "Sobre" },
  { id: SECTIONS.contato, label: "Contato" },
];
