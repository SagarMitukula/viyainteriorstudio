import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={scrolled || !isHome ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo">
        <div className="nav-logo-icon">V</div>
        <div className="nav-logo-text">
          <span>VIYA</span>
          <span>Salon & Spa</span>
        </div>
      </Link>
      <ul className="nav-links" style={menuOpen ? { display: 'flex', flexDirection: 'column', position: 'fixed', top: '4rem', left: 0, right: 0, background: 'rgba(15,34,24,0.98)', padding: '2rem', gap: '1.5rem', zIndex: 99 } : {}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stylists">Stylists</Link></li>
        <li><Link to="/styles">Styles</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        {user ? (
          <>
            <li style={{ fontSize: '0.75rem', color: 'var(--gold)', opacity: 0.8 }}>👤 {user.name}</li>
            <li><button onClick={logout} className="nav-logout-btn">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Sign In</Link></li>
        )}
      </ul>
      <Link to="/stylists" className="nav-cta">Book Now</Link>
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
