const projects = [
  {
    name: 'Vocational Test',
    description:
      'Plataforma de orientação profissional com IA, ajudando jovens a refletirem sobre carreira por meio de um teste vocacional inteligente.',
    tags: ['React', 'Vite', 'Firebase Auth', 'Firestore', 'Flask', 'OpenAI'],
    liveUrl: 'https://vocationaltest.com.br',
    repoUrl: 'https://github.com/amandamferreira/Vocational-Test',
  },
 {
  name: 'MentorHelp',
  description:
    'Plataforma de mentorias rápidas com videochamadas, conectando mentores e mentorados com autenticação e gerenciamento pelo Firebase.',
  tags: ['React', 'Firebase', 'Firestore', 'Jitsi Meet'],
  liveUrl: 'https://mentor-help-amber.vercel.app/',
  repoUrl: 'https://github.com/amandamferreira/MentorHelp',
},

];

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <h2>Projetos em destaque</h2>
        <p className="section-subtitle">
          Alguns dos projetos que mais representam o que eu gosto de construir.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Ver projeto
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Ver código
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
