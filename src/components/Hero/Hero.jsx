import { forwardRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FiUploadCloud } from 'react-icons/fi';
import BlurText from './BlurText';
import './Hero.css';

const Hero = forwardRef(function Hero(props, ref) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <header ref={ref} className="hero">
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="./bac.mp4" type="video/mp4" />
      </video>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <BlurText
          text="JA CloudStudio"
          delay={220}
          className="hero-title"
          onAnimationComplete={handleAnimationComplete}
        />
        
        <BlurText
          text="We keep websites online. Stress-free."
          delay={220}
          className="hero-subtitle"
          onAnimationComplete={handleAnimationComplete}
        />

        <BlurText
          text="We deploy, secure, and maintain websites on the cloud so you never have to worry about uptime."
          delay={220}
          className="hero-description"
          onAnimationComplete={handleAnimationComplete}
        />

        <motion.a 
          href="#contact" 
          className="btn primary big"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Us
        </motion.a>
      </motion.div>

      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="hero-visual-container">
          <video 
            className="hero-visual-video"
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source src="./.mp4" type="video/mp4" />
          </video>
          <div className="hero-visual-lottie">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FiUploadCloud size="60%" color="rgb(0, 0, 0)" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  );
});

export default Hero;
