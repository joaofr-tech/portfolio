import { asset } from '../paths'
import Projects from './Projects'

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
          <p className="position">DESENVOLVEDOR FULLSTACK &amp; ESTUDANTE DE ENGENHARIA DE SOFTWARE</p>
          <h1>João Francisco</h1>
          <p className="perfil-resumo">
            Java e SpringBoot, JavaScript e React
          </p>
          <div className="perfil-biografia">
            <p>
              Comecei no mundo da tecnologia em 2025, atualmente estou cursando Engenharia de Software na PUC Minas (Coração Eucarístico). Busco sempre melhorar por meio de cursos e projetos práticos.
            </p>
          </div>
        </div>

        <div className="foto">
          <img src={asset('profile3-semfundo.webp')} alt="Foto de perfil de João Francisco" />
        </div>
      </section>

      <section id="certificados" className="certificados-section">
        <h2>Certificações</h2>
        <div className="certificados-grid">
          {certifications.map((cert) => (
            <div className="certificado-card" key={cert.title}>
              <div className="cert-icon" aria-hidden="true">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p className="instituicao">{cert.institution}</p>
              <p className="ano">{cert.year}</p>
              <a href={cert.link} className="btn-verificar" target="_blank" rel="noopener noreferrer">
                Verificar certificado
              </a>
            </div>
          ))}
        </div>
      </section>

      <Projects />
    </main>
  )
}
