import * as path from 'node:path';
import {defineConfig} from 'rspress/config';
import {pluginMarkDownAutoSpace} from "./plugins/markdown-auto-space.ts";
import readingTime from "rspress-plugin-reading-time";
import sitemap from "rspress-plugin-sitemap";
import type {ReadTimeResults} from "reading-time";

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