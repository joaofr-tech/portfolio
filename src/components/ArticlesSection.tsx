import { articles } from '../data/articles'

export function ArticlesSection() {
  return (
    <section id="artigos" className="document-section">
      <div className="wrap">
        <header className="section-header">
          <p className="mono">04 / artigos</p>
          <h2>Como eu penso.</h2>
          <p className="section-intro">
            Artigos sobre meus aprendizados, descobertas e reflexões.
          </p>
        </header>

        <div className="article-table">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`#/artigo/${article.slug}`}
              className="article-row"
              aria-label={`Ler artigo: ${article.title}`}
            >
              <div className="article-meta">
                <span>{article.date}</span>
                <br />
                <span style={{ color: 'var(--muted)' }}>{article.readTime}</span>
              </div>

              <div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-desc">{article.summary}</p>
              </div>

              <div className="article-arrow" aria-hidden="true">
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
