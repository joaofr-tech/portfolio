const projects = [
    {
        type: 'API REST',
        status: 'progress',
        repository: 'https://github.com/joaofr-tech/mastersys-spring-api',
        techs: ['Java', 'Spring Boot', 'PostgreSQL', 'Validation', 'Flyway'],
        content: {
            pt: {
                title: 'Master Sis',
                description: 'API REST em Java com Spring Boot para gestão de academias de artes marciais, incluindo alunos, modalidades, planos, matrículas e faturamento.',
                goal: 'Aprendizado: modelagem relacional, migrations com Flyway, persistência com PostgreSQL e organização de um domínio de negócio real.'
            },
            en: {
                title: 'Master Sis',
                description: 'Java and Spring Boot REST API for martial arts academy management, including students, modalities, plans, enrollments, and billing.',
                goal: 'Learning: relational modeling, Flyway migrations, PostgreSQL persistence, and organization of a real business domain.'
            }
        }
    },
    {
        type: 'API REST',
        status: 'done',
        repository: 'https://github.com/joaofr-tech/pagamento-simplificado/tree/main',
        techs: ['Java', 'Spring Boot', 'H2'],
        content: {
            pt: {
                title: 'Pagamento Simplificado',
                description: 'API REST em Java com Spring Boot para simular um sistema de pagamentos simplificado entre usuários comuns e lojistas.',
                goal: 'Aprendizado: modelagem de domínio, validações transacionais, persistência com JPA e integração com serviços externos.'
            },
            en: {
                title: 'Simplified Payment',
                description: 'Java and Spring Boot REST API that simulates a simplified payment system between regular users and merchants.',
                goal: 'Learning: domain modeling, transactional validation, JPA persistence, and integration with external services.'
            }
        }
    },
    {
        type: 'API REST',
        status: 'done',
        repository: 'https://github.com/joaofr-tech/SF-movies-api',
        techs: ['Java', 'Spring Boot', 'WebClient'],
        content: {
            pt: {
                title: 'Aplicação de Consulta de API Externa',
                description: 'API em Java com Spring Boot para consultar filmes gravados em San Francisco, consumindo dados públicos do portal SF Open Data.',
                goal: 'Aprendizado: consumo de API externa, criação de endpoints REST, filtros de busca e organização de uma aplicação Spring Boot.'
            },
            en: {
                title: 'External API Query Application',
                description: 'Java and Spring Boot API for searching movies filmed in San Francisco, consuming public data from the SF Open Data portal.',
                goal: 'Learning: external API consumption, REST endpoint creation, search filters, and Spring Boot application organization.'
            }
        }
    },
    {
        type: 'API REST',
        status: 'done',
        repository: 'https://github.com/joaofr-tech/api-cnab-file-reader',
        techs: ['Java', 'Spring Boot', 'PostgreSQL'],
        content: {
            pt: {
                title: 'API Leitor de Arquivo CNAB',
                description: 'Importação, processamento e persistência de transações financeiras a partir de arquivos CNAB, com foco em organização de camadas e integração com banco de dados.',
                goal: 'Aprendizado: leitura de arquivos texto, separação de responsabilidades, persistência em banco e estruturação em camadas.'
            },
            en: {
                title: 'CNAB File Reader API',
                description: 'Import, processing, and persistence of financial transactions from CNAB files, focused on layered organization and database integration.',
                goal: 'Learning: text file reading, responsibility separation, database persistence, and layered application structure.'
            }
        }
    },
    {
        type: 'WebSocket',
        status: 'done',
        repository: 'https://github.com/joaofr-tech/chat-em-tempo-real',
        techs: ['Java', 'Spring Boot', 'WebSocket', 'STOMP'],
        content: {
            pt: {
                title: 'Chat em Tempo Real',
                description: 'Implementação de um chat em tempo real com Spring Boot e WebSocket, permitindo troca instantânea de mensagens entre clientes por meio de uma conexão persistente.',
                goal: 'Aprendizado: comunicação em tempo real, fluxo de mensagens, conexões persistentes e integração com WebSocket no Spring.'
            },
            en: {
                title: 'Real-Time Chat',
                description: 'Real-time chat implementation with Spring Boot and WebSocket, allowing instant message exchange between clients through a persistent connection.',
                goal: 'Learning: real-time communication, message flow, persistent connections, and WebSocket integration in Spring.'
            }
        }
    }
];
