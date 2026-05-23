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
        view_repository: 'Ver repositório',
        sf_title: 'Aplicação de Consulta de API Externa',
        sf_description: 'API em Java com Spring Boot para consultar filmes gravados em San Francisco, consumindo dados públicos do portal SF Open Data.',
        sf_goal: 'Projeto criado para praticar consumo de API externa, criação de endpoints REST e organização de uma aplicação Spring Boot.',
        sf_detail_data: 'Consumo de dados públicos da DataSF',
        sf_detail_locations: 'Consulta de locais de filmagem',
        sf_detail_search: 'Filtro por título e autocomplete',
        cnab_title: 'API Leitor de Arquivo CNAB',
        cnab_description: 'Importação, processamento e persistência de transações financeiras a partir de arquivos CNAB, com foco em organização de camadas e integração com banco de dados.',
        cnab_goal: 'Projeto criado para praticar manipulação de arquivos, separação de responsabilidades, persistência e integração com banco de dados.',
        cnab_detail_file: 'Leitura e validação de arquivo texto',
        cnab_detail_database: 'Persistência em PostgreSQL',
        cnab_detail_structure: 'Estrutura com Spring Boot',
        chat_title: 'Chat em Tempo Real',
        chat_description: 'Implementação de um chat em tempo real com Spring Boot e WebSocket, permitindo troca instantânea de mensagens entre clientes por meio de uma conexão persistente.',
        chat_goal: 'Projeto criado para entender comunicação em tempo real, fluxo de mensagens e integração com WebSocket no ecossistema Spring.',
        chat_detail_socket: 'Comunicação bidirecional com WebSocket',
        chat_detail_stomp: 'Mensageria organizada com STOMP',
        chat_detail_sockjs: 'Fallback de conexão com SockJS'
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
        view_repository: 'View repository',
        sf_title: 'External API Query Application',
        sf_description: 'Java and Spring Boot API for searching movies filmed in San Francisco, consuming public data from the SF Open Data portal.',
        sf_goal: 'Project created to practice external API consumption, REST endpoint creation, and Spring Boot application organization.',
        sf_detail_data: 'Public DataSF data consumption',
        sf_detail_locations: 'Filming location queries',
        sf_detail_search: 'Title filter and autocomplete',
        cnab_title: 'CNAB File Reader API',
        cnab_description: 'Import, processing, and persistence of financial transactions from CNAB files, focused on layered organization and database integration.',
        cnab_goal: 'Project created to practice file handling, responsibility separation, persistence, and database integration.',
        cnab_detail_file: 'Text file reading and validation',
        cnab_detail_database: 'PostgreSQL persistence',
        cnab_detail_structure: 'Spring Boot structure',
        chat_title: 'Real-Time Chat',
        chat_description: 'Real-time chat implementation with Spring Boot and WebSocket, allowing instant message exchange between clients through a persistent connection.',
        chat_goal: 'Project created to understand real-time communication, message flow, and WebSocket integration in the Spring ecosystem.',
        chat_detail_socket: 'Bidirectional communication with WebSocket',
        chat_detail_stomp: 'Messaging organized with STOMP',
        chat_detail_sockjs: 'Connection fallback with SockJS'
    }
};

function getSavedLanguage() {
    return localStorage.getItem('idioma') || 'pt';
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
    const activeLanguage = translations[language] ? language : 'pt';
    const dictionary = translations[activeLanguage];

    document.documentElement.lang = activeLanguage === 'pt' ? 'pt-BR' : 'en';
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
