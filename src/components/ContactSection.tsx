export function ContactSection() {
  return (
    <>
      <section id="contato" className="document-section">
        <div className="wrap">
          <header className="section-header">
            <p className="mono">06 / contato</p>
            <h2>Vamos conversar sobre engenharia, dados ou projetos?</h2>
            <p className="section-intro">
              Estou ativamente disponível para oportunidades de estágio em Engenharia de Software e Engenharia de Dados.
            </p>
          </header>

          <p className="contact-desc">
            Seja para discutir uma oportunidade técnica, debater sobre arquitetura medalhão ou trocar ideias sobre agentes autônomos, sinta-se à vontade para me contatar.
          </p>

          <div className="contact-links">
            <a
              href="mailto:joaofranciscoramos14@gmail.com"
              className="btn-action btn-action-primary"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }} aria-hidden="true">
                mail
              </span>
              <span>joaofranciscoramos14@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-francisco-ramos/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }} aria-hidden="true">
                work
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/joaofr-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }} aria-hidden="true">
                code
              </span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <p>João Francisco · Engenharia de Software &amp; Dados</p>
          <span>Belo Horizonte · 2026</span>
        </div>
      </footer>
    </>
  )
}
