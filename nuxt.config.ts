// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  css: ['vuetify/lib/styles/main.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    apiURL: process.env.API_URL
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
});
