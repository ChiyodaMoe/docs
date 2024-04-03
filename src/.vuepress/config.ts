import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Chiyoda Moe Docs",
      description: "Chiyoda Moe 帮助文档。",
      head: [
        ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no"}]
      ]
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
