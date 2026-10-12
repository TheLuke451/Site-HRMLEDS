import "./globals.css";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

export const metadata = {
  title: {
    default: "HRM Leds | Comércio de Auto Peças",
    template: "%s | HRM Leds",
  },
  description: "Comércio de autopeças com foco em iluminação automotiva.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="top-stripe" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
