export default {
  title: "onlinetool.io",
  description: "Documentation for onlintool.io tools",

  themeConfig: {
    siteTitle: "onlinetool.io",
    editLink: {
      pattern: "https://github.com/kjk/onlinetool-docs/edit/main/docs/:path",
    },
    sidebar: [
      {
        text: "Gist Editor",
        items: [{ text: "Intro", link: "/gist-editor" }],
      },
      {
        text: "notepad2",
        items: [{ text: "Intro", link: "/notepad2" }],
      },
      {
        text: "wc",
        items: [{ text: "Intro", link: "/wc" }],
      },
    ],
  },
};
