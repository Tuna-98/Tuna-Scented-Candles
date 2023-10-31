// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  // target: 'static',
  // css: ['~/public/assets/css/tailwind.css'],
  // devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    // 'autoprefixer',
    // 'nuxt-swiper',
    // 'swiper'
  ],
  ssr: false,
  app: {
    head: {
      title: 'App',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
    },
    keepalive: false,
  },
  components: [
    '~/components/**/*',
    {
      path: '~/components',
      extensions: ['vue'],
      pathPrefix: false,
    },
  ],
  css: ['/assets/css/style.css'],
  vite: {
    define: {
      'window.global': {}
    },
    // resolve: {
    //   alias: {
    //     './runtimeConfig': './runtimeConfig.browser'
    //   }
    // }
  }
})