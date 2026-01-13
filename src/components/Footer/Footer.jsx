import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">
          JA CloudStudio
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} JA CloudStudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
