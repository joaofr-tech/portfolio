import { useState } from 'react'
import { articles } from '../data/articles'

const topics = [
  { id: 'all', label: 'todos' },
  { id: 'ia', label: 'ia & agentes' },
  { id: 'ferramentas', label: 'ferramentas' },
]

export function ArticlesSection() {
  const [activeTopic, setActiveTopic] = useState('all')

  const filteredArticles =
    activeTopic === 'all'
      ? articles
      : articles.filter((a) => a.topic === activeTopic)

  return (
    <section id="artigos" className="document-section">
      <div className="wrap">
        <header className="section-header">
          <p className="mono">04 / artigos</p>
          <h2>Textos e guias práticos.</h2>
          <p className="section-intro">
            Artigos aprofundados sobre terminal inteligente, agentes de IA locais e ecossistema de desenvolvimento.
          </p>
        </header>

        {/* Filter Pills like joaoac.com */}
        <div className="article-filters" role="group" aria-label="Filtrar artigos por assunto">
          {topics.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`article-filter-btn ${activeTopic === t.id ? 'active' : ''}`}
              onClick={() => setActiveTopic(t.id)}
              aria-pressed={activeTopic === t.id}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Post Tiles Grid like joaoac.com */}
        <div className="article-grid" aria-label="Lista de artigos">
          {filteredArticles.map((article) => (
            <a
              key={article.slug}
              href={`#/artigo/${article.slug}`}
              className="post-tile"
              aria-label={`Ler artigo: ${article.title}`}
            >
              <div className="cover-box">
                <img
                  src={article.coverImage}
                  alt={`Capa de ${article.title}`}
                  loading="lazy"
                />
              </div>

              <div className="text">
                <span className="eyebrow">{article.topicLabel || 'Artigo'}</span>
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
