import '../styles/footer.css'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Jemberu Gule</h3>
        <p>Frontend Developer | React | MERN Stack</p>

        <div className="footer-socials">
          <a href="https://www.facebook.com/jembar.gulelat" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/jemberu-gule-4143413a1" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/jjgrandma" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Jemberu Gule. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
