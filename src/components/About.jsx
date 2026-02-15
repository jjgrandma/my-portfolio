import "../styles/about.css";

function About() {
  return (
    <div>
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a MERN full stack developer with a strong foundation in building
            modern, responsive, and user-friendly web applications using React.
            I developed my technical skills through academic training and
            continuous self-learning, focusing on clean UI design and efficient
            component-based architecture.
          </p>

          <p>
            I am a graduate of <strong>Haramaya University</strong>, where I
            earned a <strong>BSc in Computer Science</strong>. During my studies,
            I gained hands-on experience in software engineering, web
            development, and problem-solving, and I further specialized in the
            <strong> MERN stack</strong> for full-stack web application
            development.
          </p>
        </div>

        <div className="about-image">
           <div className="image-placeholder">
          <img src="/rrr.jpg" alt="Graduation images" />
        
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
