import '../styles/projects.css'
import busImg from '../assets/bus.png'

function Projects() {
  const projects = [
    {
      name: 'HU Vehicle Management System',
      description: 'A full-stack vehicle management system for Haramaya University built with the MERN stack.',
      image: busImg,
      github: 'https://github.com/jjgrandma/HU-VMS',
      demo: null
    },
    {
      name: 'Bookstore Management System',
      description: 'A system for managing bookstore inventory, sales, and records.',
      image: '/BS.jpg',
      github: 'https://github.com/jjgrandma/HU-bookstoreManagementSystem',
      demo: null
    },
    {
      name: 'Hospital Management System',
      description: 'A hospital management system for handling patients, staff, and appointments.',
      image: '/HMS.png',
      github: null,
      demo: null
    },
    {
      name: 'Vehicle-exit Management System',
      description: 'A system for tracking and managing vehicle exits and entries.',
      image: '/VE.jpg',
      github: null,
      demo: null
    },
    {
      name: 'Poor Content Performance Prediction',
      description: 'A machine learning project to predict poor content performance in a media company.',
      image: '/poor.jpg',
      github: null,
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
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn github-btn"
                >
                  GitHub
                </a>
              ) : (
                <span className="card-btn demo-btn disabled">Coming Soon</span>
              )}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn demo-btn"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
