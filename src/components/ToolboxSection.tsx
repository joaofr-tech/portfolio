import { useLanguage } from '../context/LanguageContext'

export function ToolboxSection() {
  const { t } = useLanguage()

  return (
    <section id="ferramentas" className="document-section">
      {/* Invisible anchor for backward compatibility with #toolbox */}
      <div id="toolbox" style={{ position: 'relative', top: '-4rem' }} aria-hidden="true" />
      <div className="wrap">
        <header className="section-header">
          <p className="mono">{t.toolbox.kicker}</p>
          <h2>{t.toolbox.title}</h2>
          <p className="section-intro">{t.toolbox.subtitle}</p>
        </header>

        <div className="skills-index">
          {t.toolbox.categories.map((group) => (
            <div key={group.category} className="skill-line">
              <span className="skill-category">{group.category}</span>
              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
