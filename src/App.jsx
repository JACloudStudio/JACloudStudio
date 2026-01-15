import { useEffect, useState } from "react";

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Features from './components/Features/Features';
import TechStackWithIcons from './components/TechStack/TechStackWithIcons';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import StaggeredMenu from './components/Reactbits/StaggeredMenu';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.css';

function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [heroRef, heroPassed] = useIntersectionObserver({ threshold: 0.6 });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const showMenu = heroPassed && headerScrolled;

  return (
    <div className="scroll-container" id="top">
      <div className="animated-blob"></div>
      <Header scrolled={headerScrolled} />

      <div className={`floating-menu ${showMenu ? 'visible' : ''}`}>
        <StaggeredMenu
          isFixed
          position="right"
          items={[
            { label: 'Home', link: '#top' },
            { label: 'What we do', link: '#what-we-do' },
            { label: 'How it works', link: '#how-it-works' },
            { label: 'Features', link: '#features' },
            { label: 'Pricing', link: 'pricing.html', external: true },
            { label: 'Contact', link: '#contact' }
          ]}
          displayItemNumbering
          displaySocials={false}
          menuButtonColor="#0f172a"
          openMenuButtonColor="#ffffff"
          colors={['#B19EEF', '#5227FF']}
          accentColor="#6366f1"
        />
      </div>

      <section className="snap-section">
        <Hero ref={heroRef} />
      </section>

      <section className="snap-section" id="what-we-do">
        <WhatWeDo />
      </section>

      <section className="snap-section" id="how-it-works">
        <HowItWorks />
      </section>

      <section className="snap-section" id="features">
        <Features />
      </section>

      <section className="snap-section" id="tech-stack">
        <TechStackWithIcons />
      </section>

      <section className="snap-section" id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
