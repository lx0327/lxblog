import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import path from "path";
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'lxblog',
  description: '记录学习笔记的博客',
  theme: defaultTheme({
    logo: "/images/logo.jpg",
    // 默认主题配置
    navbar: [
      // {
      //   text: "首页",
      //   link: "/"
      // },
      // {
      //   text: "HTML&CSS",
      //   link: "/guide/HTML&CSS/HTML&CSS.md"
      // },
      // {
      //   text: "JavaScript",
      //   link: "/guide/JavaScript/JavaScript.md"
      // },
      // {
      //   text: "Vue",
      //   children: [{ text: "Vue基础", link: "/guide/Vue/Vue.md" }]
      // },
      // {
      //   text: 'React',
      //   children: [{ text: 'React基础', link: '/guide/React/React基础.md' }, { text: 'Redux', link: '/guide/React/Redux.md' }],
      // },
    ],
    sidebar: {
      "/": [
        {
          text: "首页",
          link: "/"
        },
        {
          text: "HTML&CSS",
          collapsible: true,
          children: [
            "/guide/HTML&CSS/flex布局.md",
            "/guide/HTML&CSS/Scss模块化导入.md",
            "/guide/HTML&CSS/浮动定位.md"
          ]
        },
        {
          text: "JavaScript",
          collapsible: true,
          children: [
            "/guide/JavaScript/对象API.md",
            "/guide/JavaScript/数组API.md",
            "/guide/JavaScript/字符串API.md",
            "/guide/JavaScript/防抖和节流.md",
            "/guide/JavaScript/深拷贝和浅拷贝.md",
            "/guide/JavaScript/es6.md",
            "/guide/JavaScript/js执行机制.md",
            "/guide/JavaScript/js作用域.md",
            "/guide/JavaScript/Promise&&async&&await.md",
            "/guide/JavaScript/defineProperty.md"
          ]
        },
        {
          text: "Vue",
          collapsible: true,
          children: [
            "/guide/Vue/pinia使用教程.md",
            "/guide/Vue/导航守卫.md",
            "/guide/Vue/组件.md",
            "/guide/Vue/vueRouter.md",
            "/guide/Vue/vuex.md",
            "/guide/Vue/KeepAlive.md"
          ]
        },
        { text: "React", collapsible: true, children: ["/guide/React/React基础.md", "/guide/React/Redux.md"] }
      ]
    }
  }),
  plugins: [
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, './components')
    })
  ]
});
