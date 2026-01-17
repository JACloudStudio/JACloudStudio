import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './components/About/About.jsx';
import PricingPage from './pages/Pricing.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
