// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  // target: 'static',
  css: ['~/public/assets/css/tailwind.css'],
  build:{
    // postcss: {
    //   postcssOptions: require("./postcss.config.js"),
    // } 
  },
  // head: {
  //   title: process.env.npm_package_name || '',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // },
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    'tailwindcss',
    // 'autoprefixer',
    'nuxt-swiper'
  ],
  alias: {}
})