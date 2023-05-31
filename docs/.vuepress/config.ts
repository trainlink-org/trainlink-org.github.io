import { defineUserConfig, defaultTheme } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
    lang: 'en-GB',
    title: 'TrainLink',
    locales: {
        '/': {
            lang: 'en-GB',
            title: 'TrainLink',
        },
    },
    plugins: [
        searchPlugin({
            hotKeys: ['ctrl', 'k'],
        }),
    ],
    theme: defaultTheme({
        repo: 'trainlink-org/trainlink-api',
        docsRepo: 'trainlink-org/trainlink-org.github.io',
        docsDir: 'docs',
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'TrainLink Command',
                link: '/trainlink-command/features',
                activeMatch: '/',
                children: [
                    {
                        text: 'Features',
                        link: '/trainlink-command/features',
                    },
                    {
                        text: 'Download',
                        link: '/trainlink-command/download',
                    },
                    {
                        text: 'Getting Started',
                        link: '/trainlink-command/docs/getting-started',
                    },
                    {
                        text: 'Documentation and Support',
                        link: '/trainlink-command/docs/',
                        activeMatch: '/trainlink-command/docs/[^A-z]',
                    },
                ],
            },
            {
                text: 'TrainLink Connect',
                link: '/trainlink-connect',
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
        sidebar: [
            {
                text: 'Features',
                link: '/trainlink-command/features',
            },
            {
                text: 'Quick Start',
                collapsible: true,
                children: [
                    {
                        text: 'Download',
                        link: '/trainlink-command/download',
                    },
                    // {
                    //     text: 'Getting Started',
                    //     link: '/trainlink-command/docs/getting-started',
                    //     children: []
                    // }
                    '/trainlink-command/docs/getting-started.md',
                ],
            },
            '/trainlink-command/docs/index.md',
        ],
    }),
});
