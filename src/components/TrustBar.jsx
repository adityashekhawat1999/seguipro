import { useEffect, useState, useRef } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import './TrustBar.css';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutQuad
            const easeProgress = progress * (2 - progress);
            
            setCount(Math.floor(easeProgress * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end); // Ensure it finishes precisely
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

import { useLanguage } from '../context/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();
  return (
    <section className="trust-bar section-padding">
      
      {/* --- ATMOSPHERIC COUNTRY BACKGROUNDS --- */}
      <div className="tb-atmosphere">
        {/* Angola */}
        <div className="tb-flag tb-angola"><span className="fi fi-ao"></span></div>
        
        {/* Portugal */}
        <div className="tb-flag tb-portugal"><span className="fi fi-pt"></span></div>
        
        {/* Brazil */}
        <div className="tb-flag tb-brazil"><span className="fi fi-br"></span></div>
      </div>

      <div className="container trust-bar-container">
        
        <div className="trust-bar-text reveal">
          <p className="text-muted">
            {t('home.trustBar.desc')}
          </p>
        </div>

        <div className="trust-bar-stats reveal" style={{ transitionDelay: '200ms' }}>
          <div className="stat-item">
            <div className="stat-num text-gradient"><AnimatedCounter end={600} suffix="+" /></div>
            <div className="stat-label text-muted">{t('home.trustBar.stat1')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num text-gradient"><AnimatedCounter end={3} suffix="" /></div>
            <div className="stat-label text-muted">{t('home.trustBar.stat2')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num text-gradient"><AnimatedCounter end={10} suffix="+" /></div>
            <div className="stat-label text-muted">{t('home.trustBar.stat3')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num text-gradient"><AnimatedCounter end={8} suffix="" /></div>
            <div className="stat-label text-muted">{t('home.trustBar.stat4')}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
