import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/" aria-label="HRM Leds, voltar ao início">
        <Image src="/brand/hrm-leds-logo.png" alt="HRM Leds" width={220} height={57} />
      </Link>
      <p>Comércio de Auto Peças · Iluminação automotiva</p>
      <Link className="back-top" href="/#inicio">Voltar ao início ↑</Link>
      <span className="copyright">© 2026 HRM Leds</span>
    </footer>
  );
}
