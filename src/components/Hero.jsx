import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      {/* Premium Background Mesh */}
      <div className="hero-bg-mesh"></div>

      <div className="container hero-content">
        <div className="trust-badge reveal">
          <Star size={14} className="star-icon" fill="currentColor" />
          <span>{t('home.hero.eyebrow')}</span>
        </div>

        <h1 className="heading-lg hero-headline reveal" style={{ transitionDelay: '100ms' }}>
          <span>{t('home.hero.titleLine1')}</span> <span className="italic-serif text-gradient">{t('home.hero.titleLine1Highlight')}</span><br />
          <span>{t('home.hero.titleLine2')}</span> <span className="italic-serif text-gradient">{t('home.hero.titleLine2Highlight')}</span>
        </h1>

        <p className="hero-subhead text-muted reveal" style={{ transitionDelay: '200ms' }}>
          {t('home.hero.subtitle')}
        </p>

        <div className="hero-actions reveal" style={{ transitionDelay: '300ms' }}>
          <a href="#contacto" className="btn-primary btn-large">
            {t('home.hero.ctaPrimary')}
          </a>
          <a href="#servicos" className="btn-secondary">
            {t('home.hero.ctaSecondary')} <ArrowRight size={16} />
          </a>
        </div>
      </div>

    </section>
  );
}
