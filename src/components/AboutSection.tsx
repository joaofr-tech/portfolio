import { asset } from '../paths'

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
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '88px',
                height: '88px',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid var(--line)',
                flexShrink: 0,
                background: 'var(--paper-deep)',
              }}
            >
              <img
                src={asset('2b.jpg')}
                alt="João Francisco"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <p>
                Sou estudante de <strong>Engenharia de Software na Pontifícia Universidade Católica de Minas Gerais (PUC Minas)</strong>.
                Minha formação e estudos são direcionados para a construção de arquiteturas completas e confiáveis,
                integrando backend robusto em <strong>Java &amp; Spring Boot</strong> a aplicações modernas em <strong>React</strong>.
              </p>
            </div>
          </div>

          <p>
            Tenho grande interesse em <strong>Engenharia de Dados</strong> — processamento batch/streaming,
            arquiteturas em camadas (Bronze, Silver e Gold) e formatos colunares como Parquet — além do uso prático de
            <strong> Agentes Autônomos de IA</strong> para resolver problemas do mundo real, como extração de dados e automação de rotinas complexas.
          </p>

          <div className="about-highlight-box">
            <p>
              <strong>Foco atual:</strong> Arquiteturas de microsserviços e APIs com Spring Boot, ingestão e transformação de dados com Python/Azure, e ferramentas de produtividade aumentada com IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
