# Design Handoff - Pernambuco Materiais

## 1) Objetivo deste documento

Este arquivo descreve o design atual do site para servir como base de trabalho no Claude Design.

Escopo:
- Documentar a interface existente (visual, componentes, comportamento e responsividade)
- Explicitar limites do que deve ser preservado e do que pode evoluir
- Registrar riscos e pendencias de conteudo

Fora de escopo:
- Implementacao de novas telas
- Mudancas de backend
- Criacao de identidade de marca do zero

---

## 2) Contexto do produto

Nome: Pernambuco Materiais

Posicionamento atual:
- Loja de materiais para construcao
- Mensagem central: parceria para obra real, do alicerce ao acabamento
- Canais principais de conversao: WhatsApp, telefone e visita fisica

Publico principal:
- Mestre de obra
- Profissional de construcao
- Cliente final em reforma/construcao

Objetivo da landing:
- Apresentar proposta de valor
- Facilitar descoberta de categorias/produtos
- Levar o usuario para contato rapido

---

## 3) Direcao visual atual

Paleta dominante:
- Laranja (brand) como cor de acao e destaque
- Tons escuros (ink) para contraste e blocos premium
- Neutros stone para superfice, bordas e texto secundario

Personalidade visual:
- Direta
- Confiavel
- Comercial
- Acessivel

Linguagem de layout:
- Cartoes com cantos arredondados
- Sombra suave
- CTA bem visivel
- Fundo escuro no Hero para impacto inicial

---

## 4) Design system atual (tokens e padroes)

### 4.1 Cores

Brand:
- 50: #fff7ed
- 100: #ffedd5
- 200: #fed7aa
- 300: #fdba74
- 400: #fb923c
- 500: #f97316
- 600: #ea580c
- 700: #c2410c
- 800: #9a3412
- 900: #7c2d12

Ink:
- 900: #0b1220
- 800: #111827
- 700: #1f2937

Neutros:
- Escala stone do Tailwind (uso amplo em fundo/bordas/texto secundario)

### 4.2 Tipografia

Familias:
- Display: Sora, Inter, system-ui, sans-serif
- Corpo/UI: Inter, system-ui, sans-serif

Hierarquia recorrente:
- Hero title: text-4xl sm:text-5xl md:text-6xl, font-extrabold, tracking-tight
- Titulo de secao: text-3xl sm:text-4xl, font-bold
- Eyebrow: text-sm, uppercase, tracking amplo
- Corpo: text-base/text-lg

### 4.3 Espacamento e ritmo

Padrao de secoes:
- py-16 em mobile
- py-20 em sm+

Container:
- max-w-7xl
- px-4 sm:px-6 lg:px-8

Ritmo de blocos:
- gap-4, gap-6, gap-10, gap-12 em layouts principais

### 4.4 Bordas, raio e sombra

Raio:
- rounded-full para botoes/chips
- rounded-xl e rounded-2xl para cards e blocos

Sombra:
- shadow-soft: 0 10px 40px -10px rgba(15, 23, 42, 0.15)
- shadow-lg no hover de cards

### 4.5 Motion e transicao

Animacoes globais:
- float-slow
- float-slower
- pulse-glow
- fade-in-down

Componente de entrada por scroll:
- Reveal com direcao (up/down/left/right/fade)
- delay e duration configuraveis

Acessibilidade de movimento:
- Prefers-reduced-motion reduz animacao e transicao para quase zero

---

## 5) Arquitetura da pagina (ordem das secoes)

1. Hero
2. Highlights
3. Featured Categories
4. Products Section
5. About Section
6. Contact Section
7. Call To Action
8. Footer

Intencao de jornada:
- Impacto inicial
- Prova de valor
- Descoberta por categoria
- Explorar catalogo
- Reforco institucional
- Conversao por contato

---

## 6) Descricao visual por secao

### 6.1 Hero

Composicao:
- Grid de 2 colunas em md+
- Esquerda: chip, titulo forte, texto, CTAs, mini-estatisticas
- Direita: placeholders de imagem com animacao de flutuacao

Visual:
- Fundo ink-900
- Grid decorativo semitransparente
- Glow brand difuso no canto superior direito

CTAs:
- Ver produtos
- Como chegar

### 6.2 Highlights

Composicao:
- Cartoes de beneficio em grid responsivo
- Icone + titulo + descricao curta

Papel na pagina:
- Reforcar confianca e rapidez de leitura

### 6.3 Featured Categories

Composicao:
- Cards clicaveis por categoria
- Uso de icone e hierarquia curta

Interacao:
- Clique pre-seleciona categoria em Produtos
- Hover com elevacao e mudanca de enfase

### 6.4 Products Section

Composicao:
- Filtro de categorias (chips)
- Busca textual
- Contador de resultados
- Grid de produtos

Comportamento:
- Filtro + busca por nome/descricao curta
- Estado vazio com mensagem amigavel

### 6.5 About Section

Composicao:
- Narrativa institucional
- Blocos de valor
- Imagem placeholder

Papel:
- Humanizar e dar contexto de marca

### 6.6 Contact Section

Composicao:
- Esquerda: cards de endereco/horario/canais
- Direita: mapa (ou placeholder)

