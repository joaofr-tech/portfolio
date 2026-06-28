function loadHeader() {
    const headerHTML = `
        <header>
            <a href="index.html" class="logo" aria-label="Ir para a página inicial" data-i18n-aria-label="logo_label">
                <div class="logo-3d-simple">J</div>
                <span>Francisco</span>
            </a>

            <nav class="navbar" aria-label="Navegação principal" data-i18n-aria-label="nav_label">
                <ul>
                    <li>
                        <a href="index.html" class="nav-link">
                            <span class="material-symbols-outlined" aria-hidden="true">home</span>
                            <span data-i18n="nav_home">Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="sobre.html" class="nav-link">
                            <span class="material-symbols-outlined" aria-hidden="true">person</span>
                            <span data-i18n="nav_about">Sobre</span>
                        </a>
                    </li>
                    <li>
                        <a href="projetos.html" class="nav-link">
                            <span class="material-symbols-outlined" aria-hidden="true">folder_open</span>
                            <span data-i18n="nav_projects">Projetos</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="header-actions">
                <button id="language-toggle" type="button" aria-label="Mudar idioma para inglês" title="Mudar idioma para inglês">EN</button>

                <button id="theme-toggle" type="button" aria-label="Alternar tema">
                    <span class="material-symbols-outlined" aria-hidden="true">dark_mode</span>
                </button>
            </div>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

function loadFooter() {
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <p data-i18n="footer_rights">© 2026 João Francisco. Todos os direitos reservados.</p>
                <div class="social-links">
                    <a href="https://github.com/joaofr-tech" target="_blank" rel="noopener noreferrer">
                        <span class="material-symbols-outlined" aria-hidden="true">code</span>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-francisco-ramos/" target="_blank" rel="noopener noreferrer">
                        <span class="material-symbols-outlined" aria-hidden="true">work</span>
                        LinkedIn
                    </a>
                    <a href="assets/joao_cv.pdf" target="_blank" rel="noopener noreferrer">
                        <span class="material-symbols-outlined" aria-hidden="true">description</span>
                        <span data-i18n="footer_cv">Currículo</span>
                    </a>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function marcarPaginaAtiva() {
    const links = document.querySelectorAll('.nav-link');
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === paginaAtual) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

function aplicarTemaSalvo() {
    const temaSalvo = localStorage.getItem('tema');
    const prefereDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (temaSalvo === 'dark' || (!temaSalvo && prefereDark)) {
        document.body.classList.add('darkmode');
    }
}

function atualizarBotaoTema() {
    const themeToggle = document.querySelector('#theme-toggle');
    const themeIcon = themeToggle?.querySelector('.material-symbols-outlined');
    const darkAtivo = document.body.classList.contains('darkmode');
    const idiomaAtual = localStorage.getItem('idioma') || 'pt';
    const dicionario = typeof translations !== 'undefined' ? translations[idiomaAtual] || translations.pt : null;

    if (!themeToggle || !themeIcon) {
        return;
    }

    themeIcon.textContent = darkAtivo ? 'light_mode' : 'dark_mode';
    themeToggle.setAttribute(
        'aria-label',
        dicionario ? dicionario[darkAtivo ? 'theme_light' : 'theme_dark'] : darkAtivo ? 'Ativar tema claro' : 'Ativar tema escuro'
    );
}

function configurarTema() {
    const themeToggle = document.querySelector('#theme-toggle');

    if (!themeToggle) {
        return;
    }

    atualizarBotaoTema();

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('darkmode');
        const temaAtual = document.body.classList.contains('darkmode') ? 'dark' : 'light';

        localStorage.setItem('tema', temaAtual);
        atualizarBotaoTema();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    aplicarTemaSalvo();
    loadHeader();
    loadFooter();
    marcarPaginaAtiva();
    configurarTema();
});
