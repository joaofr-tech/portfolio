import { asset } from '../paths'
import Projects from './Projects'
import Articles from '../components/Articles'

const certifications = [
  {
    icon: '🎓',
    title: "CS50's Introduction to Computer Science",
    institution: 'Harvard University',
    year: '2025',
    link: asset('CS50x-cetified.pdf'),
  },
  {
    icon: '🌎',
    title: 'EF SET English Certificate 62/100 (C1 Advanced)',
    institution: 'EF SET',
    year: '2026',
    link: 'https://cert.efset.org/en/ZTsv7T',
  },
]

export default function Profile() {
  return (
    <main>
      <section id="sobre" className="containerSobre">
        <div className="perfilContent">
          <p className="position">DESENVOLVEDOR FULLSTACK</p>
          <h1>João Francisco</h1>
          <p className="perfil-resumo">
            <span>Java &amp; Spring Boot</span>
            <span className="dot">•</span>
            <span>React &amp; JavaScript</span>
            <span className="dot">•</span>
            <span>Dados &amp; IA</span>
          </p>
          <div className="perfil-biografia">
            <p>
              Estudante de Engenharia de Software na PUC Minas. Construo aplicações completas com Spring Boot e React, aliando uma base sólida de backend ao interesse contínuo por engenharia de dados e aplicações práticas com IA.
            </p>
          </div>
        </div>

        <div className="foto">
          <img src={asset('profile3-semfundo.webp')} alt="Foto de perfil de João Francisco" />
        </div>
      </section>

      <Projects />

      <Articles />

      <section id="certificados" className="certificados-section">
        <div className="certificados-hero">
          <div className="section-label">
            <span className="material-symbols-outlined" aria-hidden="true">workspace_premium</span>
            <p>Certificações</p>
          </div>
        </div>

        <div className="certificados-grid" aria-label="Lista de certificações">
          {certifications.map((cert) => (
            <article className="certificado-card" key={cert.title}>
              <div className="certificado-header">
                <div className="cert-icon" aria-hidden="true">{cert.icon}</div>
                <span className="ano">{cert.year}</span>
              </div>
              <div className="certificado-content">
                <h3>{cert.title}</h3>
                <p className="instituicao">{cert.institution}</p>
              </div>
              <div className="certificado-actions">
                <a
                  href={cert.link}
                  className="btn-action btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
                  <span>Verificar certificado</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
