import { useEffect, useState } from 'react'
import { useTheme } from '../theme'

const navItems = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'artigos', label: 'Artigos' },
  { id: 'certificados', label: 'Certificados' },
]

export function Header() {
  const { dark, toggle } = useTheme()
  const [activeSection, setActiveSection] = useState('sobre')

  useEffect(() => {
    const sections = ['sobre', 'projetos', 'artigos', 'certificados']
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5] },
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    if (window.location.hash.startsWith('#/artigo/')) {
      window.location.hash = `#${id}`
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  const handleLogoClick = () => {
    setActiveSection('sobre')
    if (window.location.hash.startsWith('#/artigo/')) {
      window.location.hash = '#sobre'
      setTimeout(() => {
        document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  return (
    <header className="site-header">
      <a href="#sobre" className="logo" aria-label="Ir para o perfil" onClick={handleLogoClick}>
        <span className="logo-mark" aria-hidden="true">JF</span>
        <span className="logo-name">João Francisco</span>
      </a>

      <nav className="navbar" aria-label="Navegação principal">
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link${activeSection === item.id ? ' active' : ''}`}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        <button id="theme-toggle" type="button" onClick={toggle} aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}>
          <span className="material-symbols-outlined" aria-hidden="true">{dark ? 'light_mode' : 'dark_mode'}</span>
        </button>
      </div>
    </header>
  )
}
