import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/Wisteria/',
    title: "Wisteria ",
    description: "Personal Research & Technical Blog on Large Language Models, Machine Learning, Mathematics, and AI.",

    markdown: {
        math: true
    },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/index.md' }
        ],

        search: {
            provider: 'local'
        },

    }
})
