const translations = {
    pt: {
        page_title_index: 'Início | João Francisco',
        page_title_sobre: 'Sobre | João Francisco',
        page_title_projetos: 'Projetos | João Francisco',
        logo_label: 'Ir para a página inicial',
        nav_label: 'Navegação principal',
        nav_home: 'Início',
        nav_about: 'Sobre',
        nav_projects: 'Projetos',
        theme_light: 'Ativar tema claro',
        theme_dark: 'Ativar tema escuro',
        language_toggle: 'Mudar idioma para inglês',
        footer_rights: '© 2026 João Francisco. Todos os direitos reservados.',
        footer_cv: 'Currículo',
        home_position: 'DESENVOLVEDOR & ESTUDANTE',
        home_intro: 'Foco em backend com Java e Spring Boot. Construção de projetos práticos e compartilhamento da jornada de aprendizado via posts no LinkedIn.',
        profile_alt: 'Foto de perfil de João Francisco',
        about_label: 'Sobre João Francisco',
        about_text: 'Olá! Eu sou o João Francisco Ramos Murilo. Comecei no mundo da tecnologia em 2025, atualmente estou cursando Engenharia de Software na PUC Minas (Coração Eucarístico).<br><br>Paralelamente à graduação, busco evolução contínua por meio de cursos e projetos práticos. Concluí formações como CS50\'s Introduction to Computer Science (Harvard), 100% em inglês.<br><br>Aplico esses conhecimentos em projetos práticos usando boas práticas de testes, documentação e integração com ferramentas de DevOps.',
        certifications_title: 'Certificações',
        verify_certificate: 'Verificar Certificado',
        projects_list_label: 'Lista de projetos',
        tech_list_label: 'Tecnologias utilizadas',
        project_status_done: 'Concluído',
        project_status_progress: 'Em andamento',
        view_repository: 'Ver repositório'
    },
    en: {
        page_title_index: 'Home | João Francisco',
        page_title_sobre: 'About | João Francisco',
        page_title_projetos: 'Projects | João Francisco',
        logo_label: 'Go to the home page',
        nav_label: 'Main navigation',
        nav_home: 'Home',
        nav_about: 'About',
        nav_projects: 'Projects',
        theme_light: 'Enable light theme',
        theme_dark: 'Enable dark theme',
        language_toggle: 'Change language to Portuguese',
        footer_rights: '© 2026 João Francisco. All rights reserved.',
        footer_cv: 'Resume',
        home_position: 'DEVELOPER & STUDENT',
        home_intro: 'Focused on backend development with Java and Spring Boot. Building practical projects and sharing my learning journey through LinkedIn posts.',
        profile_alt: 'Profile photo of João Francisco',
        about_label: 'About João Francisco',
        about_text: 'Hi! I am João Francisco Ramos Murilo. I started in technology in 2025 and I am currently studying Software Engineering at PUC Minas (Coração Eucarístico).<br><br>Alongside my degree, I keep growing through courses and practical projects. I completed programs such as CS50\'s Introduction to Computer Science (Harvard), fully in English.<br><br>I apply this knowledge in practical projects using good practices for testing, documentation, and integration with DevOps tools.',
        certifications_title: 'Certifications',
        verify_certificate: 'Verify Certificate',
        projects_list_label: 'Project list',
        tech_list_label: 'Technologies used',
        project_status_done: 'Completed',
        project_status_progress: 'In progress',
        view_repository: 'View repository'
    }
};

function normalizeLanguage(language) {
    if (language === 'us' || language === 'en-US') {
        return 'en';
    }

    return language;
}

function getSavedLanguage() {
    return normalizeLanguage(localStorage.getItem('idioma') || 'pt');
}

function getPageTitleKey() {
    const pageName = window.location.pathname.split('/').pop() || 'index.html';

    if (pageName.includes('sobre')) {
        return 'page_title_sobre';
    }

    if (pageName.includes('projetos')) {
        return 'page_title_projetos';
    }

    return 'page_title_index';
}

function translateElement(element, dictionary) {
    const textKey = element.dataset.i18n;
    const htmlKey = element.dataset.i18nHtml;
    const ariaKey = element.dataset.i18nAriaLabel;
    const altKey = element.dataset.i18nAlt;

    if (textKey && dictionary[textKey]) {
        element.textContent = dictionary[textKey];
    }

    if (htmlKey && dictionary[htmlKey]) {
        element.innerHTML = dictionary[htmlKey];
    }

    if (ariaKey && dictionary[ariaKey]) {
        element.setAttribute('aria-label', dictionary[ariaKey]);
    }

    if (altKey && dictionary[altKey]) {
        element.setAttribute('alt', dictionary[altKey]);
    }
}

function updateLanguageButton(language, dictionary) {
    const languageToggle = document.querySelector('#language-toggle');

    if (!languageToggle) {
        return;
    }

    languageToggle.textContent = language === 'pt' ? 'EN' : 'PT';
    languageToggle.setAttribute('aria-label', dictionary.language_toggle);
    languageToggle.setAttribute('title', dictionary.language_toggle);
}

function applyTranslations(language = getSavedLanguage()) {
    const normalizedLanguage = normalizeLanguage(language);
    const activeLanguage = translations[normalizedLanguage] ? normalizedLanguage : 'pt';
    const dictionary = translations[activeLanguage];

    document.documentElement.lang = activeLanguage === 'pt' ? 'pt-BR' : 'en-US';
    document.title = dictionary[getPageTitleKey()];

    document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-aria-label], [data-i18n-alt]').forEach((element) => {
        translateElement(element, dictionary);
    });

    document.querySelectorAll('[data-i18n-list-label]').forEach((element) => {
        const key = element.dataset.i18nListLabel;

        if (dictionary[key]) {
            element.setAttribute('aria-label', dictionary[key]);
        }
    });

    localStorage.setItem('idioma', activeLanguage);

    if (typeof renderProjects === 'function') {
        renderProjects(activeLanguage);
    }

    updateLanguageButton(activeLanguage, dictionary);

    if (typeof atualizarBotaoTema === 'function') {
        atualizarBotaoTema();
    }
}

function configureLanguageToggle() {
    const languageToggle = document.querySelector('#language-toggle');

    if (!languageToggle) {
        return;
    }

    languageToggle.addEventListener('click', () => {
        const nextLanguage = getSavedLanguage() === 'pt' ? 'en' : 'pt';
        applyTranslations(nextLanguage);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    configureLanguageToggle();
});
