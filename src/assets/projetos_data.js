import img1 from '../assets/CIANP.png';
import img2 from '../assets/HelpDesk.jpeg';
import img3 from '../assets/fapg.jpeg';
import img4 from '../assets/pricesearch.jpg';
import img5 from '../assets/tecsus.jpg';
import img6 from '../assets/img6.jpeg';

const projetos_data = [
    {
        p_no: 1,
        p_nome: "Site Nefrologia Pediátrica",
        p_img: img1,
        descricao: "Em 2023-2 criamos um projeto para pessoas que procuram se manter informadas sobre nefro pediatria. O projeto CIANP (Centro de Informações e Ajuda Nefro-Pediátrica) tem como objetivo trazer informações e dados relevantes à quem procura sobre esse assunto tão pouco comentado. As informações estão muito dispersas na internet, o CIANP traz facilidade nessa busca e apoio para encontrar o local mais adequado para o tratamento necessário para saúde da criança. Compartilhamento de suas histórias está incluso a todos aqueles que buscam um conforto a mais nesse momento delicado.",
        contribuicao: "Contribuições Pessoais: Product Owner - Compreendi as necessidades e expectativas do cliente em relação ao projeto e, com base nesse entendimento, desenvolvi o protótipo. Além disso, comuniquei à equipe o que deveria ser feito para atender aos requisitos do cliente, alinhando todos os envolvidos ao objetivo final. ",
        soft_skills: "SOFT SKILLS: Nosso primeiro projeto de API na faculdade nos ensinou a importância do trabalho em equipe. Inicialmente, enfrentamos dificuldades com a má distribuição de tarefas, o que nos levou a aprender a delegar atividades de forma mais equilibrada e a documentar o projeto de maneira mais eficiente. Além disso, as dificuldades em aplicar o método SCRUM nos ajudaram a compreender melhor a dinâmica desse modelo de trabalho. Como peguei a responsabilidade de PO durante o meio do projeto, tive que me adaptar rapidamente e aprender a lidar com a pressão de entregar um produto de qualidade dentro do prazo. ",
        hard_skills: "HARD SKILLS: Python, Flask, Docker, AWS, HTML, CSS, Github e MYSQL",
        link: 'https://github.com/Code-Nine-FTC/Grupo-Code-Nine'
    },
    {
        p_no: 2,
        p_nome: "Help Desk",
        p_img: img2,
        descricao:"Em 2024-1 criamos um projeto com o objetivo de desenvolver um sistema capaz de implementar melhorias no sistema de chamados e serviços, possuindo sistema de cadastro, criação de chamados a serem atendidos, registro de conclusão dos atendimentos e sistema de relátorios para análise. Atendendo no ramo de entregas, visando solucionar problemas relacionados a frete, rastreamento, dentre outros. ",
        contribuicao: "Contribuições Pessoais: Desenvolvedor - Fui responsável pela criação da interface de ChatBox para comunicação com o cliente, assegurando a entrega dentro do prazo estipulado pela equipe e contribuindo para a qualidade do produto final. Também participei ativamente das reuniões de planejamento e definição de prioridades, colaborando para a organização e eficiência do projeto como um todo. ",
        soft_skills: "SOFT SKILLS: A falta de um MVP na Sprint 2 desse projeto nos levou a aprimorar nosso planejamento e organização. Aprendemos a importância de definir claramente o MVP do projeto e de planejar as prioridades das tasks de forma estratégica. ",
        hard_skills: "HARD SKILLS: React Typescript, Typescript, Github e MYSQL",
        link: 'https://github.com/Code-Nine-FTC/API-2024.1'
    },
    {
        p_no: 3,
        p_nome: "FAPG",
        p_img: img3,
        descricao:"Em 2024-2 criamos um projeto com o objetivo de produzir um portal de transparência para FAPG, visando a capacidade de inserção de dados dos projetos, busca utilizando filtros, portabilidade dos dados do sistema legado e a formulação de estatísticas acerca dos projetos cadastrados sendo exibidas em gráficos e contendo filtros aplicáveis.",
        contribuicao: "Contribuições Pessoais: Product Owner - Fui responsável por definir as prioridades do projeto, garantindo que as necessidades do cliente fossem atendidas e que o produto final fosse entregue dentro do prazo estipulado. Além disso, participei ativamente das reuniões de planejamento e definição de tarefas, colaborando para a organização e eficiência do projeto. Tivemos certas dificuldades de comunicação com a equipe por ter sido reformulada duas vezes e por isso, tive que me adaptar rapidamente e aprender a lidar com a pressão de entregar um produto de qualidade dentro do prazo. ",
        soft_skills: "SOFT SKILLS: Desempenhando a função de Product Owner, além de criar e descrever tasks de forma clara para a equipe com ajuda do Scrum Master, também fui responsável pelo planejamento geral do projeto e pela criação do protótipo. Esse papel me ajudou a desenvolver habilidades de comunicação com o cliente e a compreender melhor o produto, garantindo alinhamento e eficiência no desenvolvimento. ",
        hard_skills: "HARD SKILLS: React, Typescript, Java, Github e MYSQL",
        link: 'https://github.com/Code-Nine-FTC/API-2024.2'
    },
    {
        p_no: 4,
        p_nome: "Telegram Price Search Bot",
        p_img: img4,
        descricao: "Desenvolvi um bot para o Telegram que permite aos usuários pesquisar preços de produtos em diferentes sites de e-commerce. O bot utiliza a API do Telegram para interagir com os usuários e realizar buscas em sites como Amazon, Mercado Livre e outros, retornando os melhores preços encontrados.",
        contribuicao: "Contribuições Pessoais: Desenvolvedor - Fui responsável pela implementação do bot, utilizando a API do Telegram e realizando web scraping para buscar os preços dos produtos. Também participei da definição das funcionalidades e do fluxo de interação com o usuário.",
        soft_skills: "SOFT SKILLS: Durante o desenvolvimento deste bot, aprendi a importância de entender as necessidades dos usuários e a adaptar o produto às suas expectativas. A comunicação clara e objetiva foi fundamental para garantir que o bot fosse intuitivo e fácil de usar. Além disso, tive que lidar com desafios técnicos relacionados ao web scraping e à integração com a API do Telegram, o que me ajudou a desenvolver habilidades de resolução de problemas.",
        hard_skills: "HARD SKILLS: Python, Telegram API, Web Scraping, GitHub",
        link: 'https://github.com/OliveiraPedro09/Telegram-Price-Bot'
    },
    {
        p_no: 5,
        p_nome: "Estações Climáticas Tecsus",
        p_img: img5,
        descricao: "Desenvolvemos um sistema de monitoramento para estações climáticas, permitindo a coleta e análise de dados em tempo real. O sistema foi projetado para ser escalável e fácil de integrar com outras plataformas.",
        contribuicao: "Contribuições Pessoais: Product Owner - Fui responsável por definir as funcionalidades do sistema, garantindo que atendessem às necessidades dos usuários e fossem viáveis tecnicamente. Fui responsável pela arquitetura do sistema, definindo como os dados seriam coletados, armazenados e apresentados. Além disso, participei ativamente das reuniões de planejamento e definição de prioridades, colaborando para a organização e eficiência do projeto. Fui responsável pela configuração da Estação Climática e envio de dados para o banco de dados, além de prototipar a interface de visualização dos dados coletados. Assim como fui responsável pela o fluxo de desenvolvimento em DevOps e pela integração contínua do sistema.",
        soft_skills: "SOFT SKILLS: Durante o desenvolvimento deste sistema, aprendi a importância de uma boa comunicação entre as equipes envolvidas, especialmente entre os desenvolvedores e os usuários finais. A colaboração foi essencial para garantir que o sistema atendesse às expectativas e fosse fácil de usar. Além disso, tive que lidar com desafios técnicos relacionados à integração de diferentes componentes do sistema, o que me ajudou a desenvolver habilidades de resolução de problemas e adaptação.",
        hard_skills: "HARD SKILLS: Python FastAPI, Postgres, MongoDB, GitHub, Github Actions, Docker, Github Projects, React, Typescript, SonarQube, Prometheus",
        link: 'https://github.com/Code-Nine-FTC/API-2025.1'
    },
    {
        p_no: 6,
        p_nome: "Administração Guarnição Militar",
        p_img: img6,
        descricao: "Desenvolvemos um sistema de administração para guarnições militares, permitindo o gerenciamento eficiente de recursos, pessoal e operações. O sistema foi projetado para ser seguro e fácil de usar.",
        contribuicao: "Contribuições Pessoais: Desenvolvedor - Fui responsável pela implementação do sistema web, utilizando tecnologias modernas para garantir a segurança e eficiência do gerenciamento. Também participei da definição das funcionalidades e do fluxo de trabalho do sistema. Fiz a implementação e lógica de IA para previsão de consumo e estoque de materiais.",
        soft_skills: "SOFT SKILLS: Durante o desenvolvimento deste sistema, aprendi a importância de entender as necessidades específicas do ambiente militar e adaptar o produto para atender a essas demandas. A comunicação clara e objetiva foi fundamental para garantir que o sistema fosse intuitivo e fácil de usar. Além disso, tive que lidar com desafios técnicos relacionados à segurança dos dados, o que me ajudou a desenvolver habilidades de resolução de problemas.",
        hard_skills: "HARD SKILLS: Java, Spring Boot, Python, TypeScript, Vue, PostgreSQL, GitHub",
        link: 'https://github.com/Code-Nine-FTC/API-2025.2'
    }
];

export default projetos_data;
