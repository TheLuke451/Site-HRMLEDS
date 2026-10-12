import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="HRM Leds, página inicial">
        <Image
          src="/brand/hrm-leds-logo.png"
          alt="HRM Leds — Comércio de Auto Peças"
          width={300}
          height={78}
        />
      </Link>

      <nav className="main-nav" aria-label="Navegação principal">
        <Link href="/#inicio">Início</Link>
        <Link href="/#empresa">Quem somos</Link>
        <Link href="/catalogo">Produtos</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}
