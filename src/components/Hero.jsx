import { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [activeSection, setActiveSection] = useState('01');

  useEffect(() => {
    const handleScroll = () => {
      const instagram = document.getElementById('instagram');
      const sites = document.getElementById('sites');
      const ecommerce = document.getElementById('ecommerce');

      if (!instagram || !sites || !ecommerce) return;

      const scrollPos = window.scrollY + window.innerHeight / 2;

      if (ecommerce.offsetTop <= scrollPos) {
        setActiveSection('03');
      } else if (sites.offsetTop <= scrollPos) {
        setActiveSection('02');
      } else if (instagram.offsetTop <= scrollPos) {
        setActiveSection('01');
      } else {
        setActiveSection('01');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Premium Background Mesh */}
      <div className="hero-bg-mesh"></div>

      <div className="container hero-content">
        <div className="trust-badge reveal">
          <Star size={14} className="star-icon" fill="currentColor" />
          <span>Mais de 600 clientes satisfeitos</span>
        </div>

        <h1 className="heading-lg hero-headline reveal" style={{ transitionDelay: '100ms' }}>
          <span>Mais Seguidores.</span> <span className="italic-serif text-gradient">Mais Credibilidade.</span><br />
          <span>Sites Que</span> <span className="italic-serif text-gradient">Fazem Crescer</span> <span>o Seu Negócio.</span>
        </h1>

        <p className="hero-subhead text-muted reveal" style={{ transitionDelay: '200ms' }}>
          O seu crescimento digital começa com a escolha certa. Ajudamos criadores, empresas e marcas a crescerem com credibilidade — no Instagram e online.
        </p>

        <div className="hero-actions reveal" style={{ transitionDelay: '300ms' }}>
          <a href="#contacto" className="btn-primary btn-large">
            PEDIR ORÇAMENTO GRÁTIS
          </a>
          <a href="#servicos" className="btn-secondary">
            Ver Serviços <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="hero-mini-nav reveal" style={{ transitionDelay: '400ms' }}>
        <div className="container mini-nav-container">
          <a href="#instagram" className={`mini-nav-item ${activeSection === '01' ? 'active' : ''}`}>
            <span className="mini-nav-num">01</span> Instagram Growth
          </a>
          <a href="#sites" className={`mini-nav-item ${activeSection === '02' ? 'active' : ''}`}>
            <span className="mini-nav-num">02</span> Sites Profissionais
          </a>
          <a href="#ecommerce" className={`mini-nav-item ${activeSection === '03' ? 'active' : ''}`}>
            <span className="mini-nav-num">03</span> E-commerce
          </a>
        </div>
      </div>
    </section>
  );
}
