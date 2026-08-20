import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left: Logo */}
        <Link to="/" className="navbar-logo-link">
          <img src="/logo.png" alt="SeguiProo" className="navbar-logo-img" />
        </Link>

        {/* Center: Desktop Links */}
        <div className="navbar-links desktop-only">
          <Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>Início</Link>
          <Link to="/instagram" className={`nav-link ${path === '/instagram' ? 'active' : ''}`}>Instagram</Link>
          <Link to="/websites" className={`nav-link ${path === '/websites' ? 'active' : ''}`}>Websites</Link>
          <a href="#contacto" className="nav-link">Contacto</a>
        </div>

        {/* Right: CTA and Mobile Toggle */}
        <div className="navbar-right">
          <a href="#contacto" className="btn-primary desktop-cta">
            PEDIR ORÇAMENTO <ArrowUpRight size={18} className="cta-arrow" />
          </a>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} color="#FFF" /> : <Menu size={28} color="#FFF" />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" className={`mobile-nav-link ${path === '/' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
          <Link to="/instagram" className={`mobile-nav-link ${path === '/instagram' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Instagram</Link>
          <Link to="/websites" className={`mobile-nav-link ${path === '/websites' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Websites</Link>
          <a href="#contacto" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          
          <a href="#contacto" className="btn-primary mobile-menu-cta" onClick={() => setIsMobileMenuOpen(false)}>
            PEDIR ORÇAMENTO <ArrowUpRight size={20} className="cta-arrow" />
          </a>
        </div>
      </div>
    </nav>
  );
}
