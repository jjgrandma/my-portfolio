import React from 'react';
import '../styles/themeToggle.css';
function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button 
      onClick={toggleDarkMode} 
      className="theme-toggle"
      aria-label="Toggle dark/light mode"
    >
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
