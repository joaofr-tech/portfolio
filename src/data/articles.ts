import { asset } from '../paths'

export interface Article {
  slug: string
  title: string
  summary: string
  readTime: string
  date: string
  coverImage: string
  author: string
}

export const articles: Article[] = [
  {
    slug: 'construindo-agente-ia-local-pydanticai-ollama',
    title: 'Construindo um Agente de IA 100% Local com PydanticAI e Ollama',
    summary:
      'Guia prático para criar um agente autônomo rodando 100% localmente com Ollama e PydanticAI, integrando modelo, system prompt e ferramentas sem custos de API.',
    readTime: '3 min de leitura',
    date: 'Setembro de 2026',
    author: 'João Francisco',
    coverImage: asset('local-ai-agent-cover.jpg'),
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
  },
]
