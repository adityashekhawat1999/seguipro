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

export default function TrustBar() {
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
            O seu crescimento digital começa com a escolha certa. Ajudamos criadores, empresas e marcas a crescerem com credibilidade - no Instagram e online.
          </p>
        </div>

        <div className="trust-bar-stats reveal" style={{ transitionDelay: '200ms' }}>
          <div className="stat-item">
            <div className="stat-num text-gradient"><AnimatedCounter end={1000} suffix="+" /></div>
            <div className="stat-label text-muted">Seguidores entregues por pedido</div>
          </div>
          <div className="stat-item">
            <div className="stat-num text-gradient"><AnimatedCounter end={600} suffix="+" /></div>
            <div className="stat-label text-muted">Clientes satisfeitos</div>
          </div>
          <div className="stat-item">
            <div className="stat-num text-gradient"><AnimatedCounter end={72} suffix="h" /></div>
            <div className="stat-label text-muted">Prazo máximo de entrega</div>
          </div>
          <div className="stat-item">
            <div className="stat-num text-gradient"><AnimatedCounter end={100} suffix="%" /></div>
            <div className="stat-label text-muted">Seguro, sem senha necessária</div>
          </div>
        </div>

      </div>
    </section>
  );
}
