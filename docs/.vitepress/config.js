export default {
  title: "onlinetool.io",
  description: "Documentation for onlinetool.io tools",
  cleanUrls: true,

  themeConfig: {
    siteTitle: "onlinetool.io",
    editLink: {
      pattern: "https://github.com/kjk/onlinetool-docs/edit/main/docs/:path",
    },
    sidebar: [
      {
        text: "notepad2",
        items: [
          { text: "About Notepad2", link: "/notepad2" },
          { text: "Browse Files Dialog", link: "/notepad2-browse-files" },
          { text: "Differences", link: "/notepad2-differences" },
        ],
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
