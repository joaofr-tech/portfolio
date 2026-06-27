function getProjectLanguage(language) {
    if (language === 'us' || language === 'en-US') {
        return 'en';
    }

    return language === 'en' ? 'en' : 'pt';
}

function getProjectDictionary(language) {
    if (typeof translations === 'undefined') {
        return {};
    }

    return translations[getProjectLanguage(language)] || translations.pt || {};
}

function createElement(tagName, className, textContent) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (textContent) {
        element.textContent = textContent;
    }

    return element;
}

function getProjectText(project, language) {
    const activeLanguage = getProjectLanguage(language);

    return project.content[activeLanguage] || project.content.pt;
}

function createProjectHeader(project, dictionary) {
    const header = createElement('div', 'projeto-card-header');
    const typeWrapper = createElement('div', 'projeto-meta-item');
    const statusWrapper = createElement('div', 'projeto-meta-item projeto-meta-status');
    const type = createElement('span', 'projeto-tipo', project.type);
    const statusClass = project.status === 'progress'
        ? 'projeto-status projeto-status--progress'
        : 'projeto-status';
    const statusKey = project.status === 'progress' ? 'project_status_progress' : 'project_status_done';
    const status = createElement('span', statusClass, dictionary[statusKey] || project.status);

    typeWrapper.appendChild(type);
    statusWrapper.appendChild(status);
    header.append(typeWrapper, statusWrapper);

    return header;
}

function createProjectContent(project, language) {
    const text = getProjectText(project, language);
    const content = createElement('div', 'projeto-content');
    const title = createElement('h2', '', text.title);
    const description = createElement('p', '', text.description);
    const goal = createElement('p', 'projeto-intencao', text.goal);

    content.append(title, description, goal);

    return content;
}

function createProjectFooter(project, dictionary) {
    const footer = createElement('div', 'projeto-footer');
    const techList = createElement('div', 'tech-list');
    const repositoryLink = createElement('a', 'btn-repositorio');
    const icon = createElement('span', 'material-symbols-outlined', 'code');
    const label = createElement('span', '', dictionary.view_repository || 'Ver repositório');

    techList.setAttribute('aria-label', dictionary.tech_list_label || 'Tecnologias utilizadas');

    project.techs.forEach((tech) => {
        techList.appendChild(createElement('span', '', tech));
    });

    repositoryLink.href = project.repository;
    repositoryLink.target = '_blank';
    repositoryLink.rel = 'noopener noreferrer';
    icon.setAttribute('aria-hidden', 'true');
    repositoryLink.append(icon, label);
    footer.append(techList, repositoryLink);

    return footer;
}

function createProjectCard(project, language, dictionary) {
    const card = createElement('article', 'projeto-card');

    card.append(
        createProjectHeader(project, dictionary),
        createProjectContent(project, language),
        createProjectFooter(project, dictionary)
    );

    return card;
}

function renderProjects(language) {
    const projectsList = document.querySelector('#projects-list');

    if (!projectsList || typeof projects === 'undefined') {
        return;
    }

    const activeLanguage = getProjectLanguage(language || localStorage.getItem('idioma') || 'pt');
    const dictionary = getProjectDictionary(activeLanguage);

    projectsList.innerHTML = '';
    projectsList.setAttribute('aria-label', dictionary.projects_list_label || 'Lista de projetos');

    projects.forEach((project) => {
        projectsList.appendChild(createProjectCard(project, activeLanguage, dictionary));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
