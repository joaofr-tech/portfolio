import { articles } from '../data/articles'

export default function Articles() {
  return (
    <section id="artigos" className="containerArtigos">
      <div className="artigos-hero">
        <div className="section-label">
          <span className="material-symbols-outlined" aria-hidden="true">article</span>
          <p>Artigos</p>
        </div>
      </div>

      <div className="artigos-grid" aria-label="Lista de artigos publicados">
        {articles.map((article) => (
          <a
            key={article.slug}
            href={`#/artigo/${article.slug}`}
            className="artigo-card"
            aria-label={`Ler artigo: ${article.title}`}
          >
            <div className="artigo-header">
              <span className="tempo-leitura">
                <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                <span>{article.readTime}</span>
              </span>
            </div>

            <div className="artigo-body">
              <h2>{article.title}</h2>
              <p className="artigo-resumo">{article.summary}</p>
            </div>

            <div className="artigo-footer">
              <span className="artigo-seta" aria-hidden="true">
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
