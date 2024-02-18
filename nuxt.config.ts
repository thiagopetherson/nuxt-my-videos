// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, // Aqui, por padrão deve-se colocar false quando a aplicação subir
  alias: {
    css: '/<rootDir>/assets/css'
  },  
  css: ["@/assets/css/main.css"],
  components: [{ path: '~/shared/icons', prefix: 'Icon' }, '~/components'], // Nesse último parâmetro é para mostrar a pasta padrão
  modules: [    
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    [
      '@nuxtjs/i18n',
      {        
        vueI18n: './i18n',
      }
    ],
    '@nuxt/ui'
  ],
  pinia: {
    storesDirs: ['./stores/**'] // Essa configuração faz a autoimportação de todos os stores por toda a nossa aplicação
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
})
