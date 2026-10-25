import type { ReactNode } from 'react'
import { asset } from '../paths'
import { articles } from '../data/articles'

function ClaudeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M52.4285 162.873L98.7844 136.879L99.5485 134.602L98.7844 133.334H96.4921L88.7237 132.862L62.2346 132.153L39.3113 131.207L17.0249 130.026L11.4214 128.844L6.2 121.873L6.7094 118.447L11.4214 115.257L18.171 115.847L33.0711 116.911L55.485 118.447L71.6586 119.392L95.728 121.873H99.5485L100.058 120.337L98.7844 119.392L97.7656 118.447L74.5877 102.732L49.4995 86.1905L36.3823 76.62L29.3779 71.7757L25.8121 67.2858L24.2839 57.3608L30.6515 50.2716L39.3113 50.8623L41.4763 51.4531L50.2636 58.1879L68.9842 72.7209L93.4357 90.6804L97.0015 93.6343L98.4374 92.6652L98.6571 91.9801L97.0015 89.2625L83.757 65.2772L69.621 40.8192L63.2534 30.6579L61.5978 24.632C60.9565 22.1032 60.579 20.0111 60.579 17.4246L67.8381 7.49965L71.9133 6.19995L81.7193 7.49965L85.7946 11.0443L91.9074 24.9865L101.714 46.8451L116.996 76.62L121.453 85.4816L123.873 93.6343L124.764 96.1155H126.292V94.6976L127.566 77.9197L129.858 57.3608L132.15 30.8942L132.915 23.4505L136.608 14.4708L143.994 9.62643L149.725 12.344L154.437 19.0788L153.8 23.4505L150.998 41.6463L145.522 70.1215L141.957 89.2625H143.994L146.414 86.7813L156.093 74.0206L172.266 53.698L179.398 45.6635L187.803 36.802L193.152 32.5484H203.34L210.726 43.6549L207.415 55.1159L196.972 68.3492L188.312 79.5739L175.896 96.2095L168.191 109.585L168.882 110.689L170.738 110.53L198.755 104.504L213.91 101.787L231.994 98.7149L240.144 102.496L241.036 106.395L237.852 114.311L218.495 119.037L195.826 123.645L162.07 131.592L161.696 131.893L162.137 132.547L177.36 133.925L183.855 134.279H199.774L229.447 136.524L237.215 141.605L241.8 147.867L241.036 152.711L229.065 158.737L213.019 154.956L175.45 145.977L162.587 142.787H160.805V143.85L171.502 154.366L191.242 172.089L215.82 195.011L217.094 200.682L213.91 205.172L210.599 204.699L188.949 188.394L180.544 181.069L161.696 165.118H160.422V166.772L164.752 173.152L187.803 207.771L188.949 218.405L187.294 221.832L181.308 223.959L174.813 222.777L161.187 203.754L147.305 182.486L136.098 163.345L134.745 164.2L128.075 235.42L125.019 239.082L117.887 241.8L111.902 237.31L108.718 229.984L111.902 215.452L115.722 196.547L118.779 181.541L121.58 162.873L123.291 156.636L123.14 156.219L121.773 156.449L107.699 175.752L86.304 204.699L69.3663 222.777L65.291 224.431L58.2867 220.768L58.9235 214.27L62.8713 208.48L86.304 178.705L100.44 160.155L109.551 149.507L109.462 147.967L108.959 147.924L46.6977 188.512L35.6182 189.93L30.7788 185.44L31.4156 178.115L33.7079 175.752L52.4285 162.873Z"
        fill="#D97757"
      />
    </svg>
  )
}

interface Certification {
  icon: ReactNode
  title: string
  institution: string
  year: string
  link: string
}

