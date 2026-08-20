import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './PremiumGateway.css';

export default function PremiumGateway() {
  return (
    <section className="premium-gateway" id="servicos">
      <div className="pg-header reveal">
        <span className="pg-eyebrow">O QUE FAZEMOS</span>
        <h2 className="heading-md" style={{ marginBottom: 0 }}>
          Duas Formas <span className="italic-serif text-gradient">de Crescer.</span>
        </h2>
      </div>

      <div className="pg-container reveal" style={{ transitionDelay: '200ms' }}>
        
        {/* Instagram Panel */}
        <Link to="/instagram" className="pg-panel pg-panel-instagram">
          <div className="pg-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop" 
              alt="Instagram Growth" 
              className="pg-image"
            />
            <div className="pg-overlay"></div>
            <div className="pg-overlay-glow"></div>
          </div>

          <div className="pg-micro-ui">
            <div className="pg-tag"><span className="pg-tag-dot"></span> +10K SEGUIDORES</div>
            <div className="pg-tag" style={{ transitionDelay: '0.2s' }}><span className="pg-tag-dot"></span> ALTO ENGAJAMENTO</div>
          </div>

          <div className="pg-content">
            <span className="pg-index">01 &mdash; INSTAGRAM</span>
            <h3 className="pg-title">Construa a sua audiência.</h3>
            <p className="pg-desc">Seguidores reais, prova social instantânea e alcance global para o seu perfil.</p>
            <div className="pg-cta">
              CLIQUE AQUI PARA EXPLORAR INSTAGRAM <ArrowRight size={18} className="pg-cta-icon" />
            </div>
          </div>
        </Link>

        {/* Websites Panel */}
        <Link to="/websites" className="pg-panel pg-panel-websites">
          <div className="pg-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Website Development" 
              className="pg-image"
            />
            <div className="pg-overlay"></div>
            <div className="pg-overlay-glow" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)' }}></div>
          </div>

          <div className="pg-micro-ui">
            <div className="pg-tag"><span className="pg-tag-dot" style={{ background: '#fff' }}></span> RESPONSIVO</div>
            <div className="pg-tag" style={{ transitionDelay: '0.2s' }}><span className="pg-tag-dot" style={{ background: '#fff' }}></span> SEO OTIMIZADO</div>
          </div>

          <div className="pg-content">
            <span className="pg-index" style={{ color: '#fff' }}>02 &mdash; WEBSITES</span>
            <h3 className="pg-title">Construa a sua presença.</h3>
            <p className="pg-desc">Sites rápidos, premium e e-commerces desenhados estrategicamente para converter.</p>
            <div className="pg-cta">
              CLIQUE AQUI PARA EXPLORAR WEBSITES <ArrowRight size={18} className="pg-cta-icon" />
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
