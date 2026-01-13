import MagicBento from '../MagicBento/MagicBento';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Why Choose Us</h2>
          <p className="features-subtitle">
            Everything you need to build, deploy, and scale with confidence
          </p>
        </div>

        <MagicBento
          spotlightRadius={180}
          enableTilt
          enableMagnetism
        />
      </div>
    </section>
  );
};

export default Features;
