import { useLanguage } from '../context/LanguageContext'

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projetos" className="document-section">
      <div className="wrap">
        <header className="section-header">
          <p className="mono">{t.projects.kicker}</p>
          <h2>{t.projects.title}</h2>
          <p className="section-intro">{t.projects.subtitle}</p>
        </header>

        <div className="project-table">
          {t.projects.items.map((project) => (
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
                    title={project.title}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }} aria-hidden="true">
                      open_in_new
                    </span>
                    <span>{t.projects.liveBtn}</span>
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-action"
                  title={project.title}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }} aria-hidden="true">
                    code
                  </span>
                  <span>{t.projects.codeBtn}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
