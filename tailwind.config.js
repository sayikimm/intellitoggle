/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f5faff',
                    100: '#e6f2ff',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0891b2'
                }
            }
        },
    },
    plugins: [],
}
