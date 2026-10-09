import { useState } from 'react';
import { Check, Star, Layout, MapPin, Smartphone, Shield, Zap, Search, Settings, Phone, BarChart2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import WebsitesQuoteModal from './WebsitesQuoteModal';
import './WebDevelopment.css';

export default function WebDevelopment() {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const formatPrice = (priceStr) => {
    if (!priceStr) return priceStr;
    if (language === 'en') {
      return priceStr.replace(/\./g, ',');
    }
    return priceStr;
  };

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlan(null), 300);
  };
  // Note: we can use index mapping in JSX to avoid recreating this array with the hook,
  // or we can just access t() directly inside map. Let's do it in the render so we don't 
  // duplicate object definitions if we don't have to. 
  // Wait, the simplest way is to pull the arrays directly from t().
  const features = t('websites.dev.features', { returnObjects: true }) || [];
  const sitePackages = t('websites.dev.sitePackages', { returnObjects: true }) || [];
  const ecoPackages = t('websites.dev.ecoPackages', { returnObjects: true }) || [];
  const addons = t('websites.dev.addons', { returnObjects: true }) || [];
  const promise = t('websites.dev.promise', { returnObjects: true }) || [];

  return (
    <section className="web-dev section-padding" id="sites">
      <div className="container">
        
        <div className="section-header reveal">
          <h2 className="heading-md">
            {t('websites.dev.title1')} <span className="italic-serif text-gradient">{t('websites.dev.title2')}</span>
          </h2>
        </div>

        <div className="features-grid reveal" style={{ transitionDelay: '100ms' }}>
          {features.map((feat, idx) => (
            <div key={idx} className="feat-pill">
              <Check size={16} className="feat-check" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="pricing-cards-section">
          <div className="pricing-cards reveal" style={{ transitionDelay: '200ms' }}>
            {sitePackages.map((pkg, idx) => {
              // Map prices from a parallel array since translations might not handle objects easily if not set up, 
              // Wait, I put the objects inside the translation file! So pkg is the full object.
              // Let's manually inject the oldPrice/price logic since they are static across languages
              const originalPkgs = [
                { oldPrice: '€699', price: '€349' },
                { oldPrice: '€1.199', price: '€599', popular: true },
                { oldPrice: '€1.799', price: '€899' }
              ];
              const p = { ...pkg, ...originalPkgs[idx] };

              return (
              <div key={idx} className={`price-card ${p.popular ? 'popular' : ''}`}>
                {p.popular && <div className="popular-badge"><Star size={12} /> {t('websites.dev.popularBadge')}</div>}
                <h3 className="pkg-name">{p.name}</h3>
                <div className="pkg-price-wrapper">
                  {p.oldPrice && (
                    <div className="pkg-old-price">
                      <span className="strikethrough">{t('websites.dev.from')} {formatPrice(p.oldPrice)}</span>
                      <span className="discount-badge">50% {t('websites.dev.off')}</span>
                    </div>
                  )}
                  <div className="pkg-price">{formatPrice(p.price)}</div>
                </div>
                <ul className="pkg-includes">
                  {p.includes.map((inc, i) => (
                    <li key={i}><Check size={16} /> {inc}</li>
                  ))}
                </ul>
                <button onClick={() => handleOpenModal({ ...p, isEcommerce: false })} className={`btn-primary ${!p.popular ? 'outline' : ''}`} style={{ cursor: 'pointer', border: p.popular ? 'none' : '', fontFamily: 'inherit', width: '100%' }}>
                  {t('websites.dev.btnChoose')}
                </button>
              </div>
            )})}
          </div>
        </div>

        <div className="pricing-cards-section" id="ecommerce">
          <h3 className="heading-sm text-center mb-40 reveal">{t('websites.dev.ecoTitle')}</h3>
          <div className="pricing-cards reveal" style={{ transitionDelay: '200ms' }}>
            {ecoPackages.map((pkg, idx) => {
              const originalEco = [
                { oldPrice: '€2.199', price: '€1.099' },
                { oldPrice: '€2.999', price: '€1.499' },
                { oldPrice: '€4.500', price: '€2.250' }
              ];
              const p = { ...pkg, ...originalEco[idx] };

              return (
              <div key={idx} className="price-card">
                <h3 className="pkg-name">{p.name}</h3>
                <div className="pkg-price-wrapper">
                  {p.oldPrice && (
                    <div className="pkg-old-price">
                      <span className="strikethrough">{t('websites.dev.from')} {formatPrice(p.oldPrice)}</span>
                      <span className="discount-badge">50% {t('websites.dev.off')}</span>
                    </div>
                  )}
                  <div className="pkg-price">{formatPrice(p.price)}</div>
                </div>
                <ul className="pkg-includes">
                  {p.includes.map((inc, i) => (
                    <li key={i}><Check size={16} /> {inc}</li>
                  ))}
                </ul>
                <button onClick={() => handleOpenModal({ ...p, isEcommerce: true })} className="btn-primary outline" style={{ cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>
                  {t('websites.dev.btnChoose')}
                </button>
              </div>
            )})}
          </div>
        </div>

        <div className="addons-section reveal" style={{ transitionDelay: '300ms' }}>
          <h4 className="addons-title">{t('websites.dev.addonsTitle')}</h4>
          <div className="addons-grid">
            {addons.map((addon, idx) => {
              const staticPrices = ['€120', '€500', '€900', '€25/ano', '€180/ano', '€60/ano', '€60/mês', '€175'];
              return (
              <div key={idx} className="addon-item">
                <span className="addon-name">{addon.name}</span>
                <span className="addon-price text-muted">
                  {staticPrices[idx].includes('/') ? staticPrices[idx].replace('ano', 'yr').replace('mês', 'mo') : staticPrices[idx]}
                </span>
              </div>
            )})}
          </div>
        </div>

        <div className="promise-band reveal" style={{ transitionDelay: '400ms' }}>
          {promise.map((item, idx) => {
            const icons = [<Zap size={24} />, <Shield size={24} />, <Smartphone size={24} />, <BarChart2 size={24} />];
            return (
            <div key={idx} className="promise-item">
              <div className="promise-icon">{icons[idx]}</div>
              <h5 className="promise-title">{item.title}</h5>
              <p className="promise-desc text-muted">{item.desc}</p>
            </div>
          )})}
        </div>

      </div>
      
      {/* Premium Quote Modal */}
      <WebsitesQuoteModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        plan={selectedPlan} 
      />
    </section>
  );
}
