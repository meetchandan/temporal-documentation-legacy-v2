module.exports = {
  title: 'Temporal',
  tagline: 'Invincible applications, invisible infrastructure',
  url: 'https://temporalio.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  organizationName: 'temporalio', // Usually your GitHub org/user name.
  projectName: 'temporal-documentation-legacy-v2', // Usually your repo name.
  plugins: [
    '@docusaurus/plugin-google-gtag',
    [
      '@docusaurus/plugin-sitemap',
      {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Temporal',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.svg',
      },
      links: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'https://temporal.io/careers',
          label: 'Jobs',
          position: 'right',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/temporalio/temporal',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://join.slack.com/t/temporalio/shared_invite/zt-c1e99p8g-beF7~ZZW2HP6gGStXD8Nuw',
          label: 'Slack',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/overview',
            },
            {
              label: 'Java SDK',
              to: 'docs/java-quick-start',
            },
            {
              label: 'Go SDK',
              to: 'docs/go-quick-start',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/temporal-workflow',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/temporalio/shared_invite/zt-c1e99p8g-beF7~ZZW2HP6gGStXD8Nuw',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/temporalio/temporal',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Temporal Technologies Inc.  All rights reserved. Copyright © 2020 Uber Technologies, Inc.`,
    },
    gtag: {
      trackingID: 'UA-163137879-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
