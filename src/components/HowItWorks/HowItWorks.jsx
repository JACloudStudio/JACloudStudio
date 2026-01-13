import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './HowItWorks.css';

function Step({ number, title, description }) {
  const [ref, visible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`how-step ${visible ? 'visible' : ''}`}
    >
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="howitworks snap-section">
      <div className="howitworks-header">
        <h2>How It Works</h2>
        <p>
          A simple, transparent process.
          No hidden steps. No technical confusion.
        </p>
      </div>

      <div className="howitworks-steps">
        <Step
          number="01"
          title="Share your website"
          description="Send us your website or project details. We review everything and plan the setup."
        />

        <Step
          number="02"
          title="We deploy & secure it"
          description="We deploy your site on reliable cloud infrastructure and set up SSL properly."
        />

        <Step
          number="03"
          title="We keep it running"
          description="We monitor uptime, apply updates, and quietly handle fixes in the background."
        />
      </div>
    </section>
  );
}
