/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge:[
 
  ],
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {},
  },
}

