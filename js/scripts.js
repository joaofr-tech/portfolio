function loadHeader() {
    const headerHTML = `
        <header>
            <div class="logo">
                <a href="inicio.html" class="logo">
                    <div class="logo-3d-simple">J</div>
                    <span>Francisco</span>
                </a>
            </div>

            <nav class="navbar">
                <ul>
                    <li>
                        <a href="inicio.html" class="nav-link">
                            <span class="material-symbols-outlined">home</span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="sobre.html" class="nav-link">
                            <span class="material-symbols-outlined">person</span>
                            <span>Sobre</span>
                        </a>
                    </li>
                    <li>
                        <a href="projetos.html" class="nav-link">
                            <span class="material-symbols-outlined">folder_open</span>
                            <span>Projetos</span>
                        </a>
                    </li>
                    <li>
                        <a href="posts.html" class="nav-link">
                            <span class="material-symbols-outlined">article</span>
                            <span>Posts</span>
                        </a>
                    </li>
                    <li>
                        <button id="theme-toggle">Modo Escuro</button>
                    </li>
                </ul>
            </nav>
        </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    marcarPaginaAtiva();
}

function loadFooter() {
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <p>© 2026 João Francisco. Todos os direitos reservados.</p>
                <div class="social-links">
                    <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                        <span class="material-symbols-outlined">code</span>
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                        <span class="material-symbols-outlined">work</span>
                        LinkedIn
                    </a>
                    <a href="assets/curriculo.pdf" download>
                        <span class="material-symbols-outlined">description</span>
                        Currículo
                    </a>
                </div>
            </div>
        </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function marcarPaginaAtiva() {
    const links = document.querySelectorAll('nav a');
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === paginaAtual) {
            link.classList.add('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {

    const currentLocation = window.location.pathname;

    const menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(link => {

      const linkPath = link.getAttribute('href');

      if (linkPath === currentLocation || (currentLocation === '/' && linkPath === '/')) {
        link.classList.add('active');
      }

    });
});

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    marcarPaginaAtiva();
});
