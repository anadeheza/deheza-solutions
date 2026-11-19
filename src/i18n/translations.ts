export const es = {
  meta: {
    title: 'Deheza Solutions | Consultoría para empresas que quieren funcionar mejor',
    description:
      'Deheza Solutions analiza tu negocio, ordena lo que ya tenés y propone soluciones reales. Optimizamos, transformamos y medimos para que tu empresa funcione mejor.',
  },
  nav: {
    links: [
      { href: '#inicio', label: 'Inicio' },
      { href: '#enfoque', label: 'Enfoque' },
      { href: '#diagnostico', label: 'Diagnóstico' },
      { href: '#servicios', label: 'Servicios' },
      { href: '#contacto', label: 'Contacto' },
    ],
    cta: 'Hablemos',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menu: 'Menú',
    language: 'Idioma',
  },
  hero: {
    eyebrow: 'Consultoría para empresas',
    title: '¿Tu empresa podría funcionar mejor?',
    leadBefore: 'Te ayudamos a detectar qué está funcionando, qué no y',
    leadHighlight: 'cómo mejorarlo',
    cta: 'Hablemos',
    ctaSecondary: 'Ver cómo trabajamos',
    photoAlt: 'Equipo de trabajo revisando información de un negocio',
    card: 'Nos involucramos en el funcionamiento real de tu empresa.',
  },
  insight: {
    eyebrow: 'Nuestra mirada',
    titleBefore: 'A veces el problema no es',
    titleHighlight: 'vender más',
    bodyBefore: 'Es organizar mejor',
    bodyHighlight: 'lo que ya tenés',
  },
  pillars: [
    {
      id: 'optimizamos',
      title: 'Optimizamos',
      image: '/brand/optimizamos.jpg',
      lines: ['OP', 'TI', 'MI', 'ZA', 'MOS'],
      description:
        'Detectamos procesos ineficientes y cuellos de botella para que el trabajo fluya con menos esfuerzo y más resultado.',
    },
    {
      id: 'transformamos',
      title: 'Transformamos',
      image: '/brand/transformamos.jpg',
      lines: ['TRANS', 'FOR', 'MA', 'MOS'],
      description:
        'Nos involucramos en el funcionamiento real de tu empresa y proponemos soluciones concretas, no recetas genéricas.',
    },
    {
      id: 'ordenamos',
      title: 'Ordenamos',
      image: '/brand/ordenamos.jpg',
      lines: ['OR', 'DE', 'NA', 'MOS'],
      description: 'Aclaramos roles, comunicación y objetivos para organizar mejor lo que ya tenés.',
    },
  ],
  pillarsUi: {
    seeDescription: 'Ver descripción',
    graphicAlt: 'Optimizamos, transformamos y ordenamos',
  },
  diagnosis: {
    eyebrow: 'Analizamos tu negocio',
    title: 'Nos involucramos en el funcionamiento real de tu empresa para detectar:',
    closing: 'Proponemos soluciones reales a tus problemas.',
    problems: [
      'Procesos ineficientes',
      'Problemas de comunicación',
      'Roles y responsabilidades poco claros',
      'Falta de objetivos definidos',
      'Dificultades en la gestión y el seguimiento',
    ],
  },
  solutions: {
    eyebrow: 'Diseñamos soluciones',
    title: 'Un plan de acción a partir del diagnóstico',
    lead: 'No nos quedamos en el análisis. Desarrollamos un plan concreto para ordenar, optimizar y hacer crecer lo que ya existe.',
    items: [
      {
        title: 'Optimizar procesos',
        text: 'Detectamos fricciones, redundancias y cuellos de botella para que el trabajo fluya con menos esfuerzo y más resultado.',
      },
      {
        title: 'Ordenar estructuras y equipos',
        text: 'Aclaramos roles, responsabilidades y flujos de decisión para que cada persona sepa qué tiene que hacer y por qué.',
      },
      {
        title: 'Mejorar la comunicación',
        text: 'Diseñamos espacios, rutinas y canales para que la información circule a tiempo y deje de depender de una sola persona.',
      },
      {
        title: 'Definir objetivos y estrategias',
        text: 'Traducimos la dirección del negocio en prioridades concretas, medibles y compartidas por todo el equipo.',
      },
      {
        title: 'Incorporar herramientas de gestión',
        text: 'Implementamos metodologías y tableros que sostienen el orden después del diagnóstico, no solo durante el proyecto.',
      },
    ],
  },
  measure: {
    title: 'Medimos para mejorar',
    body: 'Porque mejorar también significa poder medir los resultados. Implementamos KPIs, OKRs y tableros de control para que tengas una visión clara del funcionamiento de tu negocio y tomes mejores decisiones.',
  },
  process: {
    title: 'Cómo trabajamos',
    lead: 'Un proceso claro, cercano al negocio y pensado para que el cambio se note en la operación, no solo en una presentación.',
    steps: [
      {
        n: '01',
        title: 'Diagnóstico',
        text: 'Nos involucramos en el funcionamiento real de tu empresa para ver qué está funcionando, qué no y por qué.',
      },
      {
        n: '02',
        title: 'Plan de acción',
        text: 'A partir de lo que encontramos, diseñamos soluciones concretas y un plan que se puede ejecutar.',
      },
      {
        n: '03',
        title: 'Implementación',
        text: 'Ordenamos, optimizamos y acompañamos al equipo para que el cambio se sostenga en el día a día.',
      },
      {
        n: '04',
        title: 'Medición',
        text: 'Instalamos KPIs, OKRs y tableros de control para que puedas ver resultados y tomar mejores decisiones.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Contanos qué está pasando en tu empresa',
    lead: 'Si sentís que el negocio podría funcionar mejor — más orden, más claridad, mejores procesos — escribínos. Armamos un primer diagnóstico para ver cómo podemos ayudar.',
    emailLabel: 'Email:',
    note: 'Respondemos con una propuesta de conversación, no con un formulario genérico.',
    fields: {
      name: 'Nombre',
      email: 'Email',
      company: 'Empresa',
      message: '¿Qué te gustaría mejorar?',
    },
    submit: 'Enviar consulta',
    sentTitle: 'Recibimos tu mensaje',
    sentBody: (email: string) =>
      `Si tu correo no se abrió automáticamente, escribinos a ${email} y lo vemos juntos.`,
    sendAnother: 'Enviar otro mensaje',
    mailSubject: (name: string) => `Consulta de ${name} — Deheza Solutions`,
    mailBody: (fields: { name: string; email: string; company: string; message: string }) =>
      `Nombre: ${fields.name}\nEmail: ${fields.email}\nEmpresa: ${fields.company}\n\n${fields.message}`,
  },
  footer: {
    blurb: 'Analizamos tu negocio, ordenamos lo que ya tenés y proponemos soluciones reales.',
    contact: 'Contáctanos',
  },
  whatsapp: {
    label: 'Escribir por WhatsApp',
    message: 'Hola, quiero consultar por Deheza Solutions',
  },
}

export type Messages = typeof es
export type Locale = 'es' | 'en'

export const en: Messages = {
  meta: {
    title: 'Deheza Solutions | Consulting for companies that want to run better',
    description:
      'Deheza Solutions analyzes your business, organizes what you already have, and proposes real solutions. We optimize, transform, and measure so your company works better.',
  },
  nav: {
    links: [
      { href: '#inicio', label: 'Home' },
      { href: '#enfoque', label: 'Approach' },
      { href: '#diagnostico', label: 'Diagnosis' },
      { href: '#servicios', label: 'Services' },
      { href: '#contacto', label: 'Contact' },
    ],
    cta: "Let's talk",
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
    language: 'Language',
  },
  hero: {
    eyebrow: 'Consulting for companies',
    title: 'Could your company run better?',
    leadBefore: "We help you see what's working, what's not, and",
    leadHighlight: 'how to improve it',
    cta: "Let's talk",
    ctaSecondary: 'See how we work',
    photoAlt: 'Team reviewing business information',
    card: 'We get involved in how your company actually works.',
  },
  insight: {
    eyebrow: 'How we see it',
    titleBefore: "Sometimes the problem isn't",
    titleHighlight: 'selling more',
    bodyBefore: "It's organizing better",
    bodyHighlight: 'what you already have',
  },
  pillars: [
    {
      id: 'optimizamos',
      title: 'We optimize',
      image: '/brand/optimizamos.jpg',
      lines: ['OP', 'TI', 'MI', 'ZING'],
      description:
        'We find inefficient processes and bottlenecks so work flows with less effort and better results.',
    },
    {
      id: 'transformamos',
      title: 'We transform',
      image: '/brand/transformamos.jpg',
      lines: ['TRANS', 'FORM', 'ING'],
      description:
        'We get involved in how your company actually works and propose concrete solutions, not generic recipes.',
    },
    {
      id: 'ordenamos',
      title: 'We organize',
      image: '/brand/ordenamos.jpg',
      lines: ['OR', 'GA', 'NI', 'ZING'],
      description: 'We clarify roles, communication, and goals so you can better organize what you already have.',
    },
  ],
  pillarsUi: {
    seeDescription: 'See description',
    graphicAlt: 'We optimize, transform, and organize',
  },
  diagnosis: {
    eyebrow: 'We analyze your business',
    title: 'We get involved in how your company actually works to detect:',
    closing: 'We propose real solutions to your problems.',
    problems: [
      'Inefficient processes',
      'Communication issues',
      'Unclear roles and responsibilities',
      'Lack of defined goals',
      'Gaps in management and follow-through',
    ],
  },
  solutions: {
    eyebrow: 'We design solutions',
    title: 'An action plan from the diagnosis',
    lead: "We don't stop at the analysis. We build a concrete plan to organize, optimize, and grow what already exists.",
    items: [
      {
        title: 'Optimize processes',
        text: 'We find friction, redundancy, and bottlenecks so work flows with less effort and better results.',
      },
      {
        title: 'Organize structures and teams',
        text: 'We clarify roles, responsibilities, and decision flows so everyone knows what to do and why.',
      },
      {
        title: 'Improve communication',
        text: 'We design spaces, routines, and channels so information moves on time and no longer depends on one person.',
      },
      {
        title: 'Set goals and strategy',
        text: 'We turn the direction of the business into concrete, measurable priorities the whole team can share.',
      },
      {
        title: 'Bring in management tools',
        text: 'We implement methods and dashboards that keep the order after the diagnosis, not only during the project.',
      },
    ],
  },
  measure: {
    title: 'We measure to improve',
    body: 'Improving also means being able to measure results. We implement KPIs, OKRs, and dashboards so you have a clear view of how the business runs and can make better decisions.',
  },
  process: {
    title: 'How we work',
    lead: 'A clear process, close to the business, designed so the change shows up in day-to-day operations — not only in a presentation.',
    steps: [
      {
        n: '01',
        title: 'Diagnosis',
        text: "We get involved in how your company actually works to see what's working, what's not, and why.",
      },
      {
        n: '02',
        title: 'Action plan',
        text: 'From what we find, we design concrete solutions and a plan that can be executed.',
      },
      {
        n: '03',
        title: 'Implementation',
        text: 'We organize, optimize, and support the team so the change holds in day-to-day work.',
      },
      {
        n: '04',
        title: 'Measurement',
        text: 'We put KPIs, OKRs, and dashboards in place so you can see results and make better decisions.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Tell us what's going on in your company",
    lead: "If you feel the business could run better — more order, more clarity, better processes — write to us. We'll put together a first diagnosis to see how we can help.",
    emailLabel: 'Email:',
    note: 'We reply with a conversation, not a generic form letter.',
    fields: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'What would you like to improve?',
    },
    submit: 'Send inquiry',
    sentTitle: 'We received your message',
    sentBody: (email: string) =>
      `If your email client didn't open, write to us at ${email} and we'll take it from there.`,
    sendAnother: 'Send another message',
    mailSubject: (name: string) => `Inquiry from ${name} — Deheza Solutions`,
    mailBody: (fields: { name: string; email: string; company: string; message: string }) =>
      `Name: ${fields.name}\nEmail: ${fields.email}\nCompany: ${fields.company}\n\n${fields.message}`,
  },
  footer: {
    blurb: 'We analyze your business, organize what you already have, and propose real solutions.',
    contact: 'Contact us',
  },
  whatsapp: {
    label: 'Message us on WhatsApp',
    message: 'Hi, I would like to learn more about Deheza Solutions',
  },
}

export const messages: Record<Locale, Messages> = { es, en }
