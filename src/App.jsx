import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesOverview from './components/ServicesOverview';
import InstagramGrowth from './components/InstagramGrowth';
import WebDevelopment from './components/WebDevelopment';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useEffect } from 'react';
import Lenis from 'lenis';

function App() {
  useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesOverview />
        <InstagramGrowth />
        <WebDevelopment />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
