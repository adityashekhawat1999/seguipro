import QuoteForm from './QuoteForm';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-ambient-glow"></div>
      <div className="container">
        
        <div className="footer-frame reveal">
          
          <div className="footer-top">
            <h2 className="heading-md footer-headline">
              Vamos <span className="italic-serif text-gradient">Criar</span> Presença Digital Que Converte
            </h2>
          </div>

          <div className="footer-grid">
            
            <div className="footer-side-left">
              <div className="footer-col">
                <h4 className="footer-col-title">Links Rápidos</h4>
                <ul className="footer-links">
                  <li><Link to="/">Início</Link></li>
                  <li><Link to="/instagram">Instagram Growth</Link></li>
                  <li><Link to="/websites">Sites & E-commerce</Link></li>
                  <li><a href="#contacto">Contacto</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-col-title">Contacto</h4>
                <ul className="footer-links">
                  <li>
                    <a href="https://www.instagram.com/seguipro_/" target="_blank" rel="noreferrer" className="social-link">
                      <Instagram size={18} className="social-icon" />
                      @seguipro_
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
                      <MessageCircle size={18} className="social-icon" />
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
            <p>© SeguiProo 2026. Todos os direitos reservados.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
