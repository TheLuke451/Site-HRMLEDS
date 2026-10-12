import Link from "next/link";

export const metadata = {
  title: "Contato",
  description: "Entre em contato com a HRM Leds.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-page" id="contato" aria-labelledby="contact-page-title">
        <div className="section-wrap contact-page-inner">
          <Link className="catalog-back-link" href="/#inicio">← Voltar para a página inicial</Link>
          <div className="section-label"><span>01</span><span /> Fale com a HRM Leds</div>
          <div className="contact-page-content">
            <div>
              <p className="eyebrow">Contato</p>
              <h1 id="contact-page-title">Vamos conversar<span>?</span></h1>
              <p className="contact-page-intro">Em breve, você poderá enviar uma mensagem diretamente para a equipe da HRM Leds por meio desta página.</p>
            </div>
            <div className="contact-placeholder">
              <span className="placeholder-mark" aria-hidden="true">✉</span>
              <h2>Formulário em preparação</h2>
              <p>O formulário e o envio para o e-mail comercial serão implementados em uma próxima etapa, depois que o endereço oficial da empresa for definido.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
