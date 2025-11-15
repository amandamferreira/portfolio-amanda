export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <h2>Contato</h2>
        <p className="section-subtitle">
          Se você tiver interesse em estágio, parceria ou quiser saber mais sobre meus
          projetos, pode falar comigo por aqui:
        </p>

        <div className="contact-cards">
          <a
            href="mailto:euamandaferreira7@gmail.com"
            className="contact-card"
          >
            <span className="contact-label">E-mail</span>
            <span className="contact-value">euamandaferreira7@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/amandamferreiraa"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">/in/amandamferreiraa</span>
          </a>

          <a
            href="https://github.com/amandamferreira"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">@amandamferreira</span>
          </a>
        </div>
      </div>
    </section>
  );
}
