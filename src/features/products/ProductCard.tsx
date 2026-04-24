import { MessageCircle } from "lucide-react";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import Chip from "../../components/ui/Chip";
import { store } from "../../data/store";
import type { Product } from "../../types";

export default function ProductCard({ product }: { product: Product }) {
  const waMsg = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${product.name}. Está disponível?`
  );
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden">
        <PlaceholderImage
          label={product.name}
          ratio="square"
          className="rounded-none transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        {product.badges && product.badges.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1.5">
            {product.badges.map((b) => (
              <Chip key={b}>{b}</Chip>
            ))}
          </div>
        )}
        <h3 className="font-display text-base font-bold text-ink-900">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-stone-600">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-stone-100 pt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            {product.unit}
          </span>
          <a
            href={`https://wa.me/${store.contact.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            <MessageCircle className="h-4 w-4" /> Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
