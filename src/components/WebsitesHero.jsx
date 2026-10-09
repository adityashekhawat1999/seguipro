import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function WebsitesHero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-mesh" style={{ filter: 'hue-rotate(-15deg)', opacity: 0.8 }}></div>

      <div className="container hero-content">
        <div className="trust-badge reveal">
          <Star size={14} className="star-icon" fill="currentColor" />
          <span>{t('websites.hero.badge')}</span>
        </div>

        <h1 className="heading-lg hero-headline reveal" style={{ transitionDelay: '100ms' }}>
          <span>{t('websites.hero.title1')}</span> <span className="italic-serif text-gradient">{t('websites.hero.title2')}</span> <br />
          <span>{t('websites.hero.title3')}</span>
        </h1>

        <p className="hero-subhead text-muted reveal" style={{ transitionDelay: '200ms' }}>
          {t('websites.hero.subtitle')}
        </p>

        <div className="hero-actions reveal" style={{ transitionDelay: '300ms' }}>
          <a href="#contacto" className="btn-primary btn-large">
            {t('websites.hero.btn1')}
          </a>
          <a href="#planos" className="btn-secondary">
            {t('websites.hero.btn2')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
