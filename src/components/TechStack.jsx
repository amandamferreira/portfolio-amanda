import { 
  FaReact, FaPython, FaNodeJs, FaGitAlt, FaGithub, FaDatabase,
  FaHtml5, FaCss3Alt
} from "react-icons/fa";
import { SiVite, SiTypescript, SiJavascript, SiExpress, SiFlask, SiMysql, 
  SiFirebase, SiVercel, SiRender, SiBootstrap 
} from "react-icons/si";

const groups = [
  {
    title: "Front-end",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Flask", icon: <SiFlask /> },
    ],
  },
  {
    title: "Banco de dados & Auth",
    items: [
      { name: "Firebase Firestore", icon: <SiFirebase /> },
      { name: "Firebase Auth", icon: <SiFirebase /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Outros",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "APIs REST", icon: <FaDatabase /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2>Tecnologias</h2>
        <p className="section-subtitle">
          Tecnologias que utilizo no desenvolvimento dos meus projetos.
        </p>

        {/* aqui está a única alteração */}
        <div className="tech-grid four-columns">
          
          {groups.map((group) => (
            <div key={group.title} className="tech-card">
              <h3>{group.title}</h3>

              <ul className="tech-list">
                {group.items.map((item) => (
                  <li key={item.name} className="tech-item">
                    <span className="tech-icon">{item.icon}</span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
