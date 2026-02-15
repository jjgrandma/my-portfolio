import '../styles/hero.css'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>Jemberu Gule</h1>
        <h2>
          And I'm a <span>MERN Full Stack Developer</span>
        </h2>
        <p>
          I'm a professional web developer with strong skills in Nodejs, MongoDB,
          JavaScript, Tailwind, React, and MERN stack development.
        </p>

        <div className="social-icons">
          <a href="https://www.facebook.com/jembar.gulelat"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/jemberu-gule-4143413a1"><FaLinkedinIn /></a>
          <a href="https://github.com/jjgrandma"><FaGithub /></a>
        </div>

        <div className="buttons">
          <a href="/cv.pdf" className="btn primary">Download CV</a>
          <a href="#projects" className="btn secondary">Portfolio</a>
        </div>
      </div>

      <div className="hero-right">
        <img src="/rrr.jpg" alt="profile" />
      </div>
    </section>
  )
}

export default Hero
