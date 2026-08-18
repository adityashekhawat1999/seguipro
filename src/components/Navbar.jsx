import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <a href="#" className="navbar-logo-link">
          <img src="/logo.png" alt="FollowPro" className="navbar-logo-img" />
        </a>

        {/* Center: Desktop Links */}
        <div className="navbar-links desktop-only">
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#instagram" className="nav-link">Instagram</a>
          <a href="#sites" className="nav-link">Sites</a>
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
          <a href="#servicos" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
          <a href="#instagram" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Instagram</a>
          <a href="#sites" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Sites</a>
          <a href="#contacto" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          
          <a href="#contacto" className="btn-primary mobile-menu-cta" onClick={() => setIsMobileMenuOpen(false)}>
            PEDIR ORÇAMENTO <ArrowUpRight size={20} className="cta-arrow" />
          </a>
        </div>
      </div>
    </nav>
  );
}
