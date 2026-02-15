import { useState } from 'react'
import '../styles/navbar.css'

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="navbar">
      <div className="logo">JG</div>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={`nav-links ${open ? 'show' : ''}`}>
        <a href="#home" className="nav-btn">Home</a>
        <a href="#about" className="nav-btn">About</a>
        <a href="#skills" className="nav-btn">Skills</a>
        <a href="#services" className="nav-btn">Services</a>
        <a href="#projects" className="nav-btn">Projects</a>
        <a href="#contact" className="nav-btn primary">Contact</a>
      </nav>

      {/* FIXED BUTTON */}
      <button className="navbar-theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
      </button>
    </header>
  )
}

export default Navbar
