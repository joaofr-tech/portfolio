interface ToolboxCategory {
  category: string
  skills: string[]
}

const toolboxData: ToolboxCategory[] = [
  {
    category: 'Backend & Cloud',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Python', 'Azure Blob Storage', 'PostgreSQL', 'RESTful APIs'],
  },
  {
    category: 'Engenharia de Dados',
    skills: ['Arquitetura Medalhão', 'ETL Pipelines', 'Apache Parquet', 'Pandas', 'SQL Analítico', 'Data Modeling'],
  },
  {
    category: 'Frontend & Web',
    skills: ['React 19', 'TypeScript', 'JavaScript', 'Vite', 'HTML5 & CSS Moderno', 'PWA / Mobile-First'],
  },
  {
    category: 'IA & Automação',
    skills: ['Google Antigravity CLI', 'Claude Code', 'Agentes Autônomos', 'Engenharia de Prompt', 'LLMs Locais (Qwen / Ollama)'],
  },
  {
    category: 'DevOps & Tooling',
    skills: ['Docker', 'Git & GitHub', 'Cloudflare Pages / Workers', 'Linux / Bash', 'PowerShell'],
  },
]

export function ToolboxSection() {
  return (
    <section id="toolbox" className="document-section">
      <div className="wrap">
        <header className="section-header">
          <p className="mono">03 / toolbox</p>
          <h2>Tecnologias que fazem parte da minha rotina.</h2>
          <p className="section-intro">
            Sem bingo de logos. Uma visão direta das ferramentas, linguagens e plataformas que utilizo para projetar e construir software.
          </p>
        </header>

        <div className="skills-index">
          {toolboxData.map((group) => (
            <div key={group.category} className="skill-line">
              <span className="skill-category">{group.category}</span>
              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
