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
        text: "notepad2",
        items: [{ text: "About Notepad2", link: "/notepad2" }],
        items: [{ text: "Differences", link: "/notepad2-differences" }],
      },
      {
        text: "Gist Editor",
        items: [{ text: "About Gist Editor", link: "/gist-editor" }],
      },
      {
        text: "wc",
        items: [{ text: "About wc", link: "/wc" }],
      },
    ],
  },
};
