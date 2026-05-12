import { useState } from 'react'

function Navbar({ sections }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar">
        <a className="brand-mark" href="#about" onClick={closeMenu}>
          FH
        </a>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-panel ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            {sections.map((section) => (
              <a key={section.href} href={section.href} onClick={closeMenu}>
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
