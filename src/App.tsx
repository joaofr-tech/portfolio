import { useEffect, useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { Sidebar } from './components/Sidebar'
import Profile from './pages/Profile'
import ArticlePage from './pages/ArticlePage'
import { articles } from './data/articles'

function PortfolioLayout() {
  const [hash, setHash] = useState(window.location.hash)
  const [activeSection, setActiveSection] = useState('sobre')

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash)
      if (window.location.hash.startsWith('#/artigo/')) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const articleSlug = hash.startsWith('#/artigo/')
    ? hash.replace('#/artigo/', '').split('?')[0].split('#')[0]
    : null

  const currentArticle = articleSlug
    ? articles.find((a) => a.slug === articleSlug)
    : null

  const handleBack = () => {
    window.location.hash = '#artigos'
    setTimeout(() => {
      document.getElementById('artigos')?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }

  const handleNavigate = (id: string) => {
    setActiveSection(id)
    if (currentArticle) {
      window.location.hash = `#${id}`
      setTimeout(() => {
        const target =
          document.getElementById(id) ||
          (id === 'ferramentas' ? document.getElementById('toolbox') : null)
        target?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  return (
    <div className="site-layout">
      <LanguageSwitcher />
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="main-content">
        {currentArticle ? (
          <ArticlePage article={currentArticle} onBack={handleBack} />
        ) : (
          <Profile onSectionChange={setActiveSection} />
        )}
      </main>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioLayout />
    </LanguageProvider>
  )
}
