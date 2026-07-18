export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para trabajar',
      titleLine1: 'Frontend Developer',
      titleLine2: '& DevOps Engineer',
      description:
        'Desarrollador Web Frontend y Tecnólogo ADSI apasionado por crear interfaces interactivas, accesibles y de alto rendimiento. Especializado en React, Angular y JavaScript, en transición hacia el mundo DevOps.',
      location: 'Bogotá, Colombia',
      frontendBadge: 'Frontend',
      devopsBadge: 'DevOps',
      contactCta: 'Contáctame',
      cvCta: 'Descargar CV',
      projectsCta: 'Ver Proyectos',
      linkedinCta: 'LinkedIn',
    },
    about: {
      title: 'Sobre Mí',
      bio: 'Desarrollador Web Frontend en transición hacia DevOps, Tecnólogo en Análisis y Desarrollo de Sistemas de Información (ADSI), con experiencia en interfaces modernas y responsivas (React, Angular, Tailwind CSS) y en gestión de servidores VPS, automatización de despliegues y herramientas como Jenkins y AWS. Con más de 10 años de trayectoria complementaria en atención al cliente y gestión de relaciones interpersonales, destaco por mi asertividad, comunicación proactiva y alta sinergia en equipos de desarrollo tecnológico.',
      experiences: [
        {
          title: 'Analista DevOps y Servicios TIC — ADAGGIO',
          description:
            'Gestión de servidores VPS, automatización de despliegues con Next.js y Django (Poetry), y uso de Jenkins y AWS para infraestructura y entrega continua (sept. 2024-presente).',
          icon: '🚀',
        },
        {
          title: 'Analista de Datos / Frontend — ADAGGIO',
          description:
            'Diseño y desarrollo de tableros interactivos consumiendo APIs RESTful, y optimización del rendimiento frontend de plataformas analíticas (2021-2024).',
          icon: '💻',
        },
        {
          title: 'Tecnólogo ADSI — SENA',
          description:
            'Formación en Análisis y Desarrollo de Sistemas de Información, base técnica en lógica de programación, bases de datos y desarrollo web (2020-2022).',
          icon: '📘',
        },
      ],
      skillsTitle: 'Habilidades Técnicas',
      codeMock: {
        passionValue: 'Creando experiencias web increíbles',
      },
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle:
        'Una selección de mis proyectos más relevantes que demuestran mis habilidades en desarrollo frontend y DevOps.',
      items: [
        {
          title: 'Particles Landing Page',
          description:
            'Landing page interactiva con animaciones de partículas y transiciones fluidas, construida con Next.js, Tailwind CSS y Framer Motion.',
        },
        {
          title: 'Dashboard Proyect',
          description:
            'Panel de control interactivo para visualización y gestión de datos, desarrollado en TypeScript con foco en usabilidad.',
        },
        {
          title: 'TeslaShop Ecommerce',
          description:
            'E-commerce construido con Next.js, Tailwind CSS y Zustand para el manejo de estado, con enfoque en rendimiento y UX.',
        },
        {
          title: 'Pokedex React',
          description:
            'Pokedex interactiva construida en React, consumiendo la PokeAPI en tiempo real con búsqueda y detalle por Pokémon.',
        },
        {
          title: 'Portal Job',
          description:
            'Portal de búsqueda y publicación de empleos, con listados dinámicos e interfaz responsiva en JavaScript.',
        },
        {
          title: 'Backend Libros API',
          description:
            'API REST en TypeScript para la gestión de una biblioteca: catálogo de libros, préstamos y usuarios.',
        },
      ],
      codeLink: 'Código',
      demoLink: 'Ver demo',
      viewMore: 'Ver más proyectos',
    },
    contact: {
      eyebrow: '¿Tienes un proyecto en mente?',
      title: 'Hablemos de tu proyecto',
      description:
        'Estoy disponible para colaborar y crear soluciones web innovadoras. Cuéntame sobre tu idea y hagámosla realidad.',
      form: {
        name: 'Nombre',
        namePlaceholder: '¿Cómo te llamas?',
        email: 'Email',
        emailPlaceholder: 'ejemplo@correo.com',
        subject: 'Asunto',
        subjectPlaceholder: '¿Cuál es el motivo de tu mensaje?',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto o idea...',
        submit: 'Enviar Mensaje',
      },
      subjectPrefix: 'Contacto desde el portfolio de',
    },
    footer: {
      madeWith: 'Creado con el',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for work',
      titleLine1: 'Frontend Developer',
      titleLine2: '& DevOps Engineer',
      description:
        'Frontend Web Developer and Information Systems Technologist, passionate about building interactive, accessible, high-performance interfaces. Specialized in React, Angular and JavaScript, transitioning into the DevOps world.',
      location: 'Bogotá, Colombia',
      frontendBadge: 'Frontend',
      devopsBadge: 'DevOps',
      contactCta: 'Contact Me',
      cvCta: 'Download CV',
      projectsCta: 'View Projects',
      linkedinCta: 'LinkedIn',
    },
    about: {
      title: 'About Me',
      bio: 'Frontend Web Developer transitioning into DevOps, Technologist in Information Systems Analysis and Development (ADSI), with experience building modern, responsive interfaces (React, Angular, Tailwind CSS) and in VPS server management, deployment automation, and tools like Jenkins and AWS. With over 10 years of complementary experience in customer service and interpersonal relationship management, I stand out for my assertiveness, proactive communication, and strong synergy in technology development teams.',
      experiences: [
        {
          title: 'DevOps & IT Services Analyst — ADAGGIO',
          description:
            'VPS server management, deployment automation with Next.js and Django (Poetry), and use of Jenkins and AWS for infrastructure and continuous delivery (Sept. 2024-present).',
          icon: '🚀',
        },
        {
          title: 'Data Analyst / Frontend Developer — ADAGGIO',
          description:
            'Design and development of interactive dashboards consuming RESTful APIs, and frontend performance optimization for analytics platforms (2021-2024).',
          icon: '💻',
        },
        {
          title: 'ADSI Technologist — SENA',
          description:
            'Training in Information Systems Analysis and Development, technical foundation in programming logic, databases, and web development (2020-2022).',
          icon: '📘',
        },
      ],
      skillsTitle: 'Technical Skills',
      codeMock: {
        passionValue: 'Creating amazing web experiences',
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle:
        'A selection of my most relevant projects, showcasing my frontend and DevOps skills.',
      items: [
        {
          title: 'Particles Landing Page',
          description:
            'Interactive landing page with particle animations and smooth transitions, built with Next.js, Tailwind CSS and Framer Motion.',
        },
        {
          title: 'Dashboard Proyect',
          description:
            'Interactive dashboard for data visualization and management, built in TypeScript with a focus on usability.',
        },
        {
          title: 'TeslaShop Ecommerce',
          description:
            'E-commerce built with Next.js, Tailwind CSS and Zustand for state management, focused on performance and UX.',
        },
        {
          title: 'Pokedex React',
          description:
            'Interactive Pokedex built in React, consuming the PokeAPI in real time with search and per-Pokémon detail.',
        },
        {
          title: 'Portal Job',
          description:
            'Job search and posting portal, with dynamic listings and a responsive interface in JavaScript.',
        },
        {
          title: 'Backend Libros API',
          description:
            'REST API in TypeScript for managing a library: book catalog, loans, and users.',
        },
      ],
      codeLink: 'Code',
      demoLink: 'View demo',
      viewMore: 'View more projects',
    },
    contact: {
      eyebrow: 'Have a project in mind?',
      title: "Let's talk about your project",
      description:
        "I'm available to collaborate and build innovative web solutions. Tell me about your idea and let's make it happen.",
      form: {
        name: 'Name',
        namePlaceholder: "What's your name?",
        email: 'Email',
        emailPlaceholder: 'example@email.com',
        subject: 'Subject',
        subjectPlaceholder: "What's this about?",
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or idea...',
        submit: 'Send Message',
      },
      subjectPrefix: 'Contact from the portfolio of',
    },
    footer: {
      madeWith: 'Made with',
    },
  },
};
