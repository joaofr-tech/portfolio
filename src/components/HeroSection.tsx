export function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="wrap">
        <div className="hero-kicker mono">joão francisco / software engineering &amp; data</div>
        <h1>Construo sistemas robustos, pipelines de dados e agentes autônomos.</h1>
        <p className="hero-desc">
          Estudante de Engenharia de Software na PUC Minas. Desenvolvo aplicações completas com Spring Boot e React,
          aliando uma base sólida de backend e infraestrutura a pipelines analíticos de dados e agentes inteligentes.
        </p>

        {/* Featured Card: EstágioBot AI */}
        <article className="featured-card">
          <div className="featured-pill">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }} aria-hidden="true">
              auto_awesome
            </span>
            <span>Destaque • Agente Autônomo</span>
          </div>
          <h2 className="featured-title">EstágioBot AI — Agente Autônomo para Busca de Vagas</h2>
          <p className="featured-desc">
            Agente autônomo baseado no Google Antigravity CLI que realiza buscas contínuas por vagas de estágio em
            Engenharia de Software, Dados e Inteligência Artificial. Filtra automaticamente oportunidades compatíveis com
            o turno matutino, alimenta um dashboard local minimalista com auditoria de métricas e dispara alertas por e-mail.
          </p>

          <div className="tag-list" aria-label="Tecnologias do projeto principal">
            <span className="tag-item highlight">Agentes de IA</span>
            <span className="tag-item">Google Antigravity CLI</span>
            <span className="tag-item">Node.js</span>
            <span className="tag-item">React</span>
            <span className="tag-item">PowerShell</span>
          </div>

          <div>
            <a
              href="https://github.com/joaofr-tech/estagio-bot-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action btn-action-primary"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }} aria-hidden="true">
                code
              </span>
              <span>Repositório no GitHub</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
