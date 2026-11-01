import { asset } from '../paths'

export interface Article {
  slug: string
  title: string
  summary: string
  readTime: string
  date: string
  coverImage: string
  author: string
  topic?: string
  topicLabel?: string
}

export const articles: Article[] = [
  {
    slug: 'construi-um-agente-que-busca-vagas-diariamente',
    title: 'Construí um agente que busca vagas para mim diariamente',
    summary:
      'Como transformei uma busca manual e exaustiva por estágio em um agente autônomo com suíte de testes, inicialização via SO, observabilidade e métricas de candidatura.',
    readTime: '4 min de leitura',
    date: 'Outubro de 2026',
    author: 'João Francisco',
    coverImage: asset('job-search-agent-cover.jpg'),
    topic: 'agentes',
    topicLabel: 'Agentes & Automação',
  },
  {
    slug: 'construindo-agente-ia-local-pydanticai-ollama',
    title: 'Construindo um Agente de IA 100% Local com PydanticAI e Ollama',
    summary:
      'Guia prático para criar um agente autônomo rodando 100% localmente com Ollama e PydanticAI, integrando modelo, system prompt e ferramentas sem custos de API.',
    readTime: '3 min de leitura',
    date: 'Setembro de 2026',
    author: 'João Francisco',
    coverImage: asset('local-ai-agent-cover.jpg'),
    topic: 'ia',
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
    topic: 'ferramentas',
    topicLabel: 'Terminal & Produtividade',
  },
]
