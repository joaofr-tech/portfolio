interface Project {
  title: string
  tags: string[]
  impactDescription: string
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'EstágioBot AI — Agente Autônomo para Busca de Vagas',
    tags: ['Agentes de IA', 'Google Antigravity CLI', 'Node.js', 'React', 'PowerShell'],
    impactDescription:
      'Agente autônomo baseado no Google Antigravity CLI que realiza buscas contínuas por vagas de estágio em Engenharia de Software, Dados e Inteligência Artificial. Filtra automaticamente oportunidades compatíveis, alimenta um dashboard local minimalista com auditoria e métricas de varredura, e dispara notificações por e-mail em React sempre que novas vagas são encontradas.',
    githubUrl: 'https://github.com/joaofr-tech/estagio-bot-ai',
  },
  {
    title: 'Cloud Data Pipeline: Arquitetura Medalhão com Azure e Python',
    tags: ['Engenharia de Dados', 'Azure Blob Storage', 'Python', 'Pandas & Parquet', 'SQL'],
    impactDescription:
      'Pipeline de dados ponta a ponta implementando a Arquitetura Medalhão (Bronze, Silver e Gold). Extrai cotações cambiais em tempo real via API REST, armazena payloads brutos particionados no Azure Blob Storage, limpa e converte para Parquet colunar e ingere em banco SQL analítico com consultas para médias móveis e métricas de volatilidade.',
    githubUrl: 'https://github.com/joaofr-tech/cloud-data-pipeline-azure',
  },
  {
    title: 'Chat em Tempo Real: Mensageria Instantânea com Spring Boot & WebSocket',
    tags: ['Backend', 'Java', 'Spring Boot', 'WebSocket', 'STOMP & SockJS'],
    impactDescription:
      'Aplicação de mensagens instantâneas e bidirecionais de baixa latência construída em Java com Spring Boot. Implementa arquitetura pub/sub com protocolo STOMP, fallback com SockJS e broker interno de mensagens para roteamento entre salas de bate-papo.',
    githubUrl: 'https://github.com/joaofr-tech/chat-em-tempo-real',
  },
  {
    title: 'Pipeline ETL com Arquitetura Medalhão e Enriquecimento de Dados',
    tags: ['Engenharia de Dados', 'Python', 'PostgreSQL', 'Docker'],
    impactDescription:
      'Arquitetura em três camadas (Bronze, Silver e Gold) para processamento e enriquecimento de cadastros via API pública. Converte dados brutos para Parquet otimizado e popula banco PostgreSQL em Docker para análise relacional no DBeaver.',
    githubUrl: 'https://github.com/joaofr-tech/ETL-medalion-architecture',
  },
  {
    title: 'Album26 — Controle da Copa do Mundo 2026',
    tags: ['Frontend', 'PWA / Mobile', 'Vanilla JS', 'Cloudflare Workers'],
    impactDescription:
      'PWA mobile-first e offline para controle da coleção de figurinhas da Copa do Mundo 2026. Conta com registro por voz e ditado natural, conferência inteligente de listas do WhatsApp e persistência local segura (sem backend).',
    githubUrl: 'https://github.com/joaofr-tech/Album26',
    liveUrl: 'https://pwa-album-copa-sdd.jf756061.workers.dev',
  },
  {
    title: 'API CNAB File Reader: Processamento e Conciliação Financeira',
    tags: ['Backend', 'Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
    impactDescription:
      'Microsserviço de processamento em lote e conciliação bancária de arquivos textuais no padrão CNAB. Realiza upload, parsing posicional dos registros, normalização de dados financeiros e persistência relacional no PostgreSQL com endpoints REST de consulta.',
    githubUrl: 'https://github.com/joaofr-tech/api-cnab-file-reader',
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
          <article className="projeto-card" key={project.title}>
            <div className="projeto-content">
              <h2>{project.title}</h2>
              <div className="projeto-tags" aria-label="Tecnologias e especialidades">
                {project.tags.map((tag, index) => (
                  <span key={tag} className="tag-item">
                    {tag}
                    {index < project.tags.length - 1 && (
                      <span className="tag-separator" aria-hidden="true">•</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="projeto-descricao">{project.impactDescription}</p>
            </div>

            <div className="projeto-actions" aria-label="Ações do projeto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="btn-action btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
                  <span>Live Demo</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                className={`btn-action ${project.liveUrl ? 'btn-secondary' : 'btn-primary'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined" aria-hidden="true">code</span>
                <span>Código no GitHub</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </section>
  )
}
