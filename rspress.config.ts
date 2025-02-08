import * as path from 'node:path';
import { pluginLastUpdated } from '@rspress/plugin-last-updated';
import {defineConfig} from 'rspress/config';

const icon = "https://raw.githubusercontent.com/kagg886/Pixiv-MultiPlatform/refs/heads/master/.idea/icon.png"

export default defineConfig({
    plugins: [pluginLastUpdated()],
    root: path.join(__dirname, 'docs'),
    title: 'Pixiv-MultiPlatform',
    icon: icon,
    logo: icon,
    logoText: 'Pixiv-MultiPlatform',
    themeConfig: {
        footer: {
            message: 'GPLv3 Licensed | Copyright © 2024 kagg886',
        },
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/kagg886/Pixiv-MultiPlatform',
            },
        ],

        nav: [
            {
                text: '主页',
                link: '/',
                position: 'left',
                activeMatch: '^/$|^\\/index'
            },
            {
                text: '文档',
                link: '/main/welcome',
                position: 'left',
                activeMatch: '^\\/(main|dev)'
            }
        ],

        sidebar: {
            '/': [
                {
                    text: '欢迎',
                    link: 'main/welcome'
                },
                {
                    text: '软件功能',
                    items: [
                        // 填入一个对象
                        {
                            text: '安装',
                            link: 'main/install',
                        },
                        {
                            text: '登录',
                            link: 'main/login',
                        },
                        {
                            text: '快捷键',
                            link: 'main/keyword',
                        },
                        {
                            text: '主题',
                            link: 'main/theme',
                        },
                    ],
                },
                {
                    text: '开发指南',
                    items: [
                        // 填入一个对象
                        {
                            text: '提交功能建议',
                            link: 'dev/contribute',
                        },
                        {
                            text: '提交自己的代码',
                            link: 'dev/pr',
                        },
                    ],
                },
            ]
        },
    },
});


//sidebar: [
//             {
//                 text: '欢迎',
//                 link: '/welcome'
//             },
//             {
//                 text: '软件功能',
//                 children: [
//                     {
//                         text: '安装',
//                         link: '/main/install'
//                     },
//                     {
//                         text: '登录',
//                         link: '/main/login'
//                     },
//                     {
//                         text: '快捷键',
//                         link: '/main/keyword'
//                     },
//                     {
//                         text: '主题',
//                         link: '/main/theme'
//                     },
//                 ]
//             },
//             {
//                 text: '开发指南',
//                 children: [
//                     {
//                         text: '贡献',
//                         link: '/dev/contribute'
//                     }
//                 ]
//             }
//         ]