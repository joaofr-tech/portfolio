# Design Specification: Redesign Editorial (Estilo Gabriel Greco)

**Data:** 2026-10-30  
**Autor:** João Francisco / Antigravity  
**Status:** Aprovado  

---

## 1. Visão Geral

Reformulação completa do portfólio pessoal de João Francisco, adotando a arquitetura visual, navegação e estética editorial do site `gabrielgreco.com`, preservando integralmente todos os dados, projetos, artigos e certificações existentes no projeto `redesign-greco`.

## 2. Paleta de Cores e Tokens Visuais

O design adota uma estética exclusivamente clara em tom de papel quente com tipografia limpa e divisores sutis:

```css
:root {
  --paper: #f7f6f2;        /* Fundo principal da página */
  --paper-deep: #efeee8;   /* Fundo da barra lateral e blocos de destaque */
  --ink: #242420;          /* Tinta / Cor de texto principal */
  --muted: #716f68;        /* Texto secundário e descrições */
  --faint: #9a978f;        /* Numeração mono e metadados discretos */
  --line: #d9d7cf;         /* Bordas finas e divisórias */
  --line-dark: #b8b5ac;    /* Bordas em hover e acentos estruturais */
  --green: #2f6f4e;        /* Verde floresta para status dot e acentos sutis */
  --sidebar-w: 264px;      /* Largura da sidebar fixa */
}
```

### Tipografia
- **Títulos e Texto:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Kickers, Índices e Código:** `SFMono-Regular, Consolas, "Liberation Mono", monospace`

---

## 3. Arquitetura de Layout

### 3.1. Desktop (≥ 900px)
- **Barra Lateral Fixa (`.site-sidebar`):**
  - Largura de 264px, fixada à esquerda (`position: fixed; inset: 0 auto 0 0`).
  - Topo: Marca de identidade `[J]`, Nome `João Francisco`, subtítulo `Engenheiro de Software & Dados` e status dot pulsante verde com `Belo Horizonte`.
  - Navegação numerada:
    - `01 Sobre`
    - `02 Projetos`
    - `03 Toolbox`
    - `04 Artigos`
    - `05 Certificações`
    - `06 Contato`
  - Observer de rolagem: a classe `.active` acompanha a seção visível na viewport.
  - Rodapé da sidebar: disponibilidade (*"Aberto a novos projetos e estágio"*) e links de redes (GitHub, LinkedIn, E-mail).
- **Área Principal (`main`):**
  - `margin-left: 264px; width: calc(100% - 264px)`.
  - Container centrado (`.wrap` com `max-width: 900px; padding: 0 2rem; margin: 0 auto`).
  - Cada seção principal possui classe `.document-section` com divisor inferior `border-bottom: 1px solid var(--line)` e espaçamento vertical harmônico.

### 3.2. Mobile (< 900px)
- Barra superior compacta (`60px`) com a marca `[J]`, status e alternador de menu/scroll horizontal dos links.
- Área principal com `margin-left: 0; padding-top: 60px`.

---

## 4. Estrutura e Mapeamento de Conteúdo

### 4.1. Hero (`#hero`)
- `.hero-kicker.mono`: `joão francisco / software engineering & data`
- `h1`: *"Construo sistemas robustos, pipelines de dados e agentes autônomos."*
- Descrição: Estudante de Engenharia de Software na PUC Minas, fullstack com Spring Boot e React, apaixonado por engenharia de dados e soluções com IA prática.
- Card em destaque: **EstágioBot AI** — Agente autônomo baseado no Google Antigravity CLI com varreduras e notificações.

### 4.2. Seção 01: Sobre (`#sobre`)
- Cabeçalho padronizado: `01 / sobre` | *"Engenharia orientada a impacto e fundamentos sólidos."*
- Trajetória acadêmica na PUC Minas, foco técnico em sistemas distribuídos, backend em Java/Spring e front-end moderno com React.

