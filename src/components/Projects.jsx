import '../styles/projects.css'

function Projects() {
  const projects = [
    {
      name: 'Bookstore Management System',
      image: '/bg-image.jpg', // replace with actual image path
      github: 'https://github.com/yourusername/bookstore'
    },
    {
      name: 'Vehicle Management System',
      image: '/bg-image.jpg',
      github: 'https://github.com/yourusername/vehicle'
    },
    {
      name: 'Hospital Management System',
      image: '/bg-image.jpg',
      github: 'https://github.com/yourusername/hospital'
    },
    {
      name: 'Vehicle-exit Management System',
      image: '/bg-image.jpg',
      github: 'https://github.com/yourusername/vehicle-exit'
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
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
