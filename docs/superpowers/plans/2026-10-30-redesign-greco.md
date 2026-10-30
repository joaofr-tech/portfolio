# Redesign Greco-Style Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform João Francisco's portfolio into the refined editorial design and layout of `gabrielgreco.com` (fixed left sidebar, warm paper aesthetic, numbered document sections, project table, toolbox lines), preserving 100% of João's existing data, projects, articles, and certifications.

**Architecture:** A fixed left sidebar (`264px` on desktop, sticky compact topbar on mobile) handles brand identity, status dot, and numbered section navigation (`01` to `06`). The main area (`margin-left: 264px`) renders editorial document sections with unified tokens (`--paper`, `--paper-deep`, `--ink`, `--line`, `--green`). Articles remain readable in-place while keeping the sidebar intact.

**Tech Stack:** React 19, TypeScript, Vite, Modern CSS (Native custom properties & responsive flex/grid), Material Symbols & SVG icons.

**Spec:** `docs/superpowers/specs/2026-10-30-redesign-greco-design.md`

## Global Constraints

- Exclusively light theme (`--paper: #f7f6f2`, `--ink: #242420`).
- Status in sidebar: Green pulsating dot + "Belo Horizonte" (without UTC).
- Preserve all existing data: João Francisco, PUC Minas, EstágioBot AI, 5 secondary projects, 2 articles, 3 certifications, social links.
- No regression in TypeScript checks (`npm run check`) and build (`npm run build`).

---

### Task 1: Editorial CSS Design System & Theme Styles

**Files:**
- Create: `css/greco.css`
- Modify: `src/main.tsx:1-14`
- Modify: `index.html:1-18`

**Interfaces:**
- Produces CSS classes: `:root` variables, `.site-layout`, `.site-sidebar`, `.main-content`, `.document-section`, `.section-header`, `.project-table`, `.project-row`, `.skills-index`, `.skill-line`, `.cert-row`, `.article-row`, `.status-dot`.

- [ ] **Step 1: Update `index.html` to import Inter and Mono fonts**
Add Inter font weights (400, 500, 600, 700) and JetBrains Mono / Space Grotesk / Fira Code if needed, alongside Material Symbols.

- [ ] **Step 2: Create `css/greco.css`**
Define root variables, reset, sidebar styles, layout grid, typography, section headers, tables, badges, animations (pulsing status dot), and mobile responsive breakpoints.

- [ ] **Step 3: Update `src/main.tsx`**
Replace outdated bento css imports with `import '../css/greco.css'`.

- [ ] **Step 4: Verify CSS compiles cleanly**
Run `npm run build` to confirm Vite processes the CSS without errors.

---

### Task 2: Fixed Sidebar Navigation Component

**Files:**
- Create: `src/components/Sidebar.tsx`
- Test: Verify links, active indicator, and mobile layout

**Interfaces:**
- Produces: `export function Sidebar({ activeSection }: { activeSection: string }): JSX.Element`
- Consumes: Nav click handlers to smooth scroll to `#hero`, `#sobre`, `#projetos`, `#toolbox`, `#artigos`, `#certificados`, `#contato`.

- [ ] **Step 1: Implement `src/components/Sidebar.tsx`**
Includes:
- Top: Identity mark `[J]`, João Francisco, title "Engenheiro de Software & Dados", status dot with "Belo Horizonte".
- Nav list: `01 Sobre`, `02 Projetos`, `03 Toolbox`, `04 Artigos`, `05 Certificações`, `06 Contato`.
- Bottom: Availability badge ("Disponível para estágio e projetos") + GitHub, LinkedIn, E-mail buttons.
- Mobile toggle / responsive header support.

- [ ] **Step 2: Verify component types with TypeScript**
Run `npm run check`.

---

### Task 3: Editorial Section Components & Project Table

**Files:**
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/AboutSection.tsx`
- Create: `src/components/ProjectsSection.tsx`
- Create: `src/components/ToolboxSection.tsx`
- Create: `src/components/ArticlesSection.tsx`
- Create: `src/components/CertificationsSection.tsx`
- Create: `src/components/ContactSection.tsx`

**Interfaces:**
- Consumes: Data from `src/data/articles.ts`, project lists, certification objects.
- Produces: Modular section components mapping to the numbered Greco document sections.

- [ ] **Step 1: Create `src/components/HeroSection.tsx`**
Kicker mono `joão francisco / software engineering & data`, strong headline, brief bio, and a featured highlight card for **EstágioBot AI** with its tags, summary, and GitHub link.

- [ ] **Step 2: Create `src/components/AboutSection.tsx`**
Section `01 / sobre` detailing software engineering at PUC Minas, technical focus, and solid backend + data foundations.

- [ ] **Step 3: Create `src/components/ProjectsSection.tsx`**
Section `02 / projetos` displaying the project table with rows for all 6 projects (EstágioBot, Cloud Data Pipeline Azure, Movie App TMDB, Pipeline ETL Docker, Album26, Habitus), showing name, tags, description, GitHub, and Live Demo links.

- [ ] **Step 4: Create `src/components/ToolboxSection.tsx`**
Section `03 / toolbox` displaying categorized technical skills in clean rows:
- Backend & Cloud (Java, Spring Boot, Python, Azure, PostgreSQL)
- Frontend (React 19, TypeScript, Vite, CSS moderno, PWA)
- IA & Agentes (Google Antigravity CLI, Claude Code, Agentes Autônomos)
- DevOps & Infra (Docker, Git, Cloudflare Pages/Workers, Linux)

- [ ] **Step 5: Create `src/components/ArticlesSection.tsx`**
Section `04 / artigos` showing João's articles with date, read time, description, and link to view article in-place.

- [ ] **Step 6: Create `src/components/CertificationsSection.tsx`**
Section `05 / certificações` showing Harvard CS50, EF SET C1, and Claude Academy with institution, year, and verification button.

- [ ] **Step 7: Create `src/components/ContactSection.tsx`**
Section `06 / contato` with email `mailto:`, LinkedIn, GitHub, and editorial footer note.

- [ ] **Step 8: Verify build & typecheck**
Run `npm run check`.

---

### Task 4: Layout Integration & Article Page Styling

**Files:**
- Modify: `src/pages/Profile.tsx`
- Modify: `src/pages/ArticlePage.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: All section components from Task 3, `Sidebar` from Task 2.
- Handles: URL hash navigation (`#/artigo/:slug` vs home sections `#sobre`, `#projetos`, etc.), active section tracking with `IntersectionObserver`.

- [ ] **Step 1: Refactor `src/pages/Profile.tsx`**
Assemble the sections into the editorial layout wrapped in `<main className="main-content">`. Set up `IntersectionObserver` to track active section.

- [ ] **Step 2: Update `src/pages/ArticlePage.tsx`**
Align the article reader with the Greco paper styling (`--paper`, clean typography, readable line length, back button to return to `#artigos`).

- [ ] **Step 3: Update `src/App.tsx`**
Wire the `Sidebar` and the main content seamlessly, ensuring reading an article preserves the sidebar and smooth navigation.

- [ ] **Step 4: Verify integration with TypeScript**
Run `npm run check`.

---

### Task 5: End-to-End Verification & Final Polish

**Files:**
- Verify all modified files
- Commit changes

- [ ] **Step 1: Run TypeScript check**
`npm run check`

- [ ] **Step 2: Run Vite build**
`npm run build`

- [ ] **Step 3: Preview and verify UI**
Inspect the rendered build / dev server output to verify layout responsiveness, smooth scrolling, active states, and full data fidelity.

- [ ] **Step 4: Commit all changes**
Git commit with clear descriptive message.
