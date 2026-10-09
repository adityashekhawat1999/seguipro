import { useLanguage } from '../context/LanguageContext';
import './FinalCTA.css';

export default function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="insane-cta" id="cta-section">
      <div className="insane-cta-bg">
        <div className="cta-vignette"></div>
      </div>
      
      <div className="container cta-container">
        <div className="cta-glass-card reveal">
          <div className="glow-orb"></div>
          
          <h2 className="cta-insane-heading">
            {t('home.finalCTA.title1')} <br />
            <span className="italic-serif neon-text">{t('home.finalCTA.title2')}</span> {t('home.finalCTA.title3')}
          </h2>
          
          <p className="cta-insane-subhead text-muted">
            {t('home.finalCTA.desc')}
          </p>
          
          <div className="cta-actions">
            <a href="#contacto" className="btn-primary cta-btn-glow">
              {t('home.finalCTA.btn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
