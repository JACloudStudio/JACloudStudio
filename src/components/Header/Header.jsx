import './Header.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header({ scrolled }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on home, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">

        {/* LOGO */}
        <Link to="/" className="header-logo">
          ja<span>cloudstudio</span>
        </Link>

        {/* NAV */}
        <nav className="header-nav">
          <a href="#what-we-do" onClick={(e) => handleSectionClick(e, 'what-we-do')}>What we do</a>
          <a href="#how-it-works" onClick={(e) => handleSectionClick(e, 'how-it-works')}>How it works</a>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* CTA */}
        <div className="header-actions">
          <a href="#contact" onClick={(e) => handleSectionClick(e, 'contact')} className="header-contact">Contact</a>
        </div>

      </div>
    </header>
  );
}
