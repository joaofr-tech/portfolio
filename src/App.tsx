import { useEffect, useState } from 'react'
import { ThemeProvider } from './theme'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Profile from './pages/Profile'
import ArticlePage from './pages/ArticlePage'
import { articles } from './data/articles'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

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
    }, 50)
  }

  return (
    <ThemeProvider>
      <Header />
      {currentArticle ? (
        <main>
          <ArticlePage article={currentArticle} onBack={handleBack} />
        </main>
      ) : (
        <Profile />
      )}
      <Footer />
    </ThemeProvider>
  )
}
