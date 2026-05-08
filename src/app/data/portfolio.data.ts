export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface KnowledgeItem {
  title: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  course: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  period: string;
  description: string;
  image: string;
}

export const profile = {
  name: 'Gustavo Carvalho',
  title: 'Desenvolvedor Back-end | Java',
  photoInitials: 'LI',
  photoUrl: 'assets/foto-perfil.jpeg',
  contact: [
    {
      label: 'E-mail',
      value: 'gustavohp1708@gmail.com',
      href: 'mailto:gustavohp1708@gmail.com'
    },
    {
      label: 'Telefone',
      value: '+55 11 93229-9848',
      href: 'https://wa.me/5511932299848'
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/carvalhosgustavo/',
      href: 'https://www.linkedin.com/in/carvalhosgustavo/'
    },
    {
      label: 'GitHub',
      value: 'https://github.com/Gustavohp1708',
      href: 'https://github.com/Gustavohp1708'
    }
  ] satisfies ContactLink[]
};

export const stacks = [
  'Java',
  'Spring Boot',  
  'Spring Security',
  'JWT',
  'Angular',
  'FastAPI',
  'MySQL',
  'Git/GitHub'
];

export const aboutText = [
  'Atuação no desenvolvimento de APIs REST com Java e Spring Boot, integração entre sistemas e construção de soluções com Inteligência Artificial. Conhecimento em autenticação e segurança com JWT e Spring Security, persistência de dados com JPA/Hibernate, modelagem relacional com MySQL e versionamento de banco utilizando Flyway. Também possuo  conhecimentos com desenvolvimento front-end utilizando Angular, JavaScript, TypeScript, HTML e CSS.',
  'Fiz minha transição de carreira para a área de tecnologia e tive minha primeira experiência profissional, onde pude colocar em prática os conhecimentos adquiridos e contribuir com o projeto que estava atuando. Venho sempre me dedicando ao aprendizado e aprimorando minhas habilidades técnicas, buscando sempre me manter atualizado com as tendências do mercado e as melhores práticas de desenvolvimento.'
];

export const knowledgeItems: KnowledgeItem[] = [
  {
    title: 'Desenvolvimento Back-end',
    description: 'Desenvolvimento e manutenção de APIs RESTful utilizando Java e Spring Boot, com foco em boas práticas de arquitetura.'
  },
  {
    title: 'Autenticação e Segurança',
    description: 'Conhecimentos em autenticação e segurança com JWT e Spring Security para garantir a integridade e confidencialidade dos dados nas aplicações.'
  },
  {
    title: 'Banco de Dados',
    description: 'Modelagem e manipulação de bancos de dados relacionais utilizando MySQL, versionamento de banco com Flyway e persistência com JPA/Hibernate.'
  },
  {
    title: 'Integração com IA',
    description: 'Criação de agentes inteligentes com fluxos automatizados e integrados a modelos de LLMs, utilizando Python, FastAPI e LangChain.'
  },
  {
    title: 'Front-end com Angular',
    description: 'Desenvolvimento de interfaces modernas e responsivas com Angular, TypeScript, HTML e CSS.'
  },
  {
    title: 'Versionamento com Git',
    description: 'Controle de versão utilizando Git e GitHub, com gerenciamento de branches e commits organizados.'
  }
];

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Back-end Trainee',
    company: 'Provider IT',
    period: 'SET/2025 - MAI/2026',
    description: `Atuação prática no desenvolvimento de aplicações com Inteligência Artificial, criação e
                  manutenção de um agente inteligente utilizando arquitetura RAG integrada a LLMs
                  para soluções internas. Desenvolvimento de funcionalidades back-end com Java e
                  Spring Boot, desenvolvimento front-end com Angular e integração da camada de IA
                  utilizando Python, FastAPI e LangChain. Aliado a treinamento intensivo e prático em
                  desenvolvimento de software e Inteligência Artificial.`  
    },
  {
    role: 'Analista de Departamento Pessoal',
    company: 'Provider IT',
    period: 'JUN/2019 - SET/2025',
    description: 'Responsável pela execução das rotinas de Departamento Pessoal, atuando nos processos de admissão, demissão, rescisão e administração de benefícios. Realização de atendimento aos colaboradores, conferência de documentos e suporte às demandas trabalhistas e administrativas, garantindo organização e conformidade dos processos internos.'  },
  {
    role: 'Estagiário de Recursos Humanos',
    company: 'Provider IT',
    period: 'SET/2018 - JUN/2019',
    description: 'Responsável por apoiar a área de Recrutamento e Seleção na identificação e atração de profissionais de tecnologia, conduzindo triagem de currículos, contato com candidatos e suporte aos processos seletivos para posições como Desenvolvedor Back-end, Front-end, Full Stack, Scrum Master, QA, entre outras.'
  },
  {
    role: 'Aprendiz Administrativo',
    company: 'Coca-Cola FEMSA',
    period: 'jun/2017 - SET/2018',
    description: 'Atuação na área de Facilities, prestando suporte às rotinas administrativas e operacionais da unidade. Responsável pelo lançamento e acompanhamento de pagamentos de notas fiscais, requisições de compras e ordens de serviço através do SAP. Também atuava no controle de abastecimento de máquinas PostMix e da copa da diretoria, gestão de salas de reunião, controle de entrada e saída de correspondências e atendimento às demandas de Serviços Gerais.'
  }
];

export const educationItems: Education[] = [
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Faculdade Impacta Tecnologia',
    period: 'JUN/2021 - DEZ/2023',
    description: 'Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS) com foco em desenvolvimento prático de software, experiência acadêmica sólida em lógica de programação, banco de dados, metodologias ágeis, arquiteturas consistentes e boas práticas de desenvolvimento.'
  },
  {
    course: 'Gestão de Recursos Humanos',
    institution: 'Centro Universitário SENAC',
    period: 'JAN/2018 - DEZ/2019',
    description: 'Tecnólogo em Gestão de Recursos Humanos, com foco em práticas de gestão e desenvolvimento de pessoas, administração de processos seletivos e rotinas generalistas de RH.'
  }
];

export const certificates: Certificate[] = [
  {
    title: 'Java 2022 Completo',
    issuer: 'Udemy',
    period: '2023',
    description: 'Certificado de conclusao do curso Java 2022 COMPLETO Do Zero ao Profissional + Projetos.',
    image: 'assets/Certificado - Java 2022 COMPLETO Do Zero ao Profissional + Projetos!_page-0001.jpg'
  },

  {
    title: 'Spring Boot 3 - API REST em Java',
    issuer: 'Alura',
    period: '2026',
    description: 'Certificado de conclusao do curso Spring Boot 3 - desenvolva uma API Rest em Java.',
    image: 'assets/Spring Boot 3 - desenvolva uma API Rest em Java_page-0001.jpg'
  },

  {
    title: 'Spring Boot 3 - Boas Praticas e Seguranca',
    issuer: 'Alura',
    period: '2026',
    description: 'Certificado de conclusao do curso Spring Boot 3 - aplique boas praticas e proteja uma API Rest.',
    image: 'assets/Spring Boot 3 - aplique boas práticas e proteja uma API Rest_page-0001.jpg'
  },

  {
    title: 'Certificado de Conclusao - Faculdade',
    issuer: 'Faculdade Impacta Tecnologia',
    period: '2023',
    description: 'Certificado de conclusao de curso superior em Análise e Desenvolvimento de Sistemas.',
    image: 'assets/Certificado de Conclusão - Gustavo da Silva Carvalho_page-0001.jpg'
  }
];
