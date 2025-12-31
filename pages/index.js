import Head from "next/head";

// Design tokens
const theme = {
  colors: {
    background: "#0f0f0f",
    surface: "#1a1a1a",
    surfaceHover: "#252525",
    textPrimary: "#f5f5f5",
    textSecondary: "#a0a0a0",
    textMuted: "#707070",
    accent: "#3b82f6",
    accentHover: "#2563eb",
    border: "#2a2a2a",
    statusActive: "#10b981",
    statusPlanning: "#f59e0b",
    statusQueue: "#6366f1",
    statusContinuous: "#8b5cf6",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
    xxxl: "4rem",
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    desktop: "1024px",
  },
};

// Status configuration
const statusConfig = {
  active: { label: "Em desenvolvimento", color: theme.colors.statusActive },
  planning: { label: "Em planejamento", color: theme.colors.statusPlanning },
  queue: { label: "Próximo na fila", color: theme.colors.statusQueue },
  continuous: { label: "Contínuo", color: theme.colors.statusContinuous },
};

// Projects data
const projects = [
  {
    id: 1,
    title: "Clone TabNews",
    description: "Clone do TabNews para aprendizado de desenvolvimento web",
    status: "active",
    emoji: "📰",
  },
  {
    id: 2,
    title: "Deeplink",
    description: "Ferramenta com cache para evitar redigitação de deeplinks",
    status: "queue",
    emoji: "📱",
  },
  {
    id: 3,
    title: "Conversor CSV/XLSX",
    description:
      "Conversor de faturas bancárias para CSV com categorias personalizadas",
    status: "active",
    emoji: "📊",
  },
  {
    id: 4,
    title: "Projetos de Estudo",
    description: "Diversos projetos de estudo e experimentação",
    status: "continuous",
    emoji: "🔧",
  },
];

// Social links data
const socialLinks = [
  { id: 1, label: "GitHub", href: "https://github.com/pedrofrois", icon: "🔗" },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://linkedin.com/in/pedrofbit",
    icon: "💼",
  },
  {
    id: 3,
    label: "Email",
    href: "mailto:pedrofroisbittencourt@gmail.com",
    icon: "✉️",
  },
];

