import Link from "next/link";
import CatalogBrowser from "../../components/catalog-browser";
import { products } from "../../data/products";

export const metadata = {
  title: "Produtos",
  description: "Catálogo demonstrativo de produtos de iluminação automotiva da HRM Leds.",
};

export default function CatalogPage() {
  return (
    <main>
      <section className="catalog-page" id="catalogo" aria-labelledby="catalog-title">
        <div className="section-wrap catalog-page-inner">
          <Link className="catalog-back-link" href="/#inicio">← Voltar para a página inicial</Link>
          <div className="catalog-page-heading">
            <div>
              <p className="eyebrow">Iluminação automotiva</p>
              <h1 id="catalog-title">Nossos <span>produtos.</span></h1>
            </div>
            <p>Confira os produtos demonstrativos abaixo. Informações comerciais completas serão adicionadas quando forem confirmadas pela empresa.</p>
          </div>

          <CatalogBrowser products={products} />
          <p className="catalog-note">Imagens extraídas da referência do site antigo. Os códigos DEMO são fictícios; modelos, especificações e preços ainda precisam ser confirmados.</p>
        </div>
      </section>
    </main>
  );
}
