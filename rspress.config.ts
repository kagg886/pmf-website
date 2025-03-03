import * as path from 'node:path';
import {defineConfig} from 'rspress/config';
import {pluginMarkDownAutoSpace} from "./plugins/markdown-auto-space.ts";
import readingTime from "rspress-plugin-reading-time";
import sitemap from "rspress-plugin-sitemap"

const icon = "https://raw.githubusercontent.com/kagg886/Pixiv-MultiPlatform/refs/heads/master/.idea/icon.png"

export default defineConfig({
    lang: 'zh-CN',
    plugins: [
        readingTime(),
        pluginMarkDownAutoSpace(),
        sitemap({
            domain: "https://pmf.kagg886.top",
            defaultChangeFreq: "weekly",
            defaultPriority: "0.5",
        }),
    ],
    root: path.join(__dirname, 'docs'),
    title: 'Pixiv-MultiPlatform',
    icon: icon,
    logo: icon,
    logoText: 'Pixiv-MultiPlatform',
    themeConfig: {
        lastUpdated: true,
        footer: {
            message: 'GPLv3 Licensed | Copyright © 2024 kagg886',
        },
        editLink: {
            docRepoBaseUrl: 'https://github.com/kagg886/pmf-website/tree/master/docs',
            text: '📝 在 GitHub 上编辑此页',
        },
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/kagg886/Pixiv-MultiPlatform',
            },
            {
                icon: {
                    svg: '<svg t="1741007317364" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4581" width="20" height="20"><path d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m243.6 339.8l-81.4 383.6c-6 27.2-22.2 33.8-44.8 21l-124-91.4-59.8 57.6c-6.6 6.6-12.2 12.2-25 12.2l8.8-126.2 229.8-207.6c10-8.8-2.2-13.8-15.4-5l-284 178.8-122.4-38.2c-26.6-8.4-27.2-26.6 5.6-39.4l478.2-184.4c22.2-8 41.6 5.4 34.4 39z" fill="" p-id="4582"></path></svg>'
                },
                content: 'https://t.me/+n_xsrc1Z590xNTY9',
                mode: 'link',
            }
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
            },

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
                            text: '插画',
                            link: 'main/illusts',
                        },
                        {
                            text: '小说',
                            link: 'main/novel',
                        },
                        {
                            text: '搜索',
                            link: 'main/search',
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
