import { useMemo, useState, useEffect } from "react";
import Section from "../../components/ui/Section";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";
import ProductGrid from "./ProductGrid";
import { products } from "../../data/products";
import { categories } from "../../data/categories";
import { SECTIONS } from "../../lib/sections";

type Props = {
  // Permite que outras seções (ex: FeaturedCategories) controlem o filtro
  activeCategory?: string | null;
  onCategoryChange?: (slug: string | null) => void;
};

export default function ProductsSection({
  activeCategory,
  onCategoryChange,
}: Props) {
  // Estado interno de fallback caso o pai não controle
  const [internalCat, setInternalCat] = useState<string | null>(null);
  const active = activeCategory ?? internalCat;
  const setActive = onCategoryChange ?? setInternalCat;

  const [query, setQuery] = useState("");

  // Quando o filtro muda via prop externa, limpa a busca pra evitar combo zero
  useEffect(() => {
    setQuery("");
  }, [activeCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const okCat = active ? p.category === active : true;
      const okQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      return okCat && okQuery;
    });
  }, [active, query]);

  return (
    <Section
      id={SECTIONS.produtos}
      eyebrow="Catálogo"
      title="Conheça o que vendemos"
      description="Mais de 1.500 itens organizados por categoria. Veja um recorte do nosso catálogo — fale com a gente para preço, estoque e entrega."
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter
          categories={categories}
          active={active}
          onChange={setActive}
        />
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <p className="mt-5 text-sm text-stone-500">
        {filtered.length} {filtered.length === 1 ? "item" : "itens"} encontrados
      </p>

      <div className="mt-6">
        <ProductGrid products={filtered} />
      </div>
    </Section>
  );
}
