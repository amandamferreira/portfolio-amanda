const groups = [
  {
    title: 'Front-end',
    items: ['React', 'Vite', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Express', 'Python', 'Flask'],
  },
  {
    title: 'Banco de dados & Auth',
    items: ['Firebase Firestore', 'Firebase Auth', 'MySQL'],
  },
  {
    title: 'Outros',
    items: ['Git', 'GitHub', 'APIs REST', 'Vercel', 'Render'],
  },
];

export default function TechStack() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2>Tecnologias</h2>
        <p className="section-subtitle">
          Tecnologias com as quais tenho mais experiência no dia a dia dos projetos.
        </p>

        <div className="tech-grid">
          {groups.map((group) => (
            <div key={group.title} className="tech-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
