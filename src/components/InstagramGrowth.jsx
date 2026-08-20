import { useState } from 'react';
import { Users, Shield, Zap, RefreshCw, CheckCircle, Award, Heart, Headset, TrendingUp, ChevronRight, Star } from 'lucide-react';
import InstagramQuoteModal from './InstagramQuoteModal';
import './InstagramGrowth.css';

export default function InstagramGrowth() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: wait for animation to finish before clearing plan
    setTimeout(() => setSelectedPlan(null), 300);
  };

  const packages = [
    { name: 'Instagram Premium Brasileiros e Mundiais', quality: 'Alta', refill: 'Com Reposição', drop: 'Baixa', qty: '1000 seguidores', priceEur: '€8', priceKz: '10.400 Kz', time: '1h–48h', obs: '—' },
    { name: 'Instagram Mundiais', quality: 'Alta', refill: 'Sem Reposição', drop: 'Baixa', qty: '1000 seguidores', priceEur: '€6,50', priceKz: '8.450 Kz', time: '1h–48h', obs: '—' },
    { name: 'Instagram Seguidores Mundiais', quality: 'Máx. 100K/dia', refill: 'Sem Reposição', drop: '10–30%', qty: '1000 seguidores', priceEur: '€5,50', priceKz: '7.150 Kz', time: '1h–24h', obs: '⭐ Mais Solicitado', highlight: true },
    { name: 'Instagram Mundial VIP', quality: 'VIP', refill: 'Com Reposição', drop: 'Baixa', qty: '1000 seguidores', priceEur: '€10', priceKz: '13.000 Kz', time: '1h–48h', obs: '—' },
    { name: 'Instagram Brasileiros', quality: 'Média', refill: 'Com Reposição', drop: 'Média', qty: '1000 seguidores', priceEur: '€12', priceKz: '15.600 Kz', time: '1h–48h', obs: '—' },
    { name: 'Instagram Brasileiros', quality: 'Alta', refill: 'Com Reposição', drop: '0–5%', qty: '1000 seguidores', priceEur: '€25', priceKz: '32.500 Kz', time: '1h–72h', obs: '—' },
  ];

  const trustStrip = [
    { icon: <Award size={20} />, label: 'Qualidade Garantida' },
    { icon: <RefreshCw size={20} />, label: 'Reposição Garantida' },
    { icon: <Shield size={20} />, label: 'Compra 100% Segura' },
    { icon: <Headset size={20} />, label: 'Suporte Dedicado' },
    { icon: <TrendingUp size={20} />, label: 'Resultados Comprovados' },
  ];

  return (
    <section className="instagram-growth section-padding" id="precos" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="pricing-section-hero reveal" style={{ transitionDelay: '300ms' }}>
          <div className="eyebrow text-gradient">Serviços Premium</div>
          <h3 className="heading-sm pricing-hero-title">Escolha o crescimento certo para o seu perfil.</h3>
          <p className="text-muted">Todos os planos incluem suporte premium e garantia de satisfação.</p>
        </div>

        <div className="premium-pricing-cards">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`pricing-row-card reveal ${pkg.highlight ? 'featured-pricing-card' : ''}`}
              style={{ transitionDelay: `${400 + (idx * 100)}ms` }}
            >
              {pkg.highlight && (
                <div className="featured-badge">
                  <Star size={12} fill="currentColor" /> MAIS SOLICITADO
                </div>
              )}

              {/* Left Identity */}
              <div className="prc-identity">
                <div className="prc-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="prc-name-group">
                  <h4 className="prc-name">{pkg.name}</h4>
                  <div className="prc-quality">
                    <span className="quality-dot"></span> QUALIDADE: {pkg.quality}
                  </div>
                </div>
              </div>

              {/* Center Specs */}
              <div className="prc-specs">
                <div className="spec-item">
                  <div className="spec-label">REPOSIÇÃO</div>
                  <div className="spec-val">{pkg.refill}</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">QUEDA</div>
                  <div className="spec-val">{pkg.drop}</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">ENTREGA</div>
                  <div className="spec-val">{pkg.time}</div>
                </div>
              </div>

              {/* Right Pricing & Action */}
              <div className="prc-action-area">
                <div className="prc-pricing">
                  <div className="prc-eur">{pkg.priceEur}</div>
                  <div className="prc-kz">{pkg.priceKz}</div>
                  <div className="prc-qty">{pkg.qty}</div>
                </div>
                <button onClick={() => handleOpenModal(pkg)} className="btn-primary prc-btn" style={{ cursor: 'pointer', border: 'none', fontFamily: 'inherit' }}>
                  PEDIR <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-strip reveal" style={{ transitionDelay: '400ms' }}>
          {trustStrip.map((item, idx) => (
            <div key={idx} className="trust-strip-item">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Premium Quote Modal */}
      <InstagramQuoteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        plan={selectedPlan}
      />
    </section>
  );
}
