interface Project {
  title: string
  description: string
  repository: string
  techs: string[]
}

const projects: Project[] = [
  {
    title: 'Master Sis',
    description: 'API para gerenciar alunos, planos, matrículas e faturamento de academias de artes marciais.',
    repository: 'https://github.com/joaofr-tech/mastersys-spring-api',
    techs: ['Java', 'Spring Boot', 'PostgreSQL', 'Validation', 'Flyway'],
  },
  {
    title: 'Pagamento Simplificado',
    description: 'Sistema de pagamentos entre usuários e lojistas, com validações transacionais e persistência de dados.',
    repository: 'https://github.com/joaofr-tech/pagamento-simplificado/tree/main',
    techs: ['Java', 'Spring Boot', 'H2'],
  },
  {
    title: 'Aplicação de Consulta de API Externa',
    description: 'API para consultar filmes gravados em San Francisco usando dados públicos do SF Open Data.',
    repository: 'https://github.com/joaofr-tech/SF-movies-api',
    techs: ['Java', 'Spring Boot', 'WebClient'],
  },
  {
    title: 'API Leitor de Arquivo CNAB',
    description: 'API para importar, processar e persistir transações financeiras extraídas de arquivos CNAB.',
    repository: 'https://github.com/joaofr-tech/api-cnab-file-reader',
    techs: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'Chat em Tempo Real',
    description: 'Chat em tempo real com conexão persistente e troca instantânea de mensagens via WebSocket.',
    repository: 'https://github.com/joaofr-tech/chat-em-tempo-real',
    techs: ['Java', 'Spring Boot', 'WebSocket', 'STOMP'],
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="containerProjetos">
      <div className="projetos-hero">
        <div className="section-label">
          <span className="material-symbols-outlined" aria-hidden="true">folder_open</span>
          <p>Projetos</p>
        </div>
      </div>

      <section className="projetos-grid" aria-label="Lista de projetos">
        {projects.map(project => (
          <article className="projeto-card" key={project.repository}>
            <div className="projeto-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>

            <div className="projeto-actions">
              <div className="tech-list" aria-label="Tecnologias utilizadas">
                {project.techs.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a href={project.repository} className="btn-repositorio" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined" aria-hidden="true">code</span>
                <span>Ver repositório</span>
                <span className="material-symbols-outlined link-arrow" aria-hidden="true">arrow_outward</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </section>
  )
}
