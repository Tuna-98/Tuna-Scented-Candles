// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  // target: 'static',
  // css: ['~/public/assets/css/tailwind.css'],
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    // 'tailwindcss',
    // 'autoprefixer',
    'nuxt-swiper',
    // 'swiper'
  ],
  
  alias: {},
})