import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';

export default defineUserConfig({
    lang: 'en-GB',
    title: 'TrainLink',
    locales: {
        '/': {
            lang: 'en-GB',
            title: 'TrainLink'
        },
    },
    theme: defaultTheme({
        sidebar: false,
        repo: 'trainlink-org/trainlink-api'
    })
})
