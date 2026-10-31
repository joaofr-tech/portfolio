import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Language } from '../data/i18n'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: typeof translations['pt']
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang')
    if (saved === 'en' || saved === 'pt') return saved
    return 'pt'
  })

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const toggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
