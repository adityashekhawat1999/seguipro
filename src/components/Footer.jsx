import QuoteForm from './QuoteForm';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contacto">
      <div className="footer-ambient-glow"></div>
      <div className="container">
        
        <div className="footer-frame reveal">
          
          <div className="footer-top">
            <h2 className="heading-md footer-headline">
              {t('footer.titlePt1')}<span className="italic-serif text-gradient">{t('footer.titlePt2')}</span>{t('footer.titlePt3')}
            </h2>
          </div>

          <div className="footer-grid">
            
            <div className="footer-side-left">
              <div className="footer-col">
                <h4 className="footer-col-title">{t('footer.quickLinks')}</h4>
                <ul className="footer-links">
                  <li><Link to="/">{t('navbar.home')}</Link></li>
                  <li><Link to="/business-growth">{t('navbar.businessGrowth')}</Link></li>
                  <li><Link to="/websites">{t('navbar.websites')}</Link></li>
                  <li><a href="#contacto">{t('navbar.contact')}</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-col-title">{t('footer.contact')}</h4>
                <ul className="footer-links">
                  <li>
                    <a href="https://www.instagram.com/seguiproo/" target="_blank" rel="noreferrer" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      @seguiproo
                    </a>
                  </li>
                  <li style={{ marginTop: '12px' }}>
                    <a href="https://www.facebook.com/people/SeguiProo/61593742409783/" target="_blank" rel="noreferrer" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      SeguiProo
                    </a>
                  </li>
                  <li style={{ marginTop: '12px' }}>
                    <a href="mailto:geral@seguiproo.com" className="social-link">
                      <Mail size={18} className="social-icon" />
                      geral@seguiproo.com
                    </a>
                  </li>
                  <li style={{ marginTop: '12px' }}>
                    <a href="https://wa.me/919220356317" target="_blank" rel="noreferrer" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg>
                      +91 92203 56317
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-side-right">
              <QuoteForm />
            </div>

          </div>

          <div className="footer-bottom">
            <p>{t('footer.copyright')}</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
