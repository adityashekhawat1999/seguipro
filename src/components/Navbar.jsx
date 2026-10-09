import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left: Logo */}
        <Link to="/" className="navbar-logo-link">
          <img src="/logo.png" alt="SeguiProo" className="navbar-logo-img" />
        </Link>

        {/* Center: Desktop Links */}
        <div className="navbar-links desktop-only">
          <Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>{t('navbar.home')}</Link>
          <Link to="/business-growth" className={`nav-link ${path === '/business-growth' ? 'active' : ''}`}>{t('navbar.businessGrowth')}</Link>
          <Link to="/websites" className={`nav-link ${path === '/websites' ? 'active' : ''}`}>{t('navbar.websites')}</Link>
          <Link to="/software" className={`nav-link ${path === '/software' ? 'active' : ''}`}>{t('navbar.software')}</Link>
          <a href="#contacto" className="nav-link">{t('navbar.contact')}</a>
        </div>

        {/* Right: CTA and Mobile Toggle */}
        <div className="navbar-right">
          <button 
            className="lang-toggle-btn"
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            style={{ 
              background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', 
              padding: '6px 10px', borderRadius: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', marginRight: '16px', fontSize: '0.8rem', fontWeight: 'bold'
            }}
          >
            <Globe size={14} /> {language.toUpperCase()}
          </button>
          
          <a href="#contacto" className="btn-primary desktop-cta">
            {t('navbar.quote')} <ArrowUpRight size={18} className="cta-arrow" />
          </a>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} color="#FFF" /> : <Menu size={28} color="#FFF" />}
          </button>
        </div>
      </div>
    </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" className={`mobile-nav-link ${path === '/' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.home')}</Link>
          <Link to="/business-growth" className={`mobile-nav-link ${path === '/business-growth' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.businessGrowth')}</Link>
          <Link to="/websites" className={`mobile-nav-link ${path === '/websites' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.websites')}</Link>
          <Link to="/software" className={`mobile-nav-link ${path === '/software' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.software')}</Link>
          <a href="#contacto" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.contact')}</a>

          <a href="#contacto" className="btn-primary mobile-menu-cta" onClick={() => setIsMobileMenuOpen(false)}>
            {t('navbar.quote')} <ArrowUpRight size={20} className="cta-arrow" />
          </a>
        </div>
      </div>
    </>
  );
}
