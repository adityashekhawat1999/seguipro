import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, BarChart2, Target, Users, Zap, CheckCircle, TrendingUp, Globe, Monitor, Share2 } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../context/LanguageContext';
import '../components/Hero.css';
import '../components/FinalCTA.css';
import './BusinessGrowthPage.css';

export default function BusinessGrowthPage() {
  const { t } = useLanguage();
  useDocumentTitle('Crescimento de Negócios - SeguiProo');
  useScrollReveal();

  return (
    <div className="bgp-page">
      {/* 1. HERO SECTION */}
      <section className="hero" id="hero">
        <div className="hero-bg-mesh" style={{ opacity: 0.8, zIndex: 0 }}></div>
        <div className="container hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <div className="trust-badge reveal">
            <TrendingUp size={14} className="star-icon" fill="currentColor" />
            <span>{t('businessGrowth.hero.badge')}</span>
          </div>

          <h1 className="heading-lg hero-headline reveal" style={{ transitionDelay: '100ms' }}>
            <span>{t('businessGrowth.hero.title1')}</span> <br />
            <span className="italic-serif text-gradient">{t('businessGrowth.hero.title2')}</span>
          </h1>

          <p className="hero-subhead text-muted reveal" style={{ transitionDelay: '200ms' }}>
            {t('businessGrowth.hero.subtitle')}
          </p>

          <div className="hero-actions reveal" style={{ transitionDelay: '300ms' }}>
            <a href="#featured" className="btn-primary btn-large">
              {t('businessGrowth.hero.btn1')} <ArrowRight size={20} style={{ marginLeft: '8px' }}/>
            </a>
            <a href="#services" className="btn-secondary">
              {t('businessGrowth.hero.btn2')} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="bgp-intro container reveal">
        <div className="eyebrow text-gradient">{t('businessGrowth.intro.eyebrow')}</div>
        <h2 className="heading-md">{t('businessGrowth.intro.title1')} <span className="text-gradient">{t('businessGrowth.intro.title2')}</span></h2>
        <p className="text-muted" style={{ maxWidth: '700px', margin: '20px auto 0' }}>
          {t('businessGrowth.intro.desc')}
        </p>

        <div className="bgp-intro-path">
          <div className="bgp-path-node">{t('businessGrowth.intro.path1')}</div>
          <ArrowRight className="bgp-path-arrow" size={24} style={{ color: 'var(--accent)' }} />
          <div className="bgp-path-node">{t('businessGrowth.intro.path2')}</div>
          <ArrowRight className="bgp-path-arrow" size={24} style={{ color: 'var(--accent)' }} />
          <div className="bgp-path-node">{t('businessGrowth.intro.path3')}</div>
          <ArrowRight className="bgp-path-arrow" size={24} style={{ color: 'var(--accent)' }} />
          <div className="bgp-path-node">{t('businessGrowth.intro.path4')}</div>
        </div>
      </section>

      {/* 3. FEATURED PACKAGE */}
      <section className="bgp-featured" id="featured">
        <div className="container">
          <div className="bgp-featured-card reveal">
            <div className="eyebrow text-gradient">{t('businessGrowth.featured.eyebrow')}</div>
            <h2 className="heading-md">{t('businessGrowth.featured.title1')} <span className="text-gradient">{t('businessGrowth.featured.title2')}</span> {t('businessGrowth.featured.title3')}</h2>
            <p className="text-muted" style={{ fontSize: '1.2rem', marginTop: '16px' }}>
              {t('businessGrowth.featured.desc1')} <span style={{ color: 'var(--accent)' }}>{t('businessGrowth.featured.desc2')}</span><br />
              {t('businessGrowth.featured.desc3')}
            </p>

            <div className="bgp-featured-grid">
              <div className="bgp-featured-service">
                <h4>{t('businessGrowth.featured.feature1Title')}</h4>
                <p>{t('businessGrowth.featured.feature1Desc')}</p>
              </div>
              <div className="bgp-featured-service">
                <h4>{t('businessGrowth.featured.feature2Title')}</h4>
                <p>{t('businessGrowth.featured.feature2Desc')}</p>
              </div>
              <div className="bgp-featured-service bgp-featured-service-full">
                <h4>{t('businessGrowth.featured.feature3Title')}</h4>
                <p>{t('businessGrowth.featured.feature3Desc')}</p>
              </div>
            </div>

            <div className="bgp-featured-pricing">
              <div className="bgp-price-block">
                <span className="bgp-price-main text-gradient">{t('businessGrowth.featured.priceMain')}</span>
                <span className="bgp-price-sub">{t('businessGrowth.featured.priceSub')}</span>
                <span className="bgp-price-saving" style={{ color: 'var(--accent)' }}>{t('businessGrowth.featured.priceSaving')}</span>
              </div>
              <a href="#contacto" className="btn-primary btn-large" style={{ fontSize: '1.1rem' }}>
                {t('businessGrowth.featured.btn')} <ArrowRight size={20} style={{ marginLeft: '8px' }}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. SHARED BACKGROUND WRAPPER */}
      <div className="bgp-services-journey-wrapper">
        {/* 4. INDIVIDUAL MARKETING SERVICES */}
        <section className="bgp-services" id="services">
        <div className="container">
          <div className="reveal text-center">
            <h2 className="heading-sm">{t('businessGrowth.services.title1')} <span className="text-gradient">{t('businessGrowth.services.title2')}</span></h2>
            <p className="text-muted">{t('businessGrowth.services.desc1')} <span style={{ color: 'var(--accent)' }}>{t('businessGrowth.services.desc2')}</span></p>
          </div>

          <div className="bgp-services-grid">
            <div className="bgp-service-card reveal" style={{ transitionDelay: '100ms' }}>
              <div className="bgp-service-icon" style={{ color: 'var(--accent)' }}><Users size={24} /></div>
              <h3>{t('businessGrowth.services.card1Title')}</h3>
              <p>{t('businessGrowth.services.card1Desc')}</p>
              <ul className="bgp-service-includes" style={{ listStyle: 'none', padding: 0 }}>
                <li>{t('businessGrowth.services.card1Li1')}</li>
                <li>{t('businessGrowth.services.card1Li2')}</li>
                <li>{t('businessGrowth.services.card1Li3')}</li>
              </ul>
              <div className="bgp-service-price-block">
                <div className="bgp-service-price text-gradient">{t('businessGrowth.services.card1Price')}</div>
                <div className="bgp-service-regular">{t('businessGrowth.services.card1Reg')}</div>
                <a href="#contacto" className="btn-primary" style={{ width: '100%' }}>{t('businessGrowth.services.btn')} <ArrowRight size={16} style={{ marginLeft: '6px' }}/></a>
              </div>
            </div>

            <div className="bgp-service-card reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bgp-service-icon" style={{ color: 'var(--accent)' }}><Target size={24} /></div>
              <h3>{t('businessGrowth.services.card2Title')}</h3>
              <p>{t('businessGrowth.services.card2Desc')}</p>
              <ul className="bgp-service-includes" style={{ listStyle: 'none', padding: 0 }}>
                <li>{t('businessGrowth.services.card2Li1')}</li>
                <li>{t('businessGrowth.services.card2Li2')}</li>
                <li>{t('businessGrowth.services.card2Li3')}</li>
              </ul>
              <div className="bgp-service-price-block">
                <div className="bgp-service-price text-gradient">{t('businessGrowth.services.card2Price')}</div>
                <div className="bgp-service-regular">{t('businessGrowth.services.card2Reg')}</div>
                <a href="#contacto" className="btn-primary" style={{ width: '100%' }}>{t('businessGrowth.services.btn')} <ArrowRight size={16} style={{ marginLeft: '6px' }}/></a>
              </div>
            </div>

            <div className="bgp-service-card reveal" style={{ transitionDelay: '300ms' }}>
              <div className="bgp-service-icon" style={{ color: 'var(--accent)' }}><Share2 size={24} /></div>
              <h3>{t('businessGrowth.services.card3Title')}</h3>
              <p>{t('businessGrowth.services.card3Desc')}</p>
              <ul className="bgp-service-includes" style={{ listStyle: 'none', padding: 0 }}>
                <li>{t('businessGrowth.services.card3Li1')}</li>
                <li>{t('businessGrowth.services.card3Li2')}</li>
                <li>{t('businessGrowth.services.card3Li3')}</li>
              </ul>
              <div className="bgp-service-price-block">
                <div className="bgp-service-price text-gradient">{t('businessGrowth.services.card3Price')}</div>
                <div className="bgp-service-regular">{t('businessGrowth.services.card3Reg')}</div>
                <a href="#contacto" className="btn-primary" style={{ width: '100%' }}>{t('businessGrowth.services.btn')} <ArrowRight size={16} style={{ marginLeft: '6px' }}/></a>
              </div>
            </div>

            <div className="bgp-service-card reveal" style={{ transitionDelay: '400ms' }}>
              <div className="bgp-service-icon" style={{ color: 'var(--accent)' }}><Globe size={24} /></div>
              <h3>{t('businessGrowth.services.card4Title')}</h3>
              <p>{t('businessGrowth.services.card4Desc')}</p>
              <ul className="bgp-service-includes" style={{ listStyle: 'none', padding: 0 }}>
                <li>{t('businessGrowth.services.card4Li1')}</li>
                <li>{t('businessGrowth.services.card4Li2')}</li>
                <li>{t('businessGrowth.services.card4Li3')}</li>
              </ul>
              <div className="bgp-service-price-block">
                <div className="bgp-service-price text-gradient">{t('businessGrowth.services.card4Price')}</div>
                <div className="bgp-service-regular">{t('businessGrowth.services.card4Reg')}</div>
                <a href="#contacto" className="btn-primary" style={{ width: '100%' }}>{t('businessGrowth.services.btn')} <ArrowRight size={16} style={{ marginLeft: '6px' }}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GROWTH JOURNEY */}
      <section className="bgp-journey">
        <div className="container">
          <div className="reveal">
            <div className="eyebrow text-gradient">{t('businessGrowth.journey.eyebrow')}</div>
            <h2 className="heading-sm">{t('businessGrowth.journey.title1')} <span className="text-gradient">{t('businessGrowth.journey.title2')}</span></h2>
          </div>

          <div className="bgp-journey-grid">
            <div className="bgp-journey-step reveal" style={{ transitionDelay: '100ms' }}>
              <div className="bgp-journey-number">01</div>
              <h4>{t('businessGrowth.journey.step1Title')}</h4>
              <p>{t('businessGrowth.journey.step1Desc')}</p>
            </div>
            <div className="bgp-journey-step reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bgp-journey-number">02</div>
              <h4>{t('businessGrowth.journey.step2Title')}</h4>
              <p>{t('businessGrowth.journey.step2Desc')}</p>
            </div>
            <div className="bgp-journey-step reveal" style={{ transitionDelay: '300ms' }}>
              <div className="bgp-journey-number">03</div>
              <h4>{t('businessGrowth.journey.step3Title')}</h4>
              <p>{t('businessGrowth.journey.step3Desc')}</p>
            </div>
            <div className="bgp-journey-step reveal" style={{ transitionDelay: '400ms' }}>
              <div className="bgp-journey-number">04</div>
              <h4>{t('businessGrowth.journey.step4Title')}</h4>
              <p>{t('businessGrowth.journey.step4Desc')}</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      {/* 6. DIGITAL GROWTH ENGINE */}
      <section className="bgp-engine-section">
        <div className="bgp-engine-bg">
          <div className="bgp-engine-glow"></div>
          <div className="bgp-engine-grid"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal text-center bgp-engine-header">
            <div className="eyebrow text-gradient">{t('businessGrowth.engine.eyebrow')}</div>
            <h2 className="heading-md">{t('businessGrowth.engine.title1')} <span className="text-gradient">{t('businessGrowth.engine.title2')}</span><span dangerouslySetInnerHTML={{__html: t('businessGrowth.engine.title3')}}></span></h2>
          </div>

          <div className="bgp-engine-ecosystem reveal" style={{ transitionDelay: '200ms' }}>
            
            {/* SVG Connections */}
            <svg className="bgp-engine-connections" viewBox="0 0 1000 600">
              <defs>
                <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              <path className="bgp-engine-path" d="M 250 150 L 500 300" />
              <path className="bgp-engine-path" d="M 750 150 L 500 300" />
              <path className="bgp-engine-path" d="M 250 450 L 500 300" />
              <path className="bgp-engine-path" d="M 750 450 L 500 300" />

              {/* Animated Light Pulses */}
              <circle r="3" fill="var(--accent)" filter="url(#glow-blur)">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 250 150 L 500 300" />
              </circle>
              <circle r="3" fill="var(--accent)" filter="url(#glow-blur)">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 750 150 L 500 300" />
              </circle>
              <circle r="3" fill="var(--accent)" filter="url(#glow-blur)">
                <animateMotion dur="4s" repeatCount="indefinite" path="M 250 450 L 500 300" />
              </circle>
              <circle r="3" fill="var(--accent)" filter="url(#glow-blur)">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M 750 450 L 500 300" />
              </circle>
            </svg>

            {/* Central Core */}
            <div className="bgp-engine-core">
              <div className="bgp-engine-core-ring ring-1"></div>
              <div className="bgp-engine-core-ring ring-2"></div>
              <div className="bgp-engine-core-ring ring-3"></div>
              <div className="bgp-engine-core-content">
                <span className="text-gradient" style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.1em' }} dangerouslySetInnerHTML={{__html: t('businessGrowth.engine.core')}}></span>
              </div>
            </div>

            {/* Nodes */}
            <div className="bgp-engine-node node-tl">
              <div className="node-glow"></div>
              <div className="node-icon-wrapper"><Target size={24} /></div>
              <div className="node-content">
                <h4>{t('businessGrowth.engine.node1Title')}</h4>
                <p>{t('businessGrowth.engine.node1Desc')}</p>
              </div>
            </div>
            
            <div className="bgp-engine-node node-tr">
              <div className="node-glow"></div>
              <div className="node-icon-wrapper"><Users size={24} /></div>
              <div className="node-content">
                <h4>{t('businessGrowth.engine.node2Title')}</h4>
                <p>{t('businessGrowth.engine.node2Desc')}</p>
              </div>
            </div>
            
            <div className="bgp-engine-node node-bl">
              <div className="node-glow"></div>
              <div className="node-icon-wrapper"><CheckCircle size={24} /></div>
              <div className="node-content">
                <h4>{t('businessGrowth.engine.node3Title')}</h4>
                <p>{t('businessGrowth.engine.node3Desc')}</p>
              </div>
            </div>
            
            <div className="bgp-engine-node node-br">
              <div className="node-glow"></div>
              <div className="node-icon-wrapper"><TrendingUp size={24} /></div>
              <div className="node-content">
                <h4>{t('businessGrowth.engine.node4Title')}</h4>
                <p>{t('businessGrowth.engine.node4Desc')}</p>
              </div>
            </div>
          </div>

          <div className="bgp-engine-footer reveal" style={{ transitionDelay: '300ms' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.05em' }}>{t('businessGrowth.engine.footer1')} <span className="text-gradient">{t('businessGrowth.engine.footer2')}</span></h3>
          </div>
        </div>
      </section>

    </div>
  );
}
