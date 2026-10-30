interface ProjectItem {
  title: string
  tags: string[]
  description: string
  githubUrl: string
  liveUrl?: string
}

const projects: ProjectItem[] = [
  {
    title: 'Cloud Data Pipeline: Arquitetura Medalhão com Azure e Python',
    tags: ['Engenharia de Dados', 'Azure Blob Storage', 'Python', 'Pandas & Parquet', 'SQL'],
    description:
      'Pipeline de dados ponta a ponta implementando a Arquitetura Medalhão (Bronze, Silver e Gold). Extrai cotações cambiais em tempo real via API REST, armazena payloads brutos particionados no Azure Blob Storage, limpa e converte para Parquet colunar e ingere em banco SQL analítico com consultas para médias móveis e métricas de volatilidade.',
    githubUrl: 'https://github.com/joaofr-tech/cloud-data-pipeline-azure',
  },
  {
    title: 'Movie App — Catálogo e Busca de Filmes com TMDB',
    tags: ['Frontend', 'React 19', 'Vite', 'TMDB API', 'Context API'],
    description:
      'Aplicação web moderna e responsiva para exploração e busca de filmes em tempo real integrada à API TMDB. Conta com gerenciamento de estado global, persistência de favoritos no localStorage com feedback visual e interface adaptada para múltiplos dispositivos.',
    githubUrl: 'https://github.com/joaofr-tech/movie-react-app',
  },
  {
    title: 'Pipeline ETL com Arquitetura Medalhão e Enriquecimento de Dados',
    tags: ['Engenharia de Dados', 'Python', 'PostgreSQL', 'Docker'],
    description:
      'Arquitetura em três camadas (Bronze, Silver e Gold) para processamento e enriquecimento de cadastros via API pública. Converte dados brutos para Parquet otimizado e popula banco PostgreSQL em Docker para análise relacional no DBeaver.',
    githubUrl: 'https://github.com/joaofr-tech/ETL-medalion-architecture',
  },
  {
    title: 'Album26 — Controle da Copa do Mundo 2026',
    tags: ['Frontend', 'PWA / Mobile', 'Vanilla JS', 'Cloudflare Workers'],
    description:
      'PWA mobile-first e offline para controle da coleção de figurinhas da Copa do Mundo 2026. Conta com registro por voz e ditado natural, conferência inteligente de listas do WhatsApp e persistência local segura (sem backend).',
    githubUrl: 'https://github.com/joaofr-tech/Album26',
    liveUrl: 'https://pwa-album-copa-sdd.jf756061.workers.dev',
  },
  {
    title: 'Habitus — Consolidação de Hábitos e Metas',
    tags: ['Frontend', 'React', 'TypeScript', 'Cloudflare Pages'],
    description:
      'Aplicação web minimalista para calcular e acompanhar a consistência de hábitos e metas pessoais. Permite registros por oportunidade, métricas de adesão e persistência 100% local via localStorage.',
    githubUrl: 'https://github.com/joaofr-tech/kpi-habits',
    liveUrl: 'https://kpi-habits.jf756061.workers.dev/',
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="document-section">
      <div className="wrap">
        <header className="section-header">
          <p className="mono">02 / projetos</p>
          <h2>Aplicações, pipelines e ferramentas construídas.</h2>
          <p className="section-intro">
            Soluções completas com ênfase em arquitetura limpa, processamento eficiente de dados e código aberto no GitHub.
          </p>
        </header>

        <div className="project-table">
          {projects.map((project) => (
            <div key={project.title} className="project-row">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-action btn-action-primary"
                    title="Acessar demonstração online"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }} aria-hidden="true">
                      open_in_new
                    </span>
                    <span>Live Demo</span>
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-action"
                  title="Ver código fonte no GitHub"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }} aria-hidden="true">
                    code
                  </span>
                  <span>Código</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
