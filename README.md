# Pernambuco Materiais de Construção

Site institucional/catálogo da loja. Frontend-only — sem backend, sem banco.

**Stack:** Vite + React + TypeScript + TailwindCSS + React Router + lucide-react.
**Dev:** Docker. **Deploy:** Vercel.

---

## Rodando localmente (Docker)

```bash
docker compose up --build
```

Abre em → **http://localhost:5173** com hot reload (mudanças em `src/` recarregam sozinho).

Parar:
```bash
docker compose down
```

---

## Deploy

Cada `git push` para `main` dispara redeploy automático na Vercel.

Manual via CLI (dentro de container):
```bash
docker run -it --rm \
  -v "$PWD:/app" -w /app \
  -v "$HOME/.local/share/com.vercel.cli:/root/.local/share/com.vercel.cli" \
  node:20-alpine npx -y vercel@latest --prod
```

---

## Estrutura

```
src/
├── components/
│   ├── ui/             # primitives (Button, Container, Section, Chip, Icon, PlaceholderImage)
│   └── layout/         # Layout, Navbar, Footer, Logo, ScrollToTop
├── features/
│   ├── home/           # Hero, Highlights, FeaturedCategories, WhyUs, CallToAction
│   ├── products/       # ProductCard, ProductGrid, CategoryFilter, SearchBar
│   ├── about/          # StoreStory, Values
│   ├── contact/        # ContactInfo, MapEmbed
│   └── shared/         # PageHero
├── pages/              # rotas (compõem features)
├── data/               # placeholders (store, categories, products, highlights)
├── types/              # tipos compartilhados
└── lib/                # utils
```

**Conteúdo placeholder** está todo em `src/data/` — único lugar a editar quando vierem fotos e dados reais.

| O quê | Arquivo |
|---|---|
| Endereço, horário, telefones, redes sociais | `src/data/store.ts` |
| Categorias da loja | `src/data/categories.ts` |
| Produtos do catálogo | `src/data/products.ts` |
| Diferenciais (entrega, etc) | `src/data/highlights.ts` |
| Mapa do Google | `mapUrl` em `src/data/store.ts` |
| Fotos | substituir `<PlaceholderImage />` por `<img src="/fotos/..." />` (subir em `public/`) |
