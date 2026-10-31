import { useLanguage } from '../context/LanguageContext'

export function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      className="language-switcher"
      onClick={toggleLang}
      aria-label={lang === 'pt' ? 'Alternar para inglês' : 'Switch to Portuguese'}
      title={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <span className={lang === 'pt' ? 'active' : ''}>PT</span>
      <i aria-hidden="true">/</i>
      <span className={lang === 'en' ? 'active' : ''}>EN</span>
    </button>
  )
}
