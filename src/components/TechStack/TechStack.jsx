import LogoLoop from '../LogoLoop/LogoLoop';

// Demo with simple text-based logos (no external icons needed)
const TechStackDemo = () => {
  const techLogos = [
    { node: '⚛', title: "React", href: "https://react.dev" },
    { node: '⚡', title: "Vite", href: "https://vitejs.dev" },
    { node: '✨', title: "GSAP", href: "https://gsap.com" },
    { node: '🎬', title: "Motion", href: "https://motion.dev" },
    { node: '☁', title: "AWS", href: "https://aws.amazon.com" },
    { node: '🐳', title: "Docker", href: "https://www.docker.com" },
    { node: '🔧', title: "Terraform", href: "https://www.terraform.io" },
  ];

  return (
    <section style={{
      minHeight: '400px',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            margin: '0 0 0.5rem 0',
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Tech Stack
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#94a3b8',
            margin: '0',
          }}>
            Built with modern technologies
          </p>
        </div>

        {/* Logo Loop Container */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'rgba(30, 41, 59, 0.3)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: '20px',
          padding: '2rem',
        }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#1e293b"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackDemo;
