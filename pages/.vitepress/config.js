export default {
    lang: 'zh-CN',
    title: 'The Notion',
    description: 'GBL\'s personal blog.',
    themeConfig: {
        sidebar: [
            {
              text: '总之吧',
              collapsible: true,
              items: [
                { text: '主页', link: '/pages/' }
              ]
            }
        ],
        socialLinks: [
          {
            icon: 'github',
            link: 'https://github.com/GBLodb/the-notion'
          }
        ],
        footer: {
            message: 'Everything licensed under Mozilla Public License 2.0.',
            copyright: 'Copyright © 2022 Gary Bryson Luis Jr.'
        }
      }
}
