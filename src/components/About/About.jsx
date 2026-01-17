import './About.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { ParticleCard } from '../MagicBento/MagicBento';

export default function About() {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="about-wrapper" id="about">
      <Header scrolled={true} />

      <section className="about-hero">
        <h1 className="about-title">About the Developers</h1>
        <p className="about-subtitle">We craft performant, delightful web experiences with a pragmatic engineering ethos.</p>
      </section>

      <section className="about-grid card-grid">
        <ParticleCard className="magic-bento-card">
          <div className="magic-bento-card__content">
            <h3 className="magic-bento-card__title">Ashar</h3>
            <p className="magic-bento-card__description">I'm a multi-disciplinary creative and developer with a background in Cloud / Infrastructure Engineering and Full-Stack Development, blending strong technical skills with high-impact visual design. My work spans Android App Development, Web Design, and CI/CD & Deployment Automation, alongside Graphic Design, Brand Identity Design, and Poster Design. I specialize in 3D Modeling, 3D Environment Design, and 3D Poster Design, while also creating engaging visuals through Animation and Motion Graphics Design. With a solid foundation in UI/UX Design, Social Media Marketing, and Marketing Creative Design, I craft digital experiences that are both functional and visually powerful. As a Freelance Pinterest Designer, Visual Designer, and Digital Artist, I help brands stand out through bold aesthetics and strong storytelling, while my experience as a Game Developer and Creative Designer adds an interactive edge to everything I build.</p>
          </div>
        </ParticleCard>
        <ParticleCard className="magic-bento-card">
          <div className="magic-bento-card__content">
            <h3 className="magic-bento-card__title">Javed</h3>
            <p className="magic-bento-card__description">I'm a multi-disciplinary creative and developer with a strong focus on Frontend Development, blending clean UI building with modern design thinking and interactive experiences. My work spans web design, UI/UX design, and game development, where I create smooth user flows, responsive interfaces, and engaging digital experiences that feel premium and easy to use. Alongside development, I specialize in 3D modeling and 3D environment design, adding a strong visual edge to my projects through creative assets and interactive design. I also explore motion-based visuals and digital creativity, helping ideas feel more alive and impactful. While frontend is my strongest area, I'm actively learning and improving my backend development skills to become more full-stack and build complete end-to-end products. I'm also expanding into Flutter app development, so I can create modern cross-platform mobile apps in the future.</p>
          </div>
        </ParticleCard>
        <ParticleCard className="magic-bento-card about-card-full">
          <div className="magic-bento-card__content">
            <h3 className="magic-bento-card__title">About Us</h3>
            <p className="magic-bento-card__description">We're not just business partners — we're school friends who turned years of teamwork into a company.

From building small projects together in school to now pursuing B.Tech in CSE, we've always shared the same mindset: learn fast, build better, and deliver with honesty. Over time, our skills grew in different directions, but our goal stayed the same — creating things that actually work in the real world.

Today, we're combining our strengths to help startups and well-established businesses bring their ideas online, scale smoothly, and stay reliable in the cloud.

One of us specializes in Game Development, focusing on building interactive, high-performance experiences and modern front-end systems. The other specializes in Cloud Infrastructure, handling deployment, automation, scalability, and ensuring everything runs fast, secure, and stable.

We built this website as the first step of our journey — not just as a portfolio, but as a promise: we build with care, we communicate clearly, and we deliver what we commit.

Whether you need a complete website deployment, cloud hosting, or a full digital setup, we're here to make the process simple, professional, and stress-free.</p>
          </div>
        </ParticleCard>
      </section>

      <section className="about-actions">
        <Link className="about-btn" to="/">Back to Home</Link>
        <button className="about-btn" onClick={handleContactClick}>Contact Us</button>
      </section>

      <Footer />
    </div>
  );
}
