/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter', sans-serif"],
        jakarta_sans: ["'Plus Jakarta Sans', sans-serif"],
        playfair: ["'Playfair Display', serif"],
      },
      colors: {
        primary: 'rgb(16, 45, 33)',
        secondary: 'rgb(92,255,152)',
        white: '#ffffff',
        beige: '#F5FAF0',
      },
      fontFamily: {
        body: ['Nunito']
      }	
    },
  },
  plugins: [],
}

