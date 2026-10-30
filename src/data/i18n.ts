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
      headline: 'Construo sistemas robustos, pipelines de dados e agentes autônomos.',
      description:
        'Estudante de Engenharia de Software na PUC Minas. Desenvolvo aplicações completas com Spring Boot e React, aliando uma base sólida de backend e infraestrutura a pipelines analíticos de dados e agentes inteligentes.',
      featured: {
        kicker: 'destaque / agente autônomo',
        title: 'EstágioBot AI — Agente Autônomo para Busca de Vagas',
        description:
          'Agente autônomo baseado no Google Antigravity CLI que realiza buscas contínuas por vagas de estágio em Engenharia de Software, Dados e Inteligência Artificial. Filtra automaticamente oportunidades compatíveis com o turno matutino, alimenta um dashboard local minimalista com auditoria de métricas e dispara alertas por e-mail.',
        tags: ['Agentes de IA', 'Google Antigravity CLI', 'Node.js', 'React', 'PowerShell'],
        repoBtn: 'Repositório no GitHub',
      },
    },
    about: {
      kicker: '01 / sobre',
      title: 'Fundamentos sólidos e engenharia orientada a impacto.',
      subtitle:
        'Da concepção de modelos relacionais e pipelines de dados ao desenvolvimento de interfaces limpas e agentes autônomos.',
      p1: 'Sou estudante de Engenharia de Software na Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Minha formação e estudos são direcionados para a construção de arquiteturas completas e confiáveis, integrando backend robusto em Java & Spring Boot a aplicações modernas em React.',
      p2: 'Tenho grande interesse em Engenharia de Dados com processamento batch/streaming, arquiteturas em camadas (Bronze, Silver e Gold) e formatos colunares como Parquet, além do uso prático de Agentes Autônomos de IA para resolver problemas do mundo real, como extração de dados e automação de rotinas.',
    },
    projects: {
      kicker: '02 / projetos',
      title: 'Aplicações, pipelines e ferramentas construídas.',
      subtitle:
        'Soluções completas com ênfase em arquitetura limpa, processamento eficiente de dados e código aberto no GitHub.',
      liveBtn: 'Demonstração',
      codeBtn: 'Código',
      items: [
        {
          title: 'Cloud Data Pipeline: Arquitetura Medalhão com Azure e Python',
          tags: ['Engenharia de Dados', 'Azure Blob Storage', 'Python', 'Pandas & Parquet', 'SQL'],
          description:
            'Pipeline de dados ponta a ponta implementando a Arquitetura Medalhão (Bronze, Silver e Gold). Extrai cotações cambiais em tempo real via API REST, armazena payloads brutos particionados no Azure Blob Storage, limpa e converte para Parquet colunar e ingere em banco SQL analítico com consultas para médias móveis e métricas de volatilidade.',
          githubUrl: 'https://github.com/joaofr-tech/cloud-data-pipeline-azure',
        },
        {
          title: 'Movie App — Catálogo e Busca de Filmes com TMDB',
          tags: ['Frontend', 'React 19', 'Vite', 'TMDB API', 'Context API'],
          description:
            'Aplicação web moderna e responsiva para exploração e busca de filmes em tempo real integrada à API TMDB. Conta com gerenciamento de estado global, persistência de favoritos no localStorage com feedback visual e interface adaptada para múltiplos dispositivos.',
          githubUrl: 'https://github.com/joaofr-tech/movie-react-app',
        },
        {
          title: 'Pipeline ETL com Arquitetura Medalhão e Enriquecimento de Dados',
          tags: ['Engenharia de Dados', 'Python', 'PostgreSQL', 'Docker'],
          description:
            'Arquitetura em três camadas (Bronze, Silver e Gold) para processamento e enriquecimento de cadastros via API pública. Converte dados brutos para Parquet otimizado e popula banco PostgreSQL em Docker para análise relacional no DBeaver.',
          githubUrl: 'https://github.com/joaofr-tech/ETL-medalion-architecture',
        },
        {
          title: 'Album26 — Controle da Copa do Mundo 2026',
          tags: ['Frontend', 'PWA / Mobile', 'JavaScript', 'Cloudflare Workers'],
          description:
            'PWA mobile-first e offline para controle da coleção de figurinhas da Copa do Mundo 2026. Conta com registro por voz e ditado natural, conferência inteligente de listas do WhatsApp e persistência local segura (sem backend).',
          githubUrl: 'https://github.com/joaofr-tech/Album26',
          liveUrl: 'https://pwa-album-copa-sdd.jf756061.workers.dev',
        },
        {
          title: 'Habitus — Consolidação de Hábitos e Metas',
          tags: ['Frontend', 'React', 'TypeScript', 'Cloudflare Pages'],
          description:
            'Aplicação web minimalista para calcular e acompanhar a consistência de hábitos e metas pessoais. Permite registros por oportunidade, métricas de adesão e persistência 100% local via localStorage.',
          githubUrl: 'https://github.com/joaofr-tech/kpi-habits',
          liveUrl: 'https://kpi-habits.jf756061.workers.dev/',
        },
      ] as ProjectData[],
    },
    toolbox: {
      kicker: '03 / ferramentas',
      title: 'Tecnologias que fazem parte da minha rotina.',
      subtitle:
        'Sem bingo de logos. Uma visão direta das ferramentas, linguagens e plataformas que utilizo para projetar e construir software.',
      categories: [
        {
          category: 'Backend & Nuvem',
          skills: ['Java', 'Spring Boot', 'Spring Security', 'Python', 'Azure Blob Storage', 'PostgreSQL', 'APIs RESTful'],
        },
        {
          category: 'Engenharia de Dados',
          skills: ['Arquitetura Medalhão', 'Pipelines ETL', 'Apache Parquet', 'Pandas', 'SQL Analítico', 'Modelagem de Dados'],
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
            'Guia prático para criar um agente autônomo rodando 100% localmente com Ollama e PydanticAI, integrando modelo, system prompt e ferramentas sem custos de API.',
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
            'Passo a passo prático para configurar o Claude Code sem custos utilizando o Free Claude Code e OpenRouter, com solução definitiva para o erro de cache retido.',
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
      title: 'Formação continuada e proficiência comprovada.',
      subtitle: 'Certificações técnicas e acadêmicas com links diretos de emissão e credenciamento.',
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
      headline: 'I build robust systems, data pipelines, and autonomous agents.',
      description:
        'Software Engineering student at PUC Minas. I develop end-to-end applications with Spring Boot and React, pairing solid backend fundamentals and infrastructure with analytical data pipelines and intelligent agents.',
      featured: {
        kicker: 'featured / autonomous agent',
        title: 'EstágioBot AI — Autonomous Agent for Job Hunting',
        description:
          'Autonomous agent powered by Google Antigravity CLI that continuously tracks software engineering, data, and AI internship openings. Automatically filters opportunities compatible with morning study schedules, feeds a minimalist local dashboard with audit metrics, and dispatches email alerts.',
        tags: ['AI Agents', 'Google Antigravity CLI', 'Node.js', 'React', 'PowerShell'],
        repoBtn: 'Repository on GitHub',
      },
    },
    about: {
      kicker: '01 / about',
      title: 'Solid fundamentals and impact-driven engineering.',
      subtitle:
        'From relational data models and data pipelines to clean interfaces and autonomous agents.',
      p1: 'I am a Software Engineering student at Pontifícia Universidade Católica de Minas Gerais (PUC Minas). My background and studies focus on building reliable, complete architectures, combining robust backends in Java & Spring Boot with modern frontends in React.',
      p2: 'I have a strong interest in Data Engineering with batch/streaming processing, multi-layer architectures (Bronze, Silver, and Gold), and columnar formats like Parquet, alongside the practical use of Autonomous AI Agents for real-world automation.',
    },
    projects: {
      kicker: '02 / projects',
      title: 'Applications, pipelines, and tools built for production.',
      subtitle:
        'End-to-end solutions emphasizing clean architecture, efficient data processing, and open-source code on GitHub.',
      liveBtn: 'Live Demo',
      codeBtn: 'Code',
      items: [
        {
          title: 'Cloud Data Pipeline: Medallion Architecture with Azure & Python',
          tags: ['Data Engineering', 'Azure Blob Storage', 'Python', 'Pandas & Parquet', 'SQL'],
          description:
            'End-to-end data pipeline implementing the Medallion Architecture (Bronze, Silver, and Gold). Extracts real-time exchange rates via REST API, stores raw partitioned payloads in Azure Blob Storage, cleans and converts to columnar Parquet, and ingests into an analytical SQL database with queries for moving averages and volatility metrics.',
          githubUrl: 'https://github.com/joaofr-tech/cloud-data-pipeline-azure',
        },
        {
          title: 'Movie App — Film Catalog & Search with TMDB',
          tags: ['Frontend', 'React 19', 'Vite', 'TMDB API', 'Context API'],
          description:
            'Modern, responsive web application for real-time movie exploration and search integrated with the TMDB API. Features global state management, bookmark persistence in localStorage with visual feedback, and interface adapted for multiple devices.',
          githubUrl: 'https://github.com/joaofr-tech/movie-react-app',
        },
        {
          title: 'ETL Pipeline with Medallion Architecture & Data Enrichment',
          tags: ['Data Engineering', 'Python', 'PostgreSQL', 'Docker'],
          description:
            'Three-tier architecture (Bronze, Silver, and Gold) for processing and enriching records via public API. Converts raw data into optimized Parquet and populates a PostgreSQL database running on Docker for relational analytics.',
          githubUrl: 'https://github.com/joaofr-tech/ETL-medalion-architecture',
        },
        {
          title: 'Album26 — World Cup 2026 Sticker Tracker',
          tags: ['Frontend', 'PWA / Mobile', 'JavaScript', 'Cloudflare Workers'],
          description:
            'Mobile-first offline PWA to manage sticker collections for World Cup 2026. Features voice input, intelligent WhatsApp list cross-checking, and secure local persistence with zero backend dependency.',
          githubUrl: 'https://github.com/joaofr-tech/Album26',
          liveUrl: 'https://pwa-album-copa-sdd.jf756061.workers.dev',
        },
        {
          title: 'Habitus — Consistency & Habit Tracking',
          tags: ['Frontend', 'React', 'TypeScript', 'Cloudflare Pages'],
          description:
            'Minimalist web application to calculate and track personal habit consistency and goals. Allows per-opportunity logs, adherence metrics, and 100% client-side persistence via localStorage.',
          githubUrl: 'https://github.com/joaofr-tech/kpi-habits',
          liveUrl: 'https://kpi-habits.jf756061.workers.dev/',
        },
      ] as ProjectData[],
    },
    toolbox: {
      kicker: '03 / toolbox',
      title: 'Technologies that show up in the work.',
      subtitle:
        'Not logo bingo. Just a direct overview of the tools, languages, and platforms I use to design and build software.',
      categories: [
        {
          category: 'Backend & Cloud',
          skills: ['Java', 'Spring Boot', 'Spring Security', 'Python', 'Azure Blob Storage', 'PostgreSQL', 'RESTful APIs'],
        },
        {
          category: 'Data Engineering',
          skills: ['Medallion Architecture', 'ETL Pipelines', 'Apache Parquet', 'Pandas', 'Analytical SQL', 'Data Modeling'],
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
            'Practical guide to building an autonomous agent running entirely locally with Ollama and PydanticAI, integrating system prompt, model, and custom tools with zero API costs.',
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
            'Step-by-step walkthrough to set up Claude Code without subscription costs using Free Claude Code and OpenRouter, with a permanent fix for retained cache errors.',
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
      title: 'Continuous learning and verified proficiency.',
      subtitle: 'Technical and academic credentials with direct verification links.',
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
