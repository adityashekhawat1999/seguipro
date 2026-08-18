import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="insane-cta" id="cta-section">
      <div className="insane-cta-bg">
        <div className="cta-vignette"></div>
      </div>
      
      <div className="container cta-container">
        <div className="cta-glass-card reveal">
          <div className="glow-orb"></div>
          
          <h2 className="cta-insane-heading">
            Vamos Fazer o Seu <br />
            <span className="italic-serif neon-text">Negócio</span> Crescer
          </h2>
          
          <p className="cta-insane-subhead text-muted">
            Eleve a sua marca a outro nível. Colabore com a SeguiPro para construir experiências digitais inteligentes, atrair mais clientes e escalar os seus resultados de forma explosiva.
          </p>
          
          <div className="cta-actions">
            <a href="#contacto" className="btn-primary cta-btn-glow">
              PEDIR ORÇAMENTO GRATUITO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
