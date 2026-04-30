import { useState } from 'react'
import '../styles/hero.css'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

function Hero() {
  const [showCV, setShowCV] = useState(false)

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
          <button className="btn primary" onClick={() => setShowCV(true)}>View CV</button>
          <a href="#projects" className="btn secondary">Portfolio</a>
        </div>
      </div>

      <div className="hero-right">
        <img src="/rrr.jpg" alt="profile" />
      </div>

      {/* CV Modal */}
      {showCV && (
        <div className="cv-overlay" onClick={() => setShowCV(false)}>
          <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <span>My CV</span>
              <div className="cv-modal-actions">
                <a href="/MyCv.pdf" download="MyCv.pdf" className="cv-download-btn">
                  ⬇ Download
                </a>
                <button className="cv-close-btn" onClick={() => setShowCV(false)}>✕</button>
              </div>
            </div>
            <iframe
              src="/MyCv.pdf"
              title="My CV"
              className="cv-iframe"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
