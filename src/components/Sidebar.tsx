import { useState } from 'react'

interface SidebarProps {
  activeSection: string
  onNavigate?: (id: string) => void
}

const navLinks = [
  { id: 'sobre', number: '01', label: 'Sobre' },
  { id: 'projetos', number: '02', label: 'Projetos' },
  { id: 'toolbox', number: '03', label: 'Toolbox' },
  { id: 'artigos', number: '04', label: 'Artigos' },
  { id: 'certificados', number: '05', label: 'Certificações' },
  { id: 'contato', number: '06', label: 'Contato' },
]

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
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
            <small>software &amp; data</small>
          </span>
        </a>

        <div className="sidebar-status" title="Localização atual">
          <span className="status-dot" aria-hidden="true"></span>
          <span>Belo Horizonte</span>
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
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(item.id)
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="nav-number">{item.number}</span>
                <strong>{item.label}</strong>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Bottom: Availability & Social */}
      <div className="sidebar-bottom">
        <span className="sidebar-availability">
          aberto a projetos &amp; estágio
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
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              code
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-francisco-ramos/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            title="LinkedIn"
            aria-label="Perfil no LinkedIn"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              work
            </span>
          </a>
          <a
            href="#contato"
            className="social-btn"
            title="Contato"
            aria-label="Ir para seção de contato"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('contato')
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              mail
            </span>
          </a>
        </div>
      </div>
    </aside>
  )
}
