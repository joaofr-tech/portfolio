import { articles } from '../data/articles'

export function ArticlesSection() {
  return (
    <section id="artigos" className="document-section">
      <div className="wrap">
        <header className="section-header">
          <p className="mono">04 / artigos</p>
          <h2>Escrita técnica e guias práticos.</h2>
          <p className="section-intro">
            Artigos aprofundados sobre ferramentas de terminal inteligente, agentes de IA autônomos e configurações práticas.
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
