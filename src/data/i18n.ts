import { asset } from '../paths'

export type Language = 'pt' | 'en'

export interface ProjectData {
  title: string
  tags: string[]
  description: string
  githubUrl: string
  liveUrl?: string
}

export interface ArticleData {
  slug: string
  title: string
  summary: string
  readTime: string
  date: string
  coverImage: string
  author: string
  topicLabel: string
}

export interface CertificationData {
  iconType: 'cs50' | 'efset' | 'claude'
  title: string
  institution: string
  year: string
  link: string
}

export interface ToolboxCategoryData {
  category: string
  skills: string[]
}

export const translations = {
  pt: {
    sidebar: {
      subtitle: 'engenharia de software & dados',
      status: 'Belo Horizonte',
      nav: [
        { id: 'sobre', number: '01', label: 'Sobre' },
        { id: 'projetos', number: '02', label: 'Projetos' },
        { id: 'ferramentas', number: '03', label: 'Ferramentas' },
        { id: 'artigos', number: '04', label: 'Artigos' },
        { id: 'certificados', number: '05', label: 'Certificações' },
      ],
      availability: 'aberto a projetos & estágio',
    },
    hero: {
      kicker: 'joão francisco / engenharia de software & dados',
      headline: 'Engenharia de software com foco em backend, dados e automação.',
      description:
        'Estudante de Engenharia de Software na PUC Minas. Construo serviços com Spring Boot e interfaces em JavaScript, com foco no fluxo de dados em pipelines e em automação com agentes.',
      featured: {
        kicker: 'destaque / agente autônomo',
        title: 'EstágioBot AI — Agente Autônomo para Busca de Vagas',
        description:
          'Agente construído com o Google Antigravity CLI para varrer vagas de estágio em tecnologia. Ele filtra oportunidades por requisitos técnicos, registra as métricas em um painel local e envia alertas por e-mail quando encontra novas posições.',
        tags: ['Agentes de IA', 'Google Antigravity CLI', 'Node.js', 'React', 'PowerShell'],
        repoBtn: 'Repositório no GitHub',
      },
    },
    about: {
      kicker: '01 / sobre',
      title: 'Minha trajetoria e interesses.',
      subtitle: '',
      p1: 'Curso Engenharia de Software na PUC Minas. No dia a dia, concentro meus estudos na criação de serviços em Java e Spring Boot com bancos relacionais, conectando essas APIs a interfaces diretas em JavaScript.',
      p2: 'Tenho grande interesse em Engenharia de Dados e em todo o ciclo de vida dos dados, desde extração até transformação com arquiteturas em camadas (Bronze, Silver e Gold) e disponibilização em bancos OLAP, além do uso prático de Agentes Autônomos de IA para resolver problemas do mundo real, como extração de dados e automação de rotinas.',
    },
    projects: {
      kicker: '02 / projetos',
      title: 'Projetos que construí e mantenho.',
      subtitle:
        'Código aberto no GitHub, com foco em fluxo de dados, APIs estruturadas e interfaces intuitivas.',
      liveBtn: 'Demonstração',
      codeBtn: 'Código',
      items: [
        {
          title: 'Cloud Data Pipeline: Arquitetura Medalhão com Azure e Python',
          tags: ['Engenharia de Dados', 'Azure Blob Storage', 'Python', 'Pandas & Parquet', 'SQL'],
          description:
            'Pipeline em três camadas (Bronze, Silver e Gold) que consome cotações cambiais de uma API REST. O sistema particiona os arquivos brutos no Azure Blob Storage, converte os dados limpos para Parquet e grava tabelas analíticas em SQL para cálculo de médias móveis e volatilidade.',
          githubUrl: 'https://github.com/joaofr-tech/cloud-data-pipeline-azure',
        },
        {
          title: 'Chat em Tempo Real: Mensageria Instantânea com Spring Boot & WebSocket',
          tags: ['Backend', 'Java', 'Spring Boot', 'WebSocket', 'STOMP & SockJS'],
          description:
            'Serviço de chat em Java com Spring Boot e WebSockets. Usa o protocolo STOMP sobre um broker em memória para rotear mensagens entre salas, com SockJS como fallback para garantir compatibilidade com navegadores.',
          githubUrl: 'https://github.com/joaofr-tech/chat-em-tempo-real',
        },
        {
          title: 'Pipeline ETL com Arquitetura Medalhão e Enriquecimento de Dados',
          tags: ['Engenharia de Dados', 'Python', 'PostgreSQL', 'Docker'],
          description:
            'Pipeline em Python que consulta uma API pública de cadastros, valida os dados e os organiza nas camadas Bronze, Silver e Gold. O resultado final é salvo em formato Parquet e carregado em um banco PostgreSQL rodando em Docker.',
          githubUrl: 'https://github.com/joaofr-tech/ETL-medalion-architecture',
        },
        {
          title: 'Album26 — Controle da Copa do Mundo 2026',
          tags: ['Frontend', 'PWA / Mobile', 'JavaScript', 'Cloudflare Workers'],
          description:
            'PWA offline para gerenciar figurinhas repetidas e faltantes da Copa do Mundo 2026. Permite marcar itens por voz, cruzar listas coladas do WhatsApp e guarda todos os dados localmente no navegador, sem depender de servidor.',
          githubUrl: 'https://github.com/joaofr-tech/Album26',
          liveUrl: 'https://pwa-album-copa-sdd.jf756061.workers.dev',
        },
        {
          title: 'API CNAB File Reader: Processamento e Conciliação Financeira',
          tags: ['Backend', 'Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
          description:
            'API em Spring Boot para importar e processar arquivos bancários CNAB em texto (.txt). Faz o parsing posicional das linhas, padroniza valores e datas, grava as transações no PostgreSQL e expõe endpoints para consulta e conciliação financeira.',
          githubUrl: 'https://github.com/joaofr-tech/api-cnab-file-reader',
        },
      ] as ProjectData[],
    },
    toolbox: {
      kicker: '03 / ferramentas',
      title: 'Tecnologias que fazem parte da minha rotina.',
      subtitle:
        'As tecnologias e ambientes que utilizo no dia a dia para desenvolver serviços, tratar dados e automatizar tarefas.',
      categories: [
        {
          category: 'Backend & Nuvem',
          skills: ['Java', 'Spring Boot', 'Python', 'Spring Security', 'Azure Blob Storage', 'PostgreSQL', 'APIs RESTful'],
        },
        {
          category: 'Engenharia de Dados',
          skills: ['Python', 'Pandas', 'Arquitetura Medalhão', 'Pipelines ETL', 'Apache Parquet', 'SQL Analítico', 'Modelagem de Dados'],
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
          category: 'DevOps & Ferramentas',
          skills: ['Docker', 'Git & GitHub', 'Cloudflare Pages / Workers', 'Linux / Bash', 'PowerShell'],
        },
      ] as ToolboxCategoryData[],
    },
    articles: {
      kicker: '04 / artigos',
      title: 'Como eu penso.',
      subtitle: 'Artigos sobre meus aprendizados, descobertas e reflexões.',
      items: [
        {
          slug: 'construindo-agente-ia-local-pydanticai-ollama',
          title: 'Construindo um Agente de IA 100% Local com PydanticAI e Ollama',
          summary:
            'Como configurar um agente autônomo no computador usando Ollama e PydanticAI, conectando chamadas de funções e prompts customizados sem enviar dados para a nuvem.',
          readTime: '3 min de leitura',
          date: 'Setembro de 2026',
          author: 'João Francisco',
          coverImage: asset('local-ai-agent-cover.jpg'),
          topicLabel: 'IA & Agentes Locais',
        },
        {
          slug: 'como-usar-claude-code-gratuitamente',
          title: 'Como eu uso o Claude Code gratuitamente?',
          summary:
            'Como usar o Claude Code no terminal conectando chaves do OpenRouter com modelos gratuitos, além de corrigir o problema de travamento por cache retido.',
          readTime: '3 min de leitura',
          date: 'Setembro de 2026',
          author: 'João Francisco',
          coverImage: asset('claude-code-cover.jpg'),
          topicLabel: 'Terminal & Produtividade',
        },
      ] as ArticleData[],
    },
    certifications: {
      kicker: '05 / certificações',
      title: 'Certificações e credenciais técnicas.',
      subtitle: 'Cursos e exames concluídos com links diretos para validação do certificado.',
      verifyBtn: 'Verificar',
      items: [
        {
          iconType: 'cs50',
          title: "CS50's Introduction to Computer Science",
          institution: 'Harvard University',
          year: '2025',
          link: asset('CS50x-cetified.pdf'),
        },
        {
          iconType: 'efset',
          title: 'EF SET English Certificate 62/100 (C1 Advanced)',
          institution: 'EF SET',
          year: '2026',
          link: 'https://cert.efset.org/en/ZTsv7T',
        },
        {
          iconType: 'claude',
          title: 'Claude Code 101',
          institution: 'Claude Academy',
          year: '2026',
          link: 'https://academy.claude.com/verify/0007973ade5f98e19de2707670fc0eaa',
        },
      ] as CertificationData[],
    },
    footer: {
      line1: 'João Francisco · Engenharia de Software & Dados',
      line2: 'Belo Horizonte · 2026',
    },
    articlePage: {
      backBtn: 'Voltar para o portfólio',
    },
  },
  en: {
    sidebar: {
      subtitle: 'software & data engineering',
      status: 'Belo Horizonte',
      nav: [
        { id: 'sobre', number: '01', label: 'About' },
        { id: 'projetos', number: '02', label: 'Projects' },
        { id: 'ferramentas', number: '03', label: 'Toolbox' },
        { id: 'artigos', number: '04', label: 'Articles' },
        { id: 'certificados', number: '05', label: 'Certifications' },
      ],
      availability: 'open to new projects & internships',
    },
    hero: {
      kicker: 'joão francisco / software engineering & data',
      headline: 'Software engineering focused on backend, data, and automation.',
      description:
        'Software Engineering student at PUC Minas. I build services with Spring Boot and interfaces in JavaScript, focusing on data pipelines and agent automation.',
      featured: {
        kicker: 'featured / autonomous agent',
        title: 'EstágioBot AI — Autonomous Agent for Job Hunting',
        description:
          'Agent built with Google Antigravity CLI to crawl tech internship openings. It filters opportunities by technical criteria, logs metrics to a local dashboard, and sends email alerts when new positions appear.',
        tags: ['AI Agents', 'Google Antigravity CLI', 'Node.js', 'React', 'PowerShell'],
        repoBtn: 'Repository on GitHub',
      },
    },
    about: {
      kicker: '01 / about',
      title: 'My background and interests.',
      subtitle: '',
      p1: 'I study Software Engineering at PUC Minas. Day to day, I focus on building services in Java and Spring Boot backed by relational databases, connecting those APIs to direct web interfaces in JavaScript.',
      p2: 'I have a strong interest in Data Engineering and the entire data lifecycle, from extraction to transformation with multi-layer architectures (Bronze, Silver, and Gold) and delivery to OLAP databases, alongside the practical use of Autonomous AI Agents for real-world automation.',
    },
    projects: {
      kicker: '02 / projects',
      title: 'Projects built and maintained.',
      subtitle:
        'Open-source on GitHub, focusing on data flows, structured APIs, and intuitive interfaces.',
      liveBtn: 'Live Demo',
      codeBtn: 'Code',
      items: [
        {
          title: 'Cloud Data Pipeline: Medallion Architecture with Azure & Python',
          tags: ['Data Engineering', 'Azure Blob Storage', 'Python', 'Pandas & Parquet', 'SQL'],
          description:
            'Three-tier pipeline (Bronze, Silver, and Gold) consuming currency exchange rates from a REST API. Partitions raw payloads into Azure Blob Storage, transforms clean records into columnar Parquet, and populates analytical SQL tables for moving averages and volatility.',
          githubUrl: 'https://github.com/joaofr-tech/cloud-data-pipeline-azure',
        },
        {
          title: 'Real-Time Chat: Instant Messaging with Spring Boot & WebSocket',
          tags: ['Backend', 'Java', 'Spring Boot', 'WebSocket', 'STOMP & SockJS'],
          description:
            'Chat service in Java with Spring Boot and WebSockets. Uses the STOMP protocol over an in-memory broker to route messages across rooms, featuring SockJS fallback for browser compatibility.',
          githubUrl: 'https://github.com/joaofr-tech/chat-em-tempo-real',
        },
        {
          title: 'ETL Pipeline with Medallion Architecture & Data Enrichment',
          tags: ['Data Engineering', 'Python', 'PostgreSQL', 'Docker'],
          description:
            'Python pipeline querying a public registry API, validating records, and structuring them across Bronze, Silver, and Gold tiers. Outputs Parquet files and loads a containerized PostgreSQL database on Docker.',
          githubUrl: 'https://github.com/joaofr-tech/ETL-medalion-architecture',
        },
        {
          title: 'Album26 — World Cup 2026 Sticker Tracker',
          tags: ['Frontend', 'PWA / Mobile', 'JavaScript', 'Cloudflare Workers'],
          description:
            'Offline PWA to track duplicate and missing stickers for the 2026 World Cup. Allows voice logging, WhatsApp list cross-referencing, and stores all data locally in the browser without depending on a server.',
          githubUrl: 'https://github.com/joaofr-tech/Album26',
          liveUrl: 'https://pwa-album-copa-sdd.jf756061.workers.dev',
        },
        {
          title: 'CNAB File Reader API: Financial Processing & Reconciliation',
          tags: ['Backend', 'Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
          description:
            'Spring Boot API to import and process banking CNAB text files (.txt). Performs positional line parsing, standardizes amounts and dates, saves transactions in PostgreSQL, and exposes REST endpoints for reconciliation.',
          githubUrl: 'https://github.com/joaofr-tech/api-cnab-file-reader',
        },
      ] as ProjectData[],
    },
    toolbox: {
      kicker: '03 / toolbox',
      title: 'Technologies that show up in the work.',
      subtitle:
        'The technologies and environments I use daily to build services, process data, and automate workflows.',
      categories: [
        {
          category: 'Backend & Cloud',
          skills: ['Java', 'Spring Boot', 'Python', 'Spring Security', 'Azure Blob Storage', 'PostgreSQL', 'RESTful APIs'],
        },
        {
          category: 'Data Engineering',
          skills: ['Python', 'Pandas', 'Medallion Architecture', 'ETL Pipelines', 'Apache Parquet', 'Analytical SQL', 'Data Modeling'],
        },
        {
          category: 'Frontend & Web',
          skills: ['React 19', 'TypeScript', 'JavaScript', 'Vite', 'HTML5 & Modern CSS', 'PWA / Mobile-First'],
        },
        {
          category: 'AI & Automation',
          skills: ['Google Antigravity CLI', 'Claude Code', 'Autonomous Agents', 'Prompt Engineering', 'Local LLMs (Qwen / Ollama)'],
        },
        {
          category: 'DevOps & Tooling',
          skills: ['Docker', 'Git & GitHub', 'Cloudflare Pages / Workers', 'Linux / Bash', 'PowerShell'],
        },
      ] as ToolboxCategoryData[],
    },
    articles: {
      kicker: '04 / articles',
      title: 'How I think.',
      subtitle: 'Articles about my learnings, discoveries, and technical notes.',
      items: [
        {
          slug: 'construindo-agente-ia-local-pydanticai-ollama',
          title: 'Building a 100% Local AI Agent with PydanticAI & Ollama',
          summary:
            'How to configure an autonomous agent locally using Ollama and PydanticAI, wiring function calls and custom prompts without sending data to the cloud.',
          readTime: '3 min read',
          date: 'September 2026',
          author: 'João Francisco',
          coverImage: asset('local-ai-agent-cover.jpg'),
          topicLabel: 'AI & Local Agents',
        },
        {
          slug: 'como-usar-claude-code-gratuitamente',
          title: 'How I use Claude Code for free?',
          summary:
            'How to use Claude Code in the terminal connecting OpenRouter keys with free models, along with fixing the retained-cache hang.',
          readTime: '3 min read',
          date: 'September 2026',
          author: 'João Francisco',
          coverImage: asset('claude-code-cover.jpg'),
          topicLabel: 'Terminal & Productivity',
        },
      ] as ArticleData[],
    },
    certifications: {
      kicker: '05 / certifications',
      title: 'Certifications & technical credentials.',
      subtitle: 'Completed courses and exams with direct verification links.',
      verifyBtn: 'Verify',
      items: [
        {
          iconType: 'cs50',
          title: "CS50's Introduction to Computer Science",
          institution: 'Harvard University',
          year: '2025',
          link: asset('CS50x-cetified.pdf'),
        },
        {
          iconType: 'efset',
          title: 'EF SET English Certificate 62/100 (C1 Advanced)',
          institution: 'EF SET',
          year: '2026',
          link: 'https://cert.efset.org/en/ZTsv7T',
        },
        {
          iconType: 'claude',
          title: 'Claude Code 101',
          institution: 'Claude Academy',
          year: '2026',
          link: 'https://academy.claude.com/verify/0007973ade5f98e19de2707670fc0eaa',
        },
      ] as CertificationData[],
    },
    footer: {
      line1: 'João Francisco · Software & Data Engineering',
      line2: 'Belo Horizonte · 2026',
    },
    articlePage: {
      backBtn: 'Back to portfolio',
    },
  },
}
