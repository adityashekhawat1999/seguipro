import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';

export default function WebsitesHero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-mesh" style={{ filter: 'hue-rotate(-15deg)', opacity: 0.8 }}></div>

      <div className="container hero-content">
        <div className="trust-badge reveal">
          <Star size={14} className="star-icon" fill="currentColor" />
          <span>Experiências Digitais Premium</span>
        </div>

        <h1 className="heading-lg hero-headline reveal" style={{ transitionDelay: '100ms' }}>
          <span>Sites Que</span> <span className="italic-serif text-gradient">Fazem Crescer</span> <br />
          <span>o Seu Negócio.</span>
        </h1>

        <p className="hero-subhead text-muted reveal" style={{ transitionDelay: '200ms' }}>
          Desenvolvemos websites e plataformas de e-commerce de alta performance, otimizados para converter visitantes em clientes reais.
        </p>

        <div className="hero-actions reveal" style={{ transitionDelay: '300ms' }}>
          <a href="#contacto" className="btn-primary btn-large">
            PEDIR ORÇAMENTO GRÁTIS
          </a>
          <a href="#planos" className="btn-secondary">
            Ver Pacotes <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
