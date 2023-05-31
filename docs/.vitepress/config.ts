import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'TrainLink',
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        editLink: {
            pattern:
                'https://github.com/trainlink-org/trainlink-org.github.io/edit/main/docs/:path',
        },
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'What is TrainLink?',
                link: '/what-it-is',
            },
            {
                text: 'TrainLink Command',
                link: 'https://trainlink-org.github.io/trainlink-command',
            },
            {
                text: 'TrainLink Connect',
                link: 'https://trainlink-org.github.io/trainlink-connect',
            },
            {
                text: 'Developers',
                link: '/developing-with-trainlink',
            },
            {
                text: 'Support',
                link: '/support',
            },
            {
                text: 'About',
                link: '/about',
            },
        ],

        sidebar: [],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/trainlink-org' },
        ],
        footer: {
            message: 'Released under the GPL-3.0 licence.',
            copyright: 'Copyright © 2023 TrainLink Organisation',
        },
    },
});
