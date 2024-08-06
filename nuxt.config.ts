// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig:{
    dataBase:process.env.DATABASE,
    myName:process.env.MY_NAME
  }
})
