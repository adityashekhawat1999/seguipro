import { ArrowRight, Star } from 'lucide-react';
import './Hero.css'; // Reusing the same premium hero styles

export default function InstagramHero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-mesh" style={{ opacity: 0.8 }}></div>

      <div className="container hero-content">
        <div className="trust-badge reveal">
          <Star size={14} className="star-icon" fill="currentColor" />
          <span>Serviço Premium de Crescimento</span>
        </div>

        <h1 className="heading-lg hero-headline reveal" style={{ transitionDelay: '100ms' }}>
          <span>Mais Seguidores.</span> <br />
          <span className="italic-serif text-gradient">Mais Credibilidade.</span>
        </h1>

        <p className="hero-subhead text-muted reveal" style={{ transitionDelay: '200ms' }}>
          Aumente a sua autoridade no Instagram com seguidores reais e de alta qualidade. Planos desenhados para criadores e empresas que querem destacar-se.
        </p>

        <div className="hero-actions reveal" style={{ transitionDelay: '300ms' }}>
          <a href="#contacto" className="btn-primary btn-large">
            COMEÇAR AGORA
          </a>
          <a href="#planos" className="btn-secondary">
            Ver Planos <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
