import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';

export default function Hero() {

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

    </section>
  );
}
