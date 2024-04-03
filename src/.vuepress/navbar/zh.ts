import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "帮助文档",
    icon: "material-symbols:book",
    prefix: "/docs/",
    children: [
      {
        text: "Git",
        icon: "pajamas:gitea",
        prefix: "git/",
        children: [{ text: "如何注册", icon: "mdi:register", link: "register" }, { text: "隐私条款", icon: "material-symbols-light:private-connectivity-rounded", link: "privacy" }, { text: "使用条款", icon: "ri:service-fill", link: "tos" }],
      },
    ],
  },
]);