### 4.3. Seção 02: Projetos (`#projetos`)
- Cabeçalho: `02 / projetos` | *"Aplicações, pipelines e ferramentas construídas."*
- Tabela editorial de projetos (`.project-table`):
  1. **EstágioBot AI** (Agente Autônomo com Antigravity CLI)
  2. **Cloud Data Pipeline** (Azure, Arquitetura Medalhão, Parquet, SQL)
  3. **Movie App TMDB** (React 19, Context API, TMDB)
  4. **Pipeline ETL Docker** (PostgreSQL, Docker, Python)
  5. **Album26** (PWA, Offline-first, Cloudflare Workers)
  6. **Habitus** (React, TypeScript, Gestão de hábitos)

### 4.4. Seção 03: Toolbox (`#toolbox`)
- Cabeçalho: `03 / toolbox` | *"Tecnologias que fazem parte da minha rotina."*
- Categorias divididas em linhas (`.skill-line`):
  - **Backend & Cloud:** Java, Spring Boot, Python, Azure Blob Storage, PostgreSQL
  - **Frontend:** React 19, TypeScript, Vite, CSS Moderno, PWA
  - **IA & Agentes:** Google Antigravity CLI, Claude Code, Agentes Autônomos, Prompt Engineering
  - **DevOps & Ferramentas:** Docker, Git, Cloudflare Pages/Workers, Linux, PowerShell

### 4.5. Seção 04: Artigos (`#artigos`)
- Cabeçalho: `04 / artigos` | *"Escrita técnica e guias práticos."*
- Lista editorial de artigos com data e tempo de leitura:
  - *Claude Code 101: Guia Prático para o Terminal Inteligente da Anthropic*
  - *Agente de IA Local com Qwen 2.5 Coder e Claude Code*
- Clique direciona para o leitor de artigo (`#/artigo/:slug`), preservando a sidebar e fornecendo botão de retorno à lista.

### 4.6. Seção 05: Certificações (`#certificados`)
- Cabeçalho: `05 / certificações` | *"Formação continuada e proficiência."*
- Linhas elegantes com instituição, ano e link de verificação:
  - **CS50's Introduction to Computer Science** — Harvard University (2025)
  - **EF SET English Certificate 62/100 (C1 Advanced)** — EF SET (2026)
  - **Claude Code 101** — Claude Academy (2026)

### 4.7. Seção 06: Contato & Rodapé (`#contato`)
- Cabeçalho: `06 / contato` | *"Vamos conversar sobre projetos, engenharia ou dados?"*
- Links diretos com e-mail clicável, GitHub e LinkedIn.
- Rodapé discreto: *"João Francisco · 2026"*.

---

## 5. Plano de Implementação

1. **CSS & Tokens:** Criar folha de estilo unificada `css/greco-theme.css` com todas as variáveis, tipografia, reset, utilitários, sidebar e seções editoriais responsivas.
2. **Componentes:**
   - `Sidebar.tsx`: Navegação lateral com marca, status de Belo Horizonte, links numerados e observer de rolagem.
   - `Hero.tsx`: Cabeçalho editorial e destaque de EstágioBot AI.
   - `About.tsx`: Seção 01 de trajetória.
   - `ProjectsTable.tsx`: Seção 02 com tabela e links diretos.
   - `Toolbox.tsx`: Seção 03 com linhas de tecnologias.
   - `ArticlesSection.tsx`: Seção 04 com os artigos existentes.
   - `CertificationsSection.tsx`: Seção 05 com as credenciais.
   - `ContactSection.tsx`: Seção 06 com links de contato e rodapé.
3. **Páginas & Roteamento:**
   - Integrar na página principal (`Profile.tsx` / `App.tsx`) o novo layout unificado.
   - Manter a visualização de artigo dedicada (`ArticlePage.tsx`) com o novo estilo de papel claro e botão de retorno limpo.
4. **Verificação & Testes:**
   - Executar compilação com `npm run check` (TypeScript).
   - Testar build com `npm run build` (Vite).
   - Testar no navegador local e validar visual.
