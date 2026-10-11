import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => {
    if (path === '/projects') {
      return location.pathname === '/projects' || location.pathname.startsWith('/projects/')
    }
    return location.pathname === path
  }

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Yadu Krishna M S<span>.</span>
        </Link>

        <nav className="navbar-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="navbar-talk">
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </Link>

          <button
            type="button"
            className={`navbar-hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-mobile ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={isActive(link.path) ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
        <div className="navbar-mobile-cta">
          <Link to="/contact" className="btn btn-primary" onClick={closeMenu} style={{ width: '100%', justifyContent: 'center' }}>
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  )
}