const certifications: Certification[] = [
  {
    icon: '🎓',
    title: "CS50's Introduction to Computer Science",
    institution: 'Harvard University',
    year: '2025',
    link: asset('CS50x-cetified.pdf'),
  },
  {
    icon: '🌎',
    title: 'EF SET English Certificate 62/100 (C1 Advanced)',
    institution: 'EF SET',
    year: '2026',
    link: 'https://cert.efset.org/en/ZTsv7T',
  },
  {
    icon: <ClaudeIcon />,
    title: 'Claude Code 101',
    institution: 'Claude Academy',
    year: '2026',
    link: 'https://academy.claude.com/verify/0007973ade5f98e19de2707670fc0eaa',
  },
]

interface Project {
  title: string
  tags: string[]
  impactDescription: string
  githubUrl: string
  liveUrl?: string
}

const secondaryProjects: Project[] = [
  {
    title: 'Cloud Data Pipeline: Arquitetura Medalhão com Azure e Python',
    tags: ['Engenharia de Dados', 'Azure Blob Storage', 'Python', 'Pandas & Parquet', 'SQL'],
    impactDescription:
      'Pipeline de dados ponta a ponta implementando a Arquitetura Medalhão (Bronze, Silver e Gold). Extrai cotações cambiais em tempo real via API REST, armazena payloads brutos particionados no Azure Blob Storage, limpa e converte para Parquet colunar e ingere em banco SQL analítico com consultas para médias móveis e métricas de volatilidade.',
    githubUrl: 'https://github.com/joaofr-tech/cloud-data-pipeline-azure',
  },
  {
    title: 'Movie App — Catálogo e Busca de Filmes com TMDB',
    tags: ['Frontend', 'React 19', 'Vite', 'TMDB API', 'Context API'],
    impactDescription:
      'Aplicação web moderna e responsiva para exploração e busca de filmes em tempo real integrada à API TMDB. Conta com gerenciamento de estado global, persistência de favoritos no localStorage com feedback visual e interface Dark Mode adaptada para múltiplos dispositivos.',
    githubUrl: 'https://github.com/joaofr-tech/movie-react-app',
  },
  {
    title: 'Pipeline ETL com Arquitetura Medalhão e Enriquecimento de Dados',
    tags: ['Engenharia de Dados', 'Python', 'PostgreSQL', 'Docker'],
    impactDescription:
      'Arquitetura em três camadas (Bronze, Silver e Gold) para processamento e enriquecimento de cadastros via API pública. Converte dados brutos para Parquet otimizado e popula banco PostgreSQL em Docker para análise relacional no DBeaver.',
    githubUrl: 'https://github.com/joaofr-tech/ETL-medalion-architecture',
  },
  {
    title: 'Album26 — Controle da Copa do Mundo 2026',
    tags: ['Frontend', 'PWA / Mobile', 'Vanilla JS', 'Cloudflare Workers'],
    impactDescription:
      'PWA mobile-first e offline para controle da coleção de figurinhas da Copa do Mundo 2026. Conta com registro por voz e ditado natural, conferência inteligente de listas do WhatsApp e persistência local segura (sem backend).',
    githubUrl: 'https://github.com/joaofr-tech/Album26',
    liveUrl: 'https://pwa-album-copa-sdd.jf756061.workers.dev',
  },
  {
    title: 'Habitus — Consolidação de Hábitos e Metas',
    tags: ['Frontend', 'React', 'TypeScript', 'Cloudflare Pages'],
    impactDescription:
      'Aplicação web minimalista para calcular e acompanhar a consistência de hábitos e metas pessoais. Permite registros por oportunidade, métricas de adesão e persistência 100% local via localStorage.',
    githubUrl: 'https://github.com/joaofr-tech/kpi-habits',
    liveUrl: 'https://kpi-habits.jf756061.workers.dev/',
  },
]

