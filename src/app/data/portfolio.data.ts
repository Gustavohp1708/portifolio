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
}

export const profile = {
  name: 'Lorem Ipsum',
  title: 'Desenvolvedor Full Stack',
  photoInitials: 'LI',
  contact: [
    {
      label: 'E-mail',
      value: 'lorem.ipsum@email.com',
      href: 'mailto:lorem.ipsum@email.com'
    },
    {
      label: 'Telefone',
      value: '+55 00 00000-0000',
      href: 'tel:+5500000000000'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/loremipsum',
      href: 'https://linkedin.com'
    },
    {
      label: 'GitHub',
      value: 'github.com/loremipsum',
      href: 'https://github.com'
    }
  ] satisfies ContactLink[]
};

export const stacks = [
  'Java',
  'Spring Boot',
  'Python',
  'FastAPI',
  'Angular',
  'TypeScript',
  'MySQL',
  'Git/GitHub'
];

export const aboutText = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl vel turpis luctus viverra. Sed consequat, erat sed luctus facilisis, sapien velit cursus justo, vitae tempor lorem sem in nibh.',
  'Praesent ultricies, magna vitae posuere porttitor, arcu dolor fermentum justo, sed consequat elit ipsum nec metus. Donec vitae velit eget mi luctus tempor.'
];

export const knowledgeItems: KnowledgeItem[] = [
  {
    title: 'Desenvolvimento Back-end',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet justo vel urna facilisis luctus.'
  },
  {
    title: 'APIs REST',
    description: 'Nullam interdum sem et lectus dictum, vitae placerat augue consequat. Morbi euismod magna vel sem volutpat.'
  },
  {
    title: 'Banco de Dados',
    description: 'Donec luctus metus non arcu hendrerit, sed bibendum lacus aliquet. Integer id risus sit amet neque.'
  },
  {
    title: 'Integração com IA',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'
  },
  {
    title: 'Front-end com Angular',
    description: 'Curabitur pellentesque sapien nec leo luctus, ac pulvinar lectus hendrerit. Aliquam erat volutpat.'
  },
  {
    title: 'Versionamento com Git',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  }
];

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Back-end',
    company: 'Empresa Lorem',
    period: '2024 - Atual',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus massa a ante malesuada, vitae cursus mi pulvinar.'
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Ipsum Soluções',
    period: '2022 - 2024',
    description: 'Sed non ligula consequat, tempus est at, convallis leo. Donec elementum neque at sapien tincidunt, sed commodo risus efficitur.'
  },
  {
    role: 'Analista de Sistemas',
    company: 'Dolor Tech',
    period: '2021 - 2022',
    description: 'Ut maximus, velit eu commodo gravida, mi magna laoreet felis, ac faucibus elit nibh sit amet eros.'
  },
  {
    role: 'Estagiário em Desenvolvimento',
    company: 'Sit Amet Labs',
    period: '2020 - 2021',
    description: 'Nam porttitor sem in arcu interdum, id facilisis nibh tempor. Vivamus fermentum velit ut nunc posuere.'
  }
];

export const educationItems: Education[] = [
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Instituição Lorem',
    period: '2021 - 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida lacus vitae lectus placerat.'
  },
  {
    course: 'Pós-graduação em Engenharia de Software',
    institution: 'Universidade Ipsum',
    period: '2024 - 2025',
    description: 'Suspendisse potenti. Aliquam gravida justo et magna ultrices, ac varius neque lacinia.'
  }
];

export const certificates: Certificate[] = [
  {
    title: 'Certificado Java e Spring Boot',
    issuer: 'Lorem Academy',
    period: '2025',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'APIs REST com FastAPI',
    issuer: 'Ipsum Cursos',
    period: '2024',
    description: 'Integer sollicitudin eros vitae leo porttitor, sed blandit purus posuere.'
  },
  {
    title: 'Angular e TypeScript',
    issuer: 'Dolor Institute',
    period: '2024',
    description: 'Mauris accumsan mi vel diam aliquet, non blandit sem facilisis.'
  },
  {
    title: 'Banco de Dados MySQL',
    issuer: 'Tech Lorem',
    period: '2023',
    description: 'Fusce dignissim neque id risus blandit, eu consequat nibh cursus.'
  }
];
