import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './PremiumGateway.css';

export default function PremiumGateway() {
  const { t } = useLanguage();

  return (
    <section className="premium-gateway" id="servicos">
      <div className="pg-header reveal">
        <span className="pg-eyebrow">{t('home.premiumGateway.eyebrow')}</span>
        <h2 className="heading-md" style={{ marginBottom: '16px' }}>
          {t('home.premiumGateway.titleLine1')}<span className="italic-serif text-gradient">{t('home.premiumGateway.titleLine2')}</span>
        </h2>
        <p className="pg-subtitle">{t('home.premiumGateway.subtitle')}</p>
      </div>

      <div className="pg-container reveal" style={{ transitionDelay: '200ms' }}>
        
        {/* Left: Dominant Panel */}
        <Link to="/business-growth" className="pg-panel pg-panel-dominant pg-panel-growth">
          <div className="pg-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&q=80&w=2400" 
              alt="Business Growth" 
              className="pg-image"
            />
            <div className="pg-overlay"></div>
            <div className="pg-overlay-glow glow-pink"></div>
          </div>
          
          <div className="pg-micro-ui">
            <div className="pg-tag"><span className="pg-tag-dot"></span> 01</div>
          </div>

          <div className="pg-content">
            <h3 className="pg-title">{t('home.premiumGateway.growthTitle1')}<br/>{t('home.premiumGateway.growthTitle2')}</h3>
            <p className="pg-desc">{t('home.premiumGateway.growthDesc')}</p>
            <div className="pg-cta">
              {t('home.premiumGateway.growthCta')} <ArrowRight size={18} className="pg-cta-icon" />
            </div>
          </div>
        </Link>

        {/* Right: Stacked Panels */}
        <div className="pg-panel-stack">
          {/* Right Top */}
          <Link to="/websites" className="pg-panel pg-panel-stacked pg-panel-websites">
            <div className="pg-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2426&auto=format&fit=crop" 
                alt="Websites" 
                className="pg-image"
              />
              <div className="pg-overlay"></div>
              <div className="pg-overlay-glow glow-blue"></div>
            </div>
            
            <div className="pg-micro-ui">
              <div className="pg-tag"><span className="pg-tag-dot"></span> 02</div>
            </div>

            <div className="pg-content">
              <h3 className="pg-title">{t('home.premiumGateway.websitesTitle')}</h3>
              <p className="pg-desc">{t('home.premiumGateway.websitesDesc')}</p>
              <div className="pg-cta">
                {t('home.premiumGateway.websitesCta')} <ArrowRight size={18} className="pg-cta-icon" />
              </div>
            </div>
          </Link>

          {/* Right Bottom */}
          <Link to="/software" className="pg-panel pg-panel-stacked pg-panel-software">
            <div className="pg-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&q=80&w=2400" 
                alt="Software & AI" 
                className="pg-image"
              />
              <div className="pg-overlay"></div>
              <div className="pg-overlay-glow glow-orange"></div>
            </div>
            
            <div className="pg-micro-ui">
              <div className="pg-tag"><span className="pg-tag-dot"></span> 03</div>
            </div>

            <div className="pg-content">
              <h3 className="pg-title">{t('home.premiumGateway.softwareTitle')}</h3>
              <p className="pg-desc">{t('home.premiumGateway.softwareDesc')}</p>
              <div className="pg-cta">
                {t('home.premiumGateway.softwareCta')} <ArrowRight size={18} className="pg-cta-icon" />
              </div>
            </div>
          </Link>
        </div>
        
      </div>
      
      <div className="pg-footer reveal">
         <div className="pg-light-path"></div>
         <span>{t('home.premiumGateway.footer')}</span>
      </div>
    </section>
  );
}
