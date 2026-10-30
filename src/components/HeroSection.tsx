import { useLanguage } from '../context/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="hero">
      <div className="wrap">
        <div className="hero-kicker mono">{t.hero.kicker}</div>
        <h1>{t.hero.headline}</h1>
        <p className="hero-desc">{t.hero.description}</p>

        {/* Featured Card: EstágioBot AI */}
        <article className="featured-card">
          <div className="featured-kicker mono">
            {t.hero.featured.kicker}
          </div>
          <h2 className="featured-title">{t.hero.featured.title}</h2>
          <p className="featured-desc">{t.hero.featured.description}</p>

          <div className="tag-list" aria-label="Tecnologias do projeto principal">
            {t.hero.featured.tags.map((tag, i) => (
              <span key={tag} className={`tag-item ${i === 0 ? 'highlight' : ''}`}>
                {tag}
              </span>
            ))}
          </div>

          <div>
            <a
              href="https://github.com/joaofr-tech/estagio-bot-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action btn-action-primary"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }} aria-hidden="true">
                code
              </span>
              <span>{t.hero.featured.repoBtn}</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
