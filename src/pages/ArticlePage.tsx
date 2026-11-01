import type { ComponentType } from 'react'
import type { Article } from '../data/articles'
import { useLanguage } from '../context/LanguageContext'
import ClaudeCodeArticle from '../components/articles/ClaudeCodeArticle'
import JobSearchAgentArticle from '../components/articles/JobSearchAgentArticle'
import LocalAiAgentArticle from '../components/articles/LocalAiAgentArticle'

interface ArticlePageProps {
  article: Article
  onBack: () => void
}

const ARTICLE_COMPONENTS: Record<string, ComponentType> = {
  'construi-um-agente-que-busca-vagas-diariamente': JobSearchAgentArticle,
  'como-usar-claude-code-gratuitamente': ClaudeCodeArticle,
  'construindo-agente-ia-local-pydanticai-ollama': LocalAiAgentArticle,
}

export default function ArticlePage({ article, onBack }: ArticlePageProps) {
  const { t } = useLanguage()
  const ContentComponent = ARTICLE_COMPONENTS[article.slug]

  const localizedArticle = t.articles.items.find((a) => a.slug === article.slug) || article

  return (
    <article className="artigo-detalhe-container">
      <div className="artigo-nav-top">
        <button type="button" onClick={onBack} className="btn-voltar" aria-label={t.articlePage.backBtn}>
          <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
          <span>{t.articlePage.backBtn}</span>
        </button>
      </div>

      <header className="artigo-page-header">
        <div className="artigo-cover-wrapper">
          <img src={localizedArticle.coverImage} alt={localizedArticle.title} className="artigo-page-cover" />
        </div>

        <h1 className="artigo-page-title">{localizedArticle.title}</h1>

        <div className="artigo-meta-bar">
          <span className="artigo-autor">
            <span className="material-symbols-outlined" aria-hidden="true">person</span>
            <span>{localizedArticle.author}</span>
          </span>
          <span className="meta-separator">•</span>
          <span className="artigo-data">
            <span className="material-symbols-outlined" aria-hidden="true">calendar_today</span>
            <span>{localizedArticle.date}</span>
          </span>
          <span className="meta-separator">•</span>
          <span className="artigo-leitura">
            <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
            <span>{localizedArticle.readTime}</span>
          </span>
        </div>
      </header>

      {ContentComponent ? (
        <ContentComponent />
      ) : (
        <div className="artigo-page-content">
          <p className="artigo-lead">{localizedArticle.summary}</p>
        </div>
      )}

      <footer className="artigo-page-footer">
        <button type="button" onClick={onBack} className="btn-voltar" aria-label={t.articlePage.backBtn}>
          <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
          <span>{t.articlePage.backBtn}</span>
        </button>
      </footer>
    </article>
  )
}
