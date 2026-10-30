import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface SidebarProps {
  activeSection: string
  onNavigate?: (id: string) => void
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const { t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLinkClick = (id: string) => {
    setMobileOpen(false)
    if (onNavigate) {
      onNavigate(id)
    } else {
      if (window.location.hash.startsWith('#/artigo/')) {
        window.location.hash = `#${id}`
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 60)
      }
    }
  }

  return (
    <aside className="site-sidebar" aria-label="Navegação principal">
      {/* Top: Identity & Status */}
      <div className="sidebar-top">
        <a
          href="#hero"
          className="sidebar-identity"
          onClick={() => handleLinkClick('hero')}
          aria-label="Ir para o topo"
        >
          <span className="identity-mark">J</span>
          <span className="identity-copy">
            <strong>João Francisco</strong>
            <small>{t.sidebar.subtitle}</small>
          </span>
        </a>

        <div className="sidebar-status" title="Localização atual">
          <span className="status-dot" aria-hidden="true"></span>
          <span>{t.sidebar.status}</span>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        type="button"
        className="mobile-header-btn"
        aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
          {mobileOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Numbered Navigation */}
      <nav aria-label="Seções do documento">
        <ol className={`sidebar-links ${mobileOpen ? 'mobile-open' : ''}`}>
          {t.sidebar.nav.map((item) => {
            const isMatch = activeSection === item.id || (item.id === 'ferramentas' && activeSection === 'toolbox')
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={isMatch ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(item.id)
                    const target = document.getElementById(item.id) || (item.id === 'ferramentas' ? document.getElementById('toolbox') : null)
                    target?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span className="nav-number">{item.number}</span>
                  <strong>{item.label}</strong>
                </a>
              </li>
            )
          })}
        </ol>
      </nav>

      {/* Bottom: Availability & Social */}
      <div className="sidebar-bottom">
        <span className="sidebar-availability">
          {t.sidebar.availability}
        </span>
        <div className="social-icons">
          <a
            href="https://github.com/joaofr-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="GitHub"
            aria-label="Perfil no GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-francisco-ramos/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="LinkedIn"
            aria-label="Perfil no LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </aside>
  )
}
