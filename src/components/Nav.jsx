import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        <div className="nav-logo-icon">V</div>
        <div className="nav-logo-text">
          <span>VIYA</span>
          <span>Interior Studio</span>
        </div>
      </a>
      <ul className="nav-links" style={menuOpen ? { display: 'flex', flexDirection: 'column', position: 'fixed', top: '4rem', left: 0, right: 0, background: 'rgba(15,34,24,0.98)', padding: '2rem', gap: '1.5rem', zIndex: 99 } : {}}>
        <li><a href="#services" onClick={handleNavClick}>Services</a></li>
        <li><a href="#about" onClick={handleNavClick}>About</a></li>
        <li><a href="#process" onClick={handleNavClick}>Process</a></li>
        <li><a href="#portfolio" onClick={handleNavClick}>Portfolio</a></li>
        <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Get a Quote</a>
      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={menuOpen ? { position: 'fixed', top: '1.5rem', right: '1.5rem', zIndex: 100 } : {}}
      >
        <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
        <span style={menuOpen ? { opacity: 0 } : {}}></span>
        <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
      </div>
    </nav>
  );
}
