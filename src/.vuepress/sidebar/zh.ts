import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "Git",
      icon: "pajamas:gitea",
      children: [
        { text: "如何注册", icon: "mdi:register", linkL: "docs/git/register" },
        { text: "隐私条款", icon: "material-symbols-light:private-connectivity-rounded", link: "docs/git/privacy" },
        { text: "使用条款", icon: "ri:service-fill", link: "docs/git/tos" }
      ]
    }
  ],
});
