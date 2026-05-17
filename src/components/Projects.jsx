import '../styles/projects.css'
import busImg from '../assets/bus.png'

function Projects() {
  const projects = [
    {
      name: 'HU Vehicle Management System',
      description: 'A full-stack vehicle management system for Haramaya University built with the MERN stack.',
      image: busImg,
      github: 'https://github.com/jjgrandma/HU-VMS',
      demo: null // add live URL here once deployed separately
    },
    {
      name: 'Bookstore Management System',
      description: 'A system for managing bookstore inventory, sales, and records.',
      image: '/bg-image.jpg',
      github: 'https://github.com/jjgrandma/bookstore',
      demo: null
    },
    {
      name: 'Hospital Management System',
      description: 'A hospital management system for handling patients, staff, and appointments.',
      image: '/bg-image.jpg',
      github: 'https://github.com/jjgrandma/hospital',
      demo: null
    },
    {
      name: 'Vehicle-exit Management System',
      description: 'A system for tracking and managing vehicle exits and entries.',
      image: '/bg-image.jpg',
      github: 'https://github.com/jjgrandma/vehicle-exit',
      demo: null
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="card-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn github-btn"
              >
                GitHub
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn demo-btn"
                >
                  Live Demo
                </a>
              ) : (
                <span className="card-btn demo-btn disabled">Coming Soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
