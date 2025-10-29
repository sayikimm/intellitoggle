import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  vite: {
    plugins: [tsconfigPaths()],
  },
  css: ['~/assets/css/tailwind.css'],
  // Inline PostCSS config (Nuxt will use this instead of postcss.config.js)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
})
