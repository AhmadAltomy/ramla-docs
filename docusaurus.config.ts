import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ramla',
  

  tagline: 'Documentation for Ramla',
  favicon: 'img/favicon.ico',

  url: 'https://docs.ramlasolutions.com',
  baseUrl: '/ramla-docs/',

  organizationName: 'ramla',
  projectName: 'ramla-docs', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown:{
    mermaid:true
  },
  themes:['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en','ar'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
     
    ],
  ],

  themeConfig: {
    image: 'img/ramla.jpg',
    navbar: {
      title: 'Ramla Docs',
      logo: {
        alt: 'Ramla Logo',
        src: 'img/ramla.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'jellSidebar',
          position: 'left',
          label: 'Jell',
        },
        {
          type:"docSidebar",
          sidebarId: "agileSidebar",
          position: "left",
          label: "Agile",
        },
        {
          type:"docSidebar",
          sidebarId: "teamSidebar",
          position: "left",
          label: "Team",
        },
        {
          type:"docSidebar",
          sidebarId: "developmentSidebar",
          position: "left",
          label: "Development",
        },
        {
          href: 'https://ramlasolutions.com',
          label: 'Ramla Solutions',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Ramla`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
