import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
export default defineUserConfig({
  lang: "zh-CN",
  title: "lxblog",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    logo: "/images/logo.jpg",
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "HTML&CSS",
        link: "/guide/HTML&CSS.md"
      },
      {
        text: "JavaScript",
        link: "/guide/JavaScript.md"
      },
      {
        text: "Vue",
        children: [{ text: "Vue基础", link: "/guide/Vue/Vue.md" }]
      }
    ],
    sidebar: [
      // SidebarItem
      {
        text: "介绍",
        link: "/"
      },
      {
        text: "HTML&CSS",
        collapsible: true,
        children: [
          // SidebarItem
          {
            text: "基础",
            link: "/guide/Html&Css/html&css.md"
          },
          {
            text: "Scss模块化导入",
            link: "/guide/Html&Css/Scss模块化导入.md"
          }
        ]
      },
      {
        text: "JavaScript",
        collapsible: true,
        children: [
          // SidebarItem
          {
            text: "JS执行机制",
            link: "/guide/JavaScript/js执行机制.md"
          },
          {
            text: "JS作用域",
            link: "/guide/JavaScript/js作用域.md"
          },
          {
            text: "数组常用方法",
            link: "/guide/JavaScript/数组API.md"
          },
          {
            text: "字符串常用方法",
            link: "/guide/JavaScript/字符串API.md"
          },
          {
            text: "对象常用方法",
            link: "/guide/JavaScript/对象API.md"
          },
          {
            text: "深拷贝浅拷贝",
            link: "/guide/JavaScript/深拷贝和浅拷贝.md"
          },
          {
            text: "防抖和节流",
            link: "/guide/JavaScript/防抖和节流.md"
          },
          {
            text: "回流和重绘",
            link: "/guide/JavaScript/回流和重绘.md"
          },
          {
            text: "ES6常用新特性",
            link: "/guide/JavaScript/es6.md"
          }
        ]
      },
      {
        text: "Vue",
        collapsible: true,
        children: [
          // SidebarItem
          {
            text: "Vue组件",
            link: "/guide/Vue/组件.md"
          },
          {
            text: "VueRouter路由",
            link: "/guide/Vue/vueRouter.md"
          },
          {
            text: "导航守卫",
            link: "/guide/Vue/导航守卫.md"
          },
          {
            text: "Vuex",
            link: "/guide/Vue/vuex.md"
          },
          {
            text: "Pinia",
            link: "/guide/Vue/pinia使用教程.md"
          }
        ]
      },
      {
        text: "React",
        collapsible: true,
        children: [
          // SidebarItem
          {
            text: "Redux使用教程",
            link: "/guide/React/Redux.md"
          }
        ]
      }
    ]
  }),
  plugins: [
    // 插件的配置
    // ['@vuepress/back-to-top'],
  ]
});
