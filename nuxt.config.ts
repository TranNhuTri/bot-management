// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    'vuetify/lib/styles/main.css',
    "~/assets/styles/scss/main.scss"
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    apiURL: process.env.API_URL
  }
});
