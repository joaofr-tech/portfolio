export function AboutSection() {
  return (
    <section id="sobre" className="document-section">
      <div className="wrap">
        <header className="section-header">
          <p className="mono">01 / sobre</p>
          <h2>Fundamentos sólidos e engenharia orientada a impacto.</h2>
          <p className="section-intro">
            Da concepção de modelos relacionais e pipelines de dados ao desenvolvimento de interfaces limpas e agentes autônomos.
          </p>
        </header>

        <div className="about-content">
          <p>
            Sou estudante de <strong>Engenharia de Software na Pontifícia Universidade Católica de Minas Gerais (PUC Minas)</strong>.
            Minha formação e estudos são direcionados para a construção de arquiteturas completas e confiáveis,
            integrando backend robusto em <strong>Java &amp; Spring Boot</strong> a aplicações modernas em <strong>React</strong>.
          </p>

          <p>
            Tenho grande interesse em <strong>Engenharia de Dados</strong> com processamento batch/streaming,
            arquiteturas em camadas (Bronze, Silver e Gold) e formatos colunares como Parquet, além do uso prático de
            <strong> Agentes Autônomos de IA</strong> para resolver problemas do mundo real, como extração de dados e automação de rotinas.
          </p>
        </div>
      </div>
    </section>
  )
}
