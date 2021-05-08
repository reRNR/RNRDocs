/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },
  title: 'rnrdocs',
  tagline: '',
  url: 'https://rnrdocs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'reRNR',
  projectName: 'RNRDocs',
  themeConfig: {
    navbar: {
      title: '',
      items: [
        {
          href: 'https://github.io/reRNR/RNRDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',  
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://https://github.io/reRNR/RNRDocs/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
