export const attributes = {
  hero: {
    firstButton: {
      icon: 'briefcase-outline',
      link: '/#portfolio',
      text: 'NOT My Portfolio',
    },
    heading: " Hi, I'm Sebi, and I create",
    image: '/img/hero.jpeg',
    secondButton: {
      icon: 'account-outline',
      link: '/#about',
      text: 'About me',
    },
    social: {
      github: { link: 'https://github.com/5ebi', show: true },
      instagram: {
        link: 'https://www.instagram.com/sebastianspsr/',
        show: true,
      },
      linkedin: {
        link: 'https://www.linkedin.com/in/sebspeiser',
        show: true,
      },
    },
    typed: [
      { text: 'fast websites.' },
      { text: 'outstanding experiences.' },
      { text: 'a killer pizza - sometimes.' },
    ],
  },
  about: {
    heading: 'Who am I?',
    image: '/img/ICH-SMALL.jpeg',
    imageClass: 'mx-auto my-4 animate-fadeIn', // Added  animation class

    text: 'I’m Sebastian Speiser, a web developer born 1997 in Vienna, Austria, who loves building websites that are smoother than my motorcycle rides. I’m a full stack dev by day, and in my free time, you’ll find me gaming like a pro, jamming on my guitar, perfecting my Neapolitan pizza at 500 degrees, or out fishing. .\n',
  },
  features: [
    {
      icon: 'responsive',
      text: 'Creating web applications that look great on any device, from mobile to desktop.',
      title: 'Responsive Design',
    },
    {
      icon: 'api',
      text: 'Integrating third-party APIs to enhance functionality and connect applications with external data.',
      title: 'API Integration',
    },
    {
      icon: 'speedometer',
      text: 'Optimizing web performance for faster load times and a smoother user experience.',
      title: 'Performance Optimization',
    },
  ],
  portfolio: {
    projects: [
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-1.jpeg',
        title: 'ShopoShopy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-2.jpeg',
        title: 'LogoLogy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-3.jpeg',
        title: 'SitoSity',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-4.jpeg',
        title: 'DrawoDrawy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-5.jpeg',
        title: 'PagoPagy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-6.jpeg',
        title: 'UIoUXy',
      },
    ],
    title: 'NOT My work',
  },
  footer: { text: '© Sebastian Speiser' },
};
