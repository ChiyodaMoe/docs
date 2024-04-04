import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "Git",
      icon: "pajamas:gitea",
      children: [
        { text: "如何注册", icon: "mdi:register", link: "docs/git/register" },
        {
          text: "隐私条款",
          icon: "material-symbols-light:private-connectivity-rounded",
          link: "docs/git/privacy",
        },
        { text: "使用条款", icon: "ri:service-fill", link: "docs/git/tos" },
      ],
    },
    {
      text: "可爱的群友们",
      icon: "mdi:heart",
      // 在下方添加您的页面。
      children: [{ text: "XieXiLin", link: "friends/XieXiLin" },{ text: "Bingxin", link: "friends/Bingxin" }],
    },
  ],
});
