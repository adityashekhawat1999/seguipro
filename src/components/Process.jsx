import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Process.css';

export default function Process() {
  const { t, language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef([]);

  // Steps will be pulled directly from the translation engine

  useEffect(() => {
    const handleScroll = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const viewportCenter = window.innerHeight / 2;
      let closestStep = 0;
      let minDistance = Infinity;

      stepsRef.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestStep = idx;
        }
      });

      setActiveStep(closestStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="process-section section-padding">
      <div className="container">
        
        <div className="section-header reveal">
          <div className="eyebrow text-gradient">{t('home.process.eyebrow')}</div>
          <h2 className="heading-md">
            {t('home.process.title1')} <span className="italic-serif text-gradient">{t('home.process.title2')}</span>
          </h2>
        </div>

        <div className="process-container reveal" style={{ transitionDelay: '200ms' }}>
          
          <div className="process-timeline">
            <div 
              className="process-timeline-active" 
              style={{ transform: `translateY(${activeStep * 100}%)` }}
            ></div>
          </div>

          <div className="process-steps">
            {[0, 1, 2, 3].map((idx) => {
              const step = t(`home.process.steps.${idx}`);
              return (
                <div 
                  key={idx} 
                  className={`process-step ${activeStep === idx ? 'active' : ''}`}
                  ref={el => stepsRef.current[idx] = el}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className="step-num text-gradient">0{idx + 1}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc text-muted">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
