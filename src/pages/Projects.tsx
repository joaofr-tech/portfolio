interface Project {
  title: string
  tags: string[]
  impactDescription: string
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
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

export default function Projects() {
  return (
    <section id="projetos" className="containerProjetos">
      <div className="projetos-hero">
        <div className="section-label">
          <span className="material-symbols-outlined" aria-hidden="true">folder_open</span>
          <p>Projetos</p>
        </div>
      </div>

      <section className="projetos-grid" aria-label="Lista de projetos">
        {projects.map(project => (
          <article className="projeto-card" key={project.title}>
            <div className="projeto-content">
              <h2>{project.title}</h2>
              <div className="projeto-tags" aria-label="Tecnologias e especialidades">
                {project.tags.map((tag, index) => (
                  <span key={tag} className="tag-item">
                    {tag}
                    {index < project.tags.length - 1 && (
                      <span className="tag-separator" aria-hidden="true">•</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="projeto-descricao">{project.impactDescription}</p>
            </div>

            <div className="projeto-actions" aria-label="Ações do projeto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="btn-action btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
                  <span>Live Demo</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                className={`btn-action ${project.liveUrl ? 'btn-secondary' : 'btn-primary'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined" aria-hidden="true">code</span>
                <span>Código no GitHub</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </section>
  )
}
