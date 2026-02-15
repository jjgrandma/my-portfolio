import "../styles/skills.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, cert: "/certificates/html.pdf" },
  { name: "CSS3", icon: <FaCss3Alt />, cert: "/certificates/css.pdf" },
  { name: "JavaScript", icon: <FaJs />, cert: "/certificates/javascript.pdf" },
  { name: "React", icon: <FaReact />, cert: "/certificates/react.pdf" },
  { name: "Node.js", icon: <FaNodeJs />, cert: "/certificates/node.pdf" },
  { name: "Express.js", icon: <SiExpress />, cert: "/certificates/node.pdf" },
  { name: "MongoDB", icon: <SiMongodb />, cert: "/certificates/mongodb.pdf" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, cert: "/certificates/css.pdf" },
  { name: "Git", icon: <FaGitAlt />, cert: "/certificates/git.pdf" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills & Certificates</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <a
            key={i}
            href={skill.cert}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card"
          >
            {skill.icon}
            {skill.name}
          </a>
        ))}
      </div>

      <p className="hint">Click a skill to view certificate (PDF)</p>
    </section>
  );
}

export default Skills;
