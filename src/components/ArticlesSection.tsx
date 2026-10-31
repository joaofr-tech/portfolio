import { useLanguage } from '../context/LanguageContext'

export function ArticlesSection() {
  const { t } = useLanguage()

  return (
    <section id="artigos" className="document-section">
      <div className="wrap">
        <header className="section-header">
          <p className="mono">{t.articles.kicker}</p>
          <h2>{t.articles.title}</h2>
          <p className="section-intro">{t.articles.subtitle}</p>
        </header>

        {/* Post Tiles Grid like joaoac.com */}
        <div className="article-grid" aria-label={t.articles.title}>
          {t.articles.items.map((article) => (
            <a
              key={article.slug}
              href={`#/artigo/${article.slug}`}
              className="post-tile"
              aria-label={`${article.title}`}
            >
              <div className="cover-box">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  loading="lazy"
                />
              </div>

              <div className="text">
                <span className="eyebrow">{article.topicLabel}</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <time>
                  {article.date} · {article.readTime}
                </time>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
