import { useState } from "react";
import Layout from "./components/layout/Layout";
import Hero from "./features/home/Hero";
import Highlights from "./features/home/Highlights";
import FeaturedCategories from "./features/home/FeaturedCategories";
import CallToAction from "./features/home/CallToAction";
import ProductsSection from "./features/products/ProductsSection";
import AboutSection from "./features/about/AboutSection";
import ContactSection from "./features/contact/ContactSection";

export default function App() {
  // Filtro de categoria controlado aqui pra que FeaturedCategories
  // possa pré-selecionar a categoria ao scrollar para a seção Produtos.
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Layout>
      <Hero />
      <Highlights />
      <FeaturedCategories onPickCategory={setActiveCategory} />
      <ProductsSection
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <AboutSection />
      <ContactSection />
      <CallToAction />
    </Layout>
  );
}
