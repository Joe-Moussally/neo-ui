import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "TeamLock UI",
  tagline: "Beautiful and accessible React Native UI components",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-teamlock-docs.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "teamlock", // Usually your GitHub org/user name.
  projectName: "teamlock", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["./plugins/webpack-plugin.js"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/your-org/teamlock/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/your-org/teamlock/tree/main/docs/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/teamlock-social-card.jpg",
    navbar: {
      title: "TeamLock UI",
      logo: {
        alt: "TeamLock UI Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "componentsSidebar",
          position: "left",
          label: "Components",
        },
        {
          type: "docSidebar",
          sidebarId: "guideSidebar",
          position: "left",
          label: "Getting Started",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/your-org/teamlock",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            {
              label: "Components",
              to: "/docs/components/button",
            },
            {
              label: "Theming",
              to: "/docs/theming",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/teamlock-ui",
            },
            {
              label: "Issues",
              href: "https://github.com/your-org/teamlock/issues",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/your-org/teamlock",
            },
            {
              label: "npm",
              href: "https://www.npmjs.com/package/teamlock",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TeamLock UI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "typescript", "javascript", "tsx", "jsx"],
    },
    algolia: {
      // You can configure Algolia DocSearch later
      appId: "YOUR_APP_ID",
      apiKey: "YOUR_SEARCH_API_KEY",
      indexName: "teamlock-ui",
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
