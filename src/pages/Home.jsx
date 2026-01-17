import { useEffect, useState, useRef, useCallback } from "react";

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Features from '../components/Features/Features';
import TechStackWithIcons from '../components/TechStack/TechStackWithIcons';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import CursorTrail from '../components/CursorTrail/CursorTrail';

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import StaggeredMenu from '../components/Reactbits/StaggeredMenu';

import '../App.css';

export default function Home() {
  const BASE = import.meta.env.BASE_URL || '/';
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) return;

    scrollTimeoutRef.current = setTimeout(() => {
      setHeaderScrolled(window.scrollY > 10);
      scrollTimeoutRef.current = null;
    }, 16);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  const [heroRef, heroPassed] = useIntersectionObserver({ threshold: 0.6 });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const showMenu = heroPassed && headerScrolled;

  return (
    <>
      <CursorTrail />
      <div className="scroll-container" id="top">
        <Header scrolled={headerScrolled} />

        <div className={`floating-menu ${showMenu ? 'visible' : ''}`}>
          <StaggeredMenu
            isFixed
            position="right"
            items={[
              { label: 'Home', link: BASE },
              { label: 'What we do', link: '#what-we-do' },
              { label: 'How it works', link: '#how-it-works' },
              { label: 'Features', link: '#features' },
              { label: 'Pricing', link: BASE + 'pricing' },
              { label: 'Contact', link: '#contact' },
              { label: 'About Us', link: BASE + 'about' }
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
    </>
  );
}
