import LogoLoop from '../LogoLoop/LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiVite, 
  SiAmazonwebservices, 
  SiDocker, 
  SiTerraform,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql
} from 'react-icons/si';

const TechStackWithIcons = () => {
  const iconStyle = { color: '#ffffff', fontSize: '48px' };
  
  const techLogos = [
    { node: <SiReact style={iconStyle} />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs style={iconStyle} />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript style={iconStyle} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss style={iconStyle} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiVite style={iconStyle} />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiNodedotjs style={iconStyle} />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiAmazonwebservices style={iconStyle} />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiDocker style={iconStyle} />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiTerraform style={iconStyle} />, title: "Terraform", href: "https://www.terraform.io" },
    { node: <SiMongodb style={iconStyle} />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql style={iconStyle} />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiGraphql style={iconStyle} />, title: "GraphQL", href: "https://graphql.org" },
  ];

  return (
    <section style={{
      minHeight: '400px',
      background: 'linear-gradient(180deg, #7e899a 0%, #000000 100%)',
      padding: '4rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: '100%',
        width: '100%',
        margin: '0 auto',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '0 2rem',
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

        {/* Horizontal Logo Loop */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
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
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>

        {/* Optional: Vertical Logo Loop Example */}
        {/* <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'rgba(30, 41, 59, 0.3)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: '20px',
          padding: '2rem',
          height: '400px',
        }}>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="up"
            logoHeight={48}
            gap={40}
            hoverSpeed={20}
            fadeOut
            fadeOutColor="#1e293b"
            ariaLabel="Technology stack"
          />
        </div> */}
      </div>
    </section>
  );
};

export default TechStackWithIcons;
