import type { ComponentType } from 'react'
import type { Article } from '../data/articles'
import ClaudeCodeArticle from '../components/articles/ClaudeCodeArticle'
import LocalAiAgentArticle from '../components/articles/LocalAiAgentArticle'

interface ArticlePageProps {
  article: Article
  onBack: () => void
}

const ARTICLE_COMPONENTS: Record<string, ComponentType> = {
  'como-usar-claude-code-gratuitamente': ClaudeCodeArticle,
  'construindo-agente-ia-local-pydanticai-ollama': LocalAiAgentArticle,
}

export default function ArticlePage({ article, onBack }: ArticlePageProps) {
  const ContentComponent = ARTICLE_COMPONENTS[article.slug]

  return (
    <article className="artigo-detalhe-container">
      <div className="artigo-nav-top">
        <button type="button" onClick={onBack} className="btn-voltar" aria-label="Voltar para a página inicial">
          <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
          <span>Voltar para o portfólio</span>
        </button>
      </div>

      <header className="artigo-page-header">
        <div className="artigo-cover-wrapper">
          <img src={article.coverImage} alt={`Capa do artigo: ${article.title}`} className="artigo-page-cover" />
        </div>

        <h1 className="artigo-page-title">{article.title}</h1>

        <div className="artigo-meta-bar">
          <span className="artigo-autor">
            <span className="material-symbols-outlined" aria-hidden="true">person</span>
            <span>{article.author}</span>
          </span>
          <span className="meta-separator">•</span>
          <span className="artigo-data">
            <span className="material-symbols-outlined" aria-hidden="true">calendar_today</span>
            <span>{article.date}</span>
          </span>
          <span className="meta-separator">•</span>
          <span className="artigo-leitura">
            <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
            <span>{article.readTime}</span>
          </span>
        </div>
      </header>

      {ContentComponent ? (
        <ContentComponent />
      ) : (
        <div className="artigo-page-content">
          <p className="artigo-lead">{article.summary}</p>
        </div>
      )}

      <footer className="artigo-page-footer">
        <button type="button" onClick={onBack} className="btn-voltar" aria-label="Voltar para a página inicial">
          <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
          <span>Voltar para o portfólio</span>
        </button>
      </footer>
    </article>
  )
}