Comportamento:
- Se mapUrl existir, renderiza iframe
- Se nao existir, mostra estado "Mapa em breve"

### 6.7 Call To Action

Composicao:
- Bloco final de conversao
- Destaque para WhatsApp e localizacao

Papel:
- Fechamento comercial antes do footer

### 6.8 Footer

Composicao:
- Fundo escuro
- Navegacao auxiliar
- Contato
- Redes sociais (se configuradas)

---

## 7) Componentes e regras de interacao

### Navbar
- Sticky no topo
- Estado visual muda apos scroll
- Desktop com links diretos + telefone + CTA WhatsApp
- Mobile com menu colapsavel

### Botoes
- Variantes: primary, ghost, outline
- Formato arredondado
- Ring de foco presente

### Cards
- Base branca
- Ring discreto
- Sombra suave
- Hover com elevacao

### Product Card
- Imagem quadrada (placeholder)
- Badges opcionais
- Nome, descricao curta e unidade
- CTA para WhatsApp com mensagem pre-preenchida

### Search e filtro
- Busca por texto com icone e limpar
- Filtro por categoria em chips
- Integracao controlada com estado global da secao

### Mapa
- Estado real com iframe
- Estado fallback quando mapUrl nao foi configurado

---

## 8) Responsividade (comportamento esperado)

Breakpoints base:
- sm: 640
- md: 768
- lg: 1024
- xl: 1280

Padroes:
- Hero vira 2 colunas em md+
- Highlights: 1 -> 2 -> 4 colunas
- Categorias: 1 -> 2 -> 3 colunas
- Produtos: 1 -> 2 -> 3 -> 4 colunas
- Contato: empilhado em mobile, 2 colunas no desktop
- Navbar: menu hamburguer no mobile, navegacao completa no desktop

---

## 9) Conteudo e tom de voz

Idioma:
- Portugues do Brasil

Tom:
- Direto
- Comercial
- Proximo do dia a dia de obra

Padrao de copy:
- Frases curtas
- Linguagem objetiva
- Sem tecnicismo excessivo

---

## 10) Riscos, lacunas e pendencias

1. Conteudos placeholder no store (descricao, endereco, horarios etc)
2. mapUrl indefinido (mapa ainda em placeholder)
3. Imagens reais nao cadastradas (uso de PlaceholderImage)
4. Catalogo de produtos ainda de exemplo
5. Sem exibicao de preco no card (fluxo orientado a consulta via WhatsApp)
6. Cor hardcoded no logo (nao 100% tokenizada)

---

## 11) Limites de redesign para o Claude Design

### Deve preservar

1. Identidade geral de loja de materiais
2. Paleta com laranja brand como acento principal
3. Estrutura de jornada em 8 secoes
4. CTA de WhatsApp como canal central de conversao
5. Leitura rapida e orientada a acao

### Pode evoluir

1. Layout de cards e hierarquia visual
2. Refino tipografico e espacamento
3. Estilo de ilustracao/fotografia
4. Sistema de microinteracoes (mantendo performance)
5. Padronizacao mais rigorosa de tokens (focus ring, cores hardcoded)

### Nao deve fazer

1. Transformar o site em algo generico sem cara de loja de materiais
2. Reduzir contraste em areas criticas de CTA
3. Esconder ou enfraquecer caminhos de contato rapido

---

## 12) Prompt pronto para enviar ao Claude Design

Use o texto abaixo como briefing inicial:

Voce e um designer de produto senior. Quero propor um redesign visual para a landing page da marca Pernambuco Materiais, mantendo a identidade de loja de materiais de construcao e foco comercial.

Contexto importante:
- Site em portugues (pt-BR)
- Conversao principal via WhatsApp
- Estrutura atual com 8 secoes: Hero, Highlights, Categorias, Produtos, Sobre, Contato, CTA, Footer
- Paleta atual centrada em laranja (brand) + tons escuros (ink) + neutros stone
- Componente de busca e filtro de categorias em Produtos
- Navbar responsiva com menu mobile

Objetivo do redesign:
- Melhorar sofisticacao visual sem perder clareza comercial
- Manter CTA muito evidente
- Manter leitura simples para publico de obra
- Melhorar consistencia de espacos, tipografia e estados de interacao

Restricoes:
- Nao descaracterizar o segmento (construcao/materiais)
- Nao eliminar canais de contato rapido
- Preservar boa performance em mobile

Entrega esperada:
1. Direcao visual proposta
2. Sistema de componentes (cards, botoes, filtros, secoes)
3. Regras de responsividade
4. Estrategia de uso de imagem e iconografia
5. Lista de melhorias priorizadas (alto, medio, baixo impacto)

---

## 13) Referencias de codigo (fonte da verdade)

- src/App.tsx
- src/index.css
- tailwind.config.js
- src/components/layout/Navbar.tsx
- src/components/layout/Footer.tsx
- src/components/ui/Button.tsx
- src/components/ui/Section.tsx
- src/components/ui/Reveal.tsx
- src/features/home/Hero.tsx
- src/features/products/ProductsSection.tsx
- src/features/products/ProductCard.tsx
- src/features/contact/ContactSection.tsx
- src/features/contact/MapEmbed.tsx
- src/data/store.ts
- src/data/categories.ts
- src/data/highlights.ts
- src/data/products.ts
