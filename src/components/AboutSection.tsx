import { useLanguage } from '../context/LanguageContext'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="document-section">
      <div className="wrap">
        <header className="section-header">
          <p className="mono">{t.about.kicker}</p>
          <h2>{t.about.title}</h2>
          {t.about.subtitle ? <p className="section-intro">{t.about.subtitle}</p> : null}
        </header>

        <div className="about-content">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </div>
    </section>
  )
}
