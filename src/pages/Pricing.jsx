import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PricingSection from '../components/Pricing/Pricing.jsx';
import '../App.css';

export default function PricingPage() {
  return (
    <div className="scroll-container">
      <Header scrolled={true} />
      <section className="snap-section">
        <PricingSection />
      </section>
      <Footer />
    </div>
  );
}
