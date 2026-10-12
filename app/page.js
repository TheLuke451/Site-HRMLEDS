import Image from "next/image";
import Link from "next/link";
import ProductGrid from "../components/product-grid";
import { products } from "../data/products";

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/assets/banner-projetos.png"
          alt="Placas eletrônicas e componentes de iluminação automotiva"
          fill
          preload
          sizes="100vw"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> HRM Leds · Comércio de Auto Peças</p>
          <h1 id="hero-title">Iluminação para<br /><span>cada projeto.</span></h1>
          <p>Produtos e soluções de iluminação automotiva para diferentes veículos e aplicações.</p>
          <Link className="button button-light" href="/catalogo">
            Conheça nossos produtos <span aria-hidden="true">→</span>
          </Link>
        </div>
        <span className="hero-caption">Iluminação automotiva · HRM Leds</span>
      </section>

      <section className="about section-wrap" id="empresa" aria-labelledby="about-title">
        <div className="section-label"><span>01</span><span /> Quem somos</div>
        <div className="about-content">
          <h2 id="about-title">Autopeças com foco<br />em <span>iluminação.</span></h2>
          <div className="about-copy">
            <p>
              A HRM Leds é uma empresa familiar que atua no comércio de
              autopeças, com atenção especial a produtos de iluminação
              automotiva. Atendemos diferentes aplicações, de veículos de
              passeio a ônibus e veículos de emergência.
            </p>
            <Link className="text-link" href="/catalogo">Explore as categorias <span aria-hidden="true">↓</span></Link>
          </div>
        </div>
      </section>

      <section className="products" id="produtos" aria-labelledby="products-title">
        <div className="section-wrap products-inner">
          <div className="section-label"><span>02</span><span /> Produtos</div>
          <div className="products-heading">
            <div>
              <p className="eyebrow">Conheça algumas aplicações</p>
              <h2 id="products-title">Iluminação em<br /><span>diferentes formatos.</span></h2>
            </div>
            <p>Uma pequena seleção para conhecer nossos produtos. A lista completa fica na página do catálogo.</p>
          </div>

          <p className="catalog-count">{products.slice(0, 3).length} produtos demonstrativos</p>
          <ProductGrid products={products.slice(0, 3)} />
          <div className="catalog-cta">
            <Link className="button button-catalog" href="/catalogo">
              Ver todos os produtos <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="catalog-note">Imagens extraídas da referência do site antigo. Modelos, códigos, especificações e preços ainda precisam ser confirmados.</p>
        </div>
      </section>

      <section className="contact" id="contato" aria-labelledby="contact-title">
        <div className="contact-inner section-wrap">
          <div className="section-label section-label-light"><span>03</span><span /> Contato</div>
          <div className="contact-content">
            <div>
              <p className="eyebrow">HRM Leds</p>
              <h2 id="contact-title">Vendemos para<br /><span>todo o Brasil</span></h2>
            </div>
            <div className="contact-copy">
              <p>Os canais oficiais de atendimento serão adicionados assim que forem definidos pela empresa. Enquanto isso, conheça as categorias apresentadas nesta página.</p>
              <Link className="button button-outline" href="/contato">Fale conosco <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
