import { asset } from '../paths'

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2026 João Francisco. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/joaofr-tech" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined" aria-hidden="true">code</span>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-francisco-ramos/" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined" aria-hidden="true">work</span>
            LinkedIn
          </a>
          <a href={asset('joao_cv.pdf')} target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined" aria-hidden="true">description</span>
            <span>Currículo</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
