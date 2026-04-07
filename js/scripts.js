function loadHeader() {
    const headerHTML = `
        <header>
            <a href="index.html" class="logo" aria-label="Ir para a página inicial">
                <div class="logo-3d-simple">J</div>
                <span>Francisco</span>
            </a>

            <nav class="navbar" aria-label="Navegação principal">
                <ul>
                    <li>
                        <a href="index.html" class="nav-link">
                            <span class="material-symbols-outlined" aria-hidden="true">home</span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="sobre.html" class="nav-link">
                            <span class="material-symbols-outlined" aria-hidden="true">person</span>
                            <span>Sobre</span>
                        </a>
                    </li>
                    <li>
                        <a href="projetos.html" class="nav-link">
                            <span class="material-symbols-outlined" aria-hidden="true">folder_open</span>
                            <span>Projetos</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

function loadFooter() {
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <p>© 2026 João Francisco. Todos os direitos reservados.</p>
                <div class="social-links">
                    <a href="https://github.com/joaofr-tech" target="_blank" rel="noopener noreferrer">
                        <span class="material-symbols-outlined" aria-hidden="true">code</span>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-francisco-ramos/" target="_blank" rel="noopener noreferrer">
                        <span class="material-symbols-outlined" aria-hidden="true">work</span>
                        LinkedIn
                    </a>
                    <a href="assets/CV.pdf" target="_blank" rel="noopener noreferrer">
                        <span class="material-symbols-outlined" aria-hidden="true">description</span>
                        Curriculo
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
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    marcarPaginaAtiva();
});