export default function Profile() {
  return (
    <main className="bento-container">
      {/* 1. HERO ROW: Profile Card + Master Featured Project */}
      <section id="sobre" className="bento-grid">
        <aside className="bento-card card-profile">
          <div>
            <div className="profile-photo-wrapper">
              <img src={asset('2b.jpg')} alt="Foto de perfil de João Francisco" />
            </div>
            <p className="card-profile-tag">Desenvolvedor Fullstack</p>
            <h1 className="card-profile-name">João Francisco</h1>
            <p className="card-profile-bio">
              Estudante de Engenharia de Software na PUC Minas. Construo aplicações completas com Spring Boot e React, aliando uma base sólida de backend ao interesse contínuo por engenharia de dados e aplicações práticas com IA.
            </p>
            <div className="bento-tags" aria-label="Especialidades">
              <span className="bento-tag">Java &amp; Spring Boot</span>
              <span className="bento-tag">React &amp; JavaScript</span>
              <span className="bento-tag">Dados &amp; IA</span>
            </div>
          </div>

          <div className="social-row-bento">
            <a href="https://github.com/joaofr-tech" target="_blank" rel="noopener noreferrer" className="btn-bento-icon">
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '18px' }}>code</span>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-francisco-ramos/" target="_blank" rel="noopener noreferrer" className="btn-bento-icon">
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '18px' }}>work</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </aside>

        {/* Master Project Card */}
        <article className="bento-card card-featured">
          <div>
            <span className="featured-pill">
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '15px' }}>auto_awesome</span>
              <span>Destaque • Agente Autônomo</span>
            </span>
            <h2 className="featured-title">EstágioBot AI — Agente Autônomo para Busca de Vagas</h2>
            <p className="featured-desc">
              Agente autônomo baseado no Google Antigravity CLI que realiza buscas contínuas por vagas de estágio em Engenharia de Software, Dados e Inteligência Artificial. Filtra automaticamente oportunidades compatíveis com turno matutino, alimenta um dashboard local minimalista com auditoria e métricas de varredura, e dispara notificações por e-mail em React sempre que novas vagas são encontradas.
            </p>
            <div className="bento-tags" aria-label="Tecnologias do projeto principal">
              <span className="bento-tag" style={{ color: 'var(--accent)', borderColor: 'rgba(249, 115, 22, 0.3)' }}>Agentes de IA</span>
              <span className="bento-tag">Google Antigravity CLI</span>
              <span className="bento-tag">Node.js</span>
              <span className="bento-tag">React</span>
              <span className="bento-tag">PowerShell</span>
            </div>
          </div>
          <div className="bento-card-actions">
            <a
              href="https://github.com/joaofr-tech/estagio-bot-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bento-link btn-bento-primary"
            >
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '16px' }}>code</span>
              <span>Repositório no GitHub</span>
            </a>
          </div>
        </article>
      </section>

      {/* 2. PROJECTS BENTO GRID */}
      <section id="projetos" className="bento-grid" style={{ marginTop: '20px' }} aria-label="Projetos desenvolvidos">
        {/* Project 2: Cloud Data Pipeline Azure */}
        <article className="bento-card col-4">
          <div>
            <h3 className="bento-project-title">{secondaryProjects[0].title}</h3>
            <p className="bento-project-desc">{secondaryProjects[0].impactDescription}</p>
            <div className="bento-tags">
              {secondaryProjects[0].tags.map((t) => (
                <span key={t} className="bento-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="bento-card-actions">
            <a
              href={secondaryProjects[0].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bento-link btn-bento-secondary"
            >
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '16px' }}>code</span>
              <span>Código no GitHub</span>
            </a>
          </div>
        </article>

        {/* Project 3: Movie App TMDB */}
        <article className="bento-card col-4">
          <div>
            <h3 className="bento-project-title">{secondaryProjects[1].title}</h3>
            <p className="bento-project-desc">{secondaryProjects[1].impactDescription}</p>
            <div className="bento-tags">
              {secondaryProjects[1].tags.map((t) => (
                <span key={t} className="bento-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="bento-card-actions">
            <a
              href={secondaryProjects[1].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bento-link btn-bento-secondary"
            >
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '16px' }}>code</span>
              <span>Código no GitHub</span>
            </a>
          </div>
        </article>

        {/* Project 4: Pipeline ETL Docker */}
        <article className="bento-card col-4">
          <div>
            <h3 className="bento-project-title">{secondaryProjects[2].title}</h3>
            <p className="bento-project-desc">{secondaryProjects[2].impactDescription}</p>
            <div className="bento-tags">
              {secondaryProjects[2].tags.map((t) => (
                <span key={t} className="bento-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="bento-card-actions">
            <a
              href={secondaryProjects[2].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bento-link btn-bento-secondary"
            >
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '16px' }}>code</span>
              <span>Código no GitHub</span>
            </a>
          </div>
        </article>

        {/* Project 5: Album26 */}
        <article className="bento-card col-6">
          <div>
            <h3 className="bento-project-title">{secondaryProjects[3].title}</h3>
            <p className="bento-project-desc">{secondaryProjects[3].impactDescription}</p>
            <div className="bento-tags">
              {secondaryProjects[3].tags.map((t) => (
                <span key={t} className="bento-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="bento-card-actions">
            {secondaryProjects[3].liveUrl && (
              <a
                href={secondaryProjects[3].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bento-link btn-bento-primary"
              >
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '16px' }}>open_in_new</span>
                <span>Live Demo</span>
              </a>
            )}
            <a
              href={secondaryProjects[3].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bento-link btn-bento-secondary"
            >
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '16px' }}>code</span>
              <span>Código</span>
            </a>
          </div>
        </article>

        {/* Project 6: Habitus */}
        <article className="bento-card col-6">
          <div>
            <h3 className="bento-project-title">{secondaryProjects[4].title}</h3>
            <p className="bento-project-desc">{secondaryProjects[4].impactDescription}</p>
            <div className="bento-tags">
              {secondaryProjects[4].tags.map((t) => (
                <span key={t} className="bento-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="bento-card-actions">
            {secondaryProjects[4].liveUrl && (
              <a
                href={secondaryProjects[4].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bento-link btn-bento-primary"
              >
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '16px' }}>open_in_new</span>
                <span>Live Demo</span>
              </a>
            )}
            <a
              href={secondaryProjects[4].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bento-link btn-bento-secondary"
            >
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '16px' }}>code</span>
              <span>Código</span>
            </a>
          </div>
        </article>
      </section>

      {/* 3. ARTICLES & CERTIFICATIONS BENTO GRID */}
      <div className="bento-grid" style={{ marginTop: '20px' }}>
        {/* Articles Bento Card */}
        <section id="artigos" className="bento-card col-6" aria-label="Artigos Técnicos">
          <div style={{ marginBottom: '16px' }}>
            <h3 className="bento-project-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined" aria-hidden="true" style={{ color: 'var(--accent)' }}>article</span>
              <span>Artigos Técnicos</span>
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted-color)' }}>
              Guias sobre agentes de IA e ecossistema moderno
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {articles.map((article) => (
              <a
                key={article.slug}
                href={`#/artigo/${article.slug}`}
                className="bento-article-item"
                aria-label={`Ler artigo: ${article.title}`}
              >
                <div className="bento-article-thumb">
                  <img src={article.coverImage} alt="" />
                </div>
                <div>
                  <span className="bento-article-meta">{article.date} • {article.readTime}</span>
                  <h4 className="bento-article-title">{article.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Certifications Bento Card */}
        <section id="certificados" className="bento-card col-6" aria-label="Certificações">
          <div style={{ marginBottom: '16px' }}>
            <h3 className="bento-project-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined" aria-hidden="true" style={{ color: 'var(--amber)' }}>workspace_premium</span>
              <span>Certificações</span>
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted-color)' }}>
              Formação complementar e proficiência comprovada
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {certifications.map((cert) => (
              <div key={cert.title} className="bento-cert-row">
                <div className="bento-cert-info">
                  <div className="bento-cert-icon" aria-hidden="true">{cert.icon}</div>
                  <div>
                    <h4 className="bento-cert-title">{cert.title}</h4>
                    <p className="bento-cert-inst">{cert.institution} • {cert.year}</p>
                  </div>
                </div>
                <a
                  href={cert.link}
                  className="btn-bento-link btn-bento-secondary"
                  style={{ padding: '5px 12px', fontSize: '0.78rem' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '15px' }}>open_in_new</span>
                  <span>Verificar</span>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
