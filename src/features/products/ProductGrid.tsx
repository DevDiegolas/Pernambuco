import { PackageSearch } from "lucide-react";
import ProductCard from "./ProductCard";
import Reveal from "../../components/ui/Reveal";
import type { Product } from "../../types";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <Reveal direction="fade">
        <div className="card flex flex-col items-center gap-3 p-12 text-center">
          <PackageSearch className="h-10 w-10 text-stone-400" />
          <p className="font-semibold text-ink-800">
            Nenhum produto encontrado para esse filtro.
          </p>
          <p className="text-sm text-stone-500">
            Tente outra categoria ou refine sua busca.
          </p>
        </div>
      </Reveal>
    );
  }
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p, i) => (
        <Reveal key={p.id} delay={Math.min(i, 8) * 50} direction="up">
          <ProductCard product={p} />
        </Reveal>
      ))}
    </div>
  );
}
