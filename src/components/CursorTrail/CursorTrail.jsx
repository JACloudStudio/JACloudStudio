import { useEffect, useRef } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const prevPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let trails = [];
    let splashes = [];

    const createTrail = (x, y, prevX, prevY, velocityX, velocityY) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      
      const dx = x - prevX;
      const dy = y - prevY;
      const angle = Math.atan2(dy, dx);
      
      trail.style.left = `${prevX}px`;
      trail.style.top = `${prevY}px`;
      trail.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
      
      const colors = [
        'rgba(111, 111, 111, 0)',
        'rgba(127, 127, 127, 0)',
        'rgba(143, 143, 143, 0)',
      ];
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      trail.style.setProperty('--trail-color', randomColor);
      
      document.body.appendChild(trail);
      trails.push({ element: trail });

      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
        trails = trails.filter(t => t.element !== trail);
      }, 600);
    };

    const createSplash = (x, y, velocityX, velocityY) => {
      // Create multiple water droplets spreading from cursor
      const dropletCount = 3 + Math.floor(Math.random() * 3);
      
      for (let i = 0; i < dropletCount; i++) {
        const splash = document.createElement('div');
        splash.className = 'water-splash';
        
        // Spread droplets perpendicular and along the velocity direction
        const spreadAngle = Math.atan2(velocityY, velocityX) + (Math.random() - 0.5) * Math.PI * 0.8;
        const spreadDistance = 15 + Math.random() * 30;
        const spreadX = Math.cos(spreadAngle) * spreadDistance;
        const spreadY = Math.sin(spreadAngle) * spreadDistance;
        
        splash.style.left = `${x}px`;
        splash.style.top = `${y}px`;
        splash.style.setProperty('--spread-x', `${spreadX}px`);
        splash.style.setProperty('--spread-y', `${spreadY}px`);
        splash.style.setProperty('--splash-size', `${4 + Math.random() * 8}px`);
        
        document.body.appendChild(splash);
        splashes.push({ element: splash });

        setTimeout(() => {
          if (splash.parentNode) {
            splash.parentNode.removeChild(splash);
          }
          splashes = splashes.filter(s => s.element !== splash);
        }, 800);
      }
    };

    let lastTrailTime = 0;
    let lastSplashTime = 0;
    const trailInterval = 20;
    const splashInterval = 100;

    const handleMouseMove = (e) => {
      const velocityX = e.clientX - mousePos.current.x;
      const velocityY = e.clientY - mousePos.current.y;
      
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      const now = Date.now();
      
      // Create trail
      if (now - lastTrailTime > trailInterval) {
        createTrail(e.clientX, e.clientY, prevPos.current.x, prevPos.current.y, velocityX, velocityY);
        prevPos.current = { x: e.clientX, y: e.clientY };
        lastTrailTime = now;
      }

      // Create water splashes spreading along cursor direction
      if (now - lastSplashTime > splashInterval) {
        const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
        if (speed > 0.5) { // Only create splashes when moving
          createSplash(e.clientX, e.clientY, velocityX, velocityY);
        }
        lastSplashTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trails.forEach(t => {
        if (t.element.parentNode) {
          t.element.parentNode.removeChild(t.element);
        }
      });
      splashes.forEach(s => {
        if (s.element.parentNode) {
          s.element.parentNode.removeChild(s.element);
        }
      });
    };
  }, []);

  return null;
};

export default CursorTrail;
