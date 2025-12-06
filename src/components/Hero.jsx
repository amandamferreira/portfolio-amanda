import minhaFoto from "../assets/imagemportfolio.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        {/* TEXTO */}
        <div className="hero-text">
          <p className="hero-tag">Olá, eu sou a Amanda de Mello Ferreira!</p>
          <h1>Desenvolvedora Full-Stack em formação</h1>
          <p className="hero-subtitle">
            Estudante do curso Técnico em Informática no CIMOL, focada em criar aplicações web
            modernas, bem estruturadas e voltadas para a experiência do usuário.
          </p>

          <div className="hero-actions">

            <a
              href="amanda-cv.pdf"
              download="Amanda-Ferreira-Curriculo.pdf"
              className="btn btn-primary"
            >
              Baixar CV
            </a>

            <a
              href="https://github.com/amandamferreira"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Ver GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/amandamferreiraa"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Ver LinkedIn
            </a>

            <a href="#projetos" className="btn btn-text">
              Ver projetos ↓
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div className="hero-photo-container">
          <img src={minhaFoto} alt="Foto de Amanda" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}
