import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'lxblog',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    logo: '/images/logo.jpg',
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'HTML&CSS',
        link: '/guide/HTML&CSS/HTML&CSS.md',
      },
      {
        text: 'JavaScript',
        link: '/guide/JavaScript/JavaScript.md',
      },
      {
        text: 'Vue',
        children: [{ text: 'Vue基础', link: '/guide/Vue/Vue.md' }],
      },
      {
        text: 'React',
        children: [{ text: 'React基础', link: '/guide/React/React基础.md' }],
      },
    ],
    //   // SidebarItem
    //   {
    //     text: '介绍',
    //     link: '/',
    //   },
    //   {
    //     text: 'HTML&CSS',
    //     collapsible: true,
    //     children: [
    //       // SidebarItem
    //       {
    //         text: '基础',
    //         link: '/guide/HTML&CSS/HTML&CSS.md',
    //       },
    //       {
    //         text: 'Scss模块化导入',
    //         link: '/guide/HTML&CSS/Scss模块化导入.md',
    //       },
    //     ],
    //   },
    //   {
    //     text: 'JavaScript',
    //     collapsible: true,
    //     children: [
    //       // SidebarItem
    //       {
    //         text: '基础',
    //         link: '/guide/JavaScript/JavaScript.md',
    //       },
    //     ],
    //   },
    //   {
    //     text: 'Vue',
    //     collapsible: true,
    //     children: [
    //       // SidebarItem
    //       {
    //         text: '基础',
    //         link: '/guide/Vue/Vue.md',
    //         children: ['/guide/Vue/Vue.md']
    //       },
    //     ],
    //   },
    //   {
    //     text: 'React',
    //     collapsible: true,
    //     children: [
    //       // SidebarItem
    //       {
    //         text: 'React基础',
    //         link: '/guide/React/React基础.md',
    //         children: ['/guide/React/React基础.md']
    //       },
    //       {
    //         text: 'Redux使用教程',
    //         link: '/guide/React/Redux.md',
    //         children: ['/guide/React/Redux.md']
    //       },
    //     ],
    //   }
    // ],
    sidebar: {
      "/": [
        {
          text: "首页",
          link: "/",
        },
        { text: "HTML&CSS", collapsible: true, children: ['/guide/HTML&CSS/HTML&CSS.md', '/guide/HTML&CSS/Scss模块化导入.md'] },
        { text: "JavaScript", collapsible: true, children: ['/guide/JavaScript/JavaScript.md'] },
        { text: "Vue", collapsible: true, children: ['/guide/Vue/Vue.md', '/guide/Vue/pinia使用教程.md'] },
        { text: "React", collapsible: true, children: ['/guide/React/React基础.md', '/guide/React/Redux.md'] },
      ],
    }
  }),
  "plugins": [
    // 插件的配置

  ]

})
