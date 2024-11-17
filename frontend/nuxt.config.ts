// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  alias: {
    assets: '/<rootDir>/assets',
  },
  modules: [
    '@vesp/nuxt-fontawesome',
  ],
  css: ['~/assets/scss/main.scss'],
  fontawesome: {
    icons: {
      solid: ['faHome', 'faUser', 'faCog', 'faArrowRight'],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})