// ProgressBar Component
function ProgressBar({ progress = 20 }) {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <span className="progress-label">{progress}% concluído</span>

      <style jsx>{`
        .progress-container {
          width: 100%;
          max-width: 400px;
          margin: ${theme.spacing.lg} auto;
        }

        .progress-bar {
          height: 8px;
          background: linear-gradient(
            90deg,
            ${theme.colors.accent},
            ${theme.colors.accentHover}
          );
          border-radius: 4px;
          transition: width 0.3s ease;
          animation: pulse 2s ease-in-out infinite;
        }

        .progress-label {
          display: block;
          text-align: center;
          margin-top: ${theme.spacing.sm};
          font-size: 0.875rem;
          color: ${theme.colors.textSecondary};
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

// ProjectCard Component
function ProjectCard({ title, description, status, emoji }) {
  const statusInfo = statusConfig[status];

  return (
    <article className="project-card">
      <div className="project-icon">{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span
        className="status"
        style={{ borderColor: statusInfo.color, color: statusInfo.color }}
      >
        {statusInfo.label}
      </span>

      <style jsx>{`
        .project-card {
          background: ${theme.colors.surface};
          border: 1px solid ${theme.colors.border};
          border-radius: 12px;
          padding: ${theme.spacing.lg};
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
          background: ${theme.colors.surfaceHover};
        }

        .project-icon {
          font-size: 2.5rem;
          margin-bottom: ${theme.spacing.md};
        }

        .project-card h3 {
          font-size: 1.25rem;
          margin: 0 0 ${theme.spacing.sm} 0;
          color: ${theme.colors.textPrimary};
        }

        .project-card p {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: ${theme.colors.textSecondary};
          margin: 0 0 ${theme.spacing.md} 0;
        }

        .status {
          display: inline-block;
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          border: 1px solid;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </article>
  );
}

// SocialLink Component
function SocialLink({ label, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>

      <style jsx>{`
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: ${theme.spacing.sm};
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          color: ${theme.colors.textPrimary};
          text-decoration: none;
          border: 1px solid ${theme.colors.border};
          border-radius: 8px;
          background: ${theme.colors.surface};
          transition: all 0.2s ease;
          position: relative;
        }

        .social-link:hover {
          border-color: ${theme.colors.accent};
          background: ${theme.colors.surfaceHover};
          transform: translateY(-2px);
        }

        .social-link:focus {
          outline: 2px solid ${theme.colors.accent};
          outline-offset: 2px;
        }

        .icon {
          font-size: 1.25rem;
        }

        .label {
          font-size: 0.9375rem;
          font-weight: 500;
        }
      `}</style>
    </a>
  );
}

// Main Home Component
export default function Home() {
  return (
    <>
      <Head>
        <title>Site em Construção | Projetos e Ferramentas</title>
        <meta
          name="description"
          content="Desenvolvendo projetos pessoais e profissionais - Clone do TabNews, ferramentas úteis e projetos de estudo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header>
          <h1>Site em Construção 🚧</h1>
          <p className="subtitle">Desenvolvendo com Next.js e React</p>
          <ProgressBar progress={20} />
        </header>

        <section className="projects">
          <h2>Projetos em Desenvolvimento</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>

        <section className="about">
          <p>
            Este site está sendo desenvolvido como parte do aprendizado em{" "}
            <a
              href="https://curso.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              curso.dev
            </a>
            , criando um clone do TabNews e outros projetos pessoais que
            ajudarão pessoas com tarefas do dia a dia.
          </p>
        </section>

        <footer>
          <h3>Conecte-se</h3>
          <div className="social-links">
            {socialLinks.map((link) => (
              <SocialLink key={link.id} {...link} />
            ))}
          </div>
        </footer>
      </main>

      <style jsx>{`
        main {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: ${theme.spacing.xl};
          max-width: 1200px;
          margin: 0 auto;
        }

        header {
          text-align: center;
          margin-bottom: ${theme.spacing.xxxl};
          animation: fadeInUp 0.6s ease-out;
        }

        h1 {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          margin: 0 0 ${theme.spacing.md} 0;
          color: ${theme.colors.textPrimary};
          font-weight: 700;
        }

        .subtitle {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          color: ${theme.colors.textSecondary};
          margin: 0;
        }

        .projects {
          width: 100%;
          margin-bottom: ${theme.spacing.xxxl};
          animation: fadeInUp 0.6s ease-out 0.2s backwards;
        }

        .projects h2 {
          font-size: clamp(1.5rem, 4vw, 1.875rem);
          text-align: center;
          margin: 0 0 ${theme.spacing.xl} 0;
          color: ${theme.colors.textPrimary};
        }

        .projects-grid {
          display: grid;
          gap: ${theme.spacing.lg};
          grid-template-columns: 1fr;
        }

        @media (min-width: ${theme.breakpoints.mobile}) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: ${theme.breakpoints.desktop}) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: ${theme.spacing.xl};
          }
        }

        .about {
          max-width: 65ch;
          text-align: center;
          margin-bottom: ${theme.spacing.xxxl};
          animation: fadeInUp 0.6s ease-out 0.4s backwards;
        }

        .about p {
          font-size: 1rem;
          line-height: 1.7;
          color: ${theme.colors.textSecondary};
          margin: 0;
        }

        .about a {
          color: ${theme.colors.accent};
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }

        .about a:hover {
          border-bottom-color: ${theme.colors.accent};
        }

        footer {
          text-align: center;
          animation: fadeInUp 0.6s ease-out 0.6s backwards;
        }

        footer h3 {
          font-size: 1.25rem;
          margin: 0 0 ${theme.spacing.lg} 0;
          color: ${theme.colors.textPrimary};
        }

        .social-links {
          display: flex;
          gap: ${theme.spacing.md};
          flex-wrap: wrap;
          justify-content: center;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
          background: ${theme.colors.background};
          color: ${theme.colors.textPrimary};
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
