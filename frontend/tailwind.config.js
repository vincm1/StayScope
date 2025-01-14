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
        montserrat: ["'Montserrat', sans-serif"],
      },
      colors: {
        primary: '#133024',
        primarydark: '#2b4c3e',
        secondary: 'rgb(92,255,152)',
        white: '#ffffff',
        beige: '#F5FAF0',
        lightgrey: 'rgb(232,236,229)',
        grey: '#769492',
        bordercolor: '#E8EFE3',
        lightgreen: '#F0F8EA',
        lightbeige: '#F2F6EF',
        lightb: '#F8FAF6',
      },
      fontFamily: {
        body: ['Nunito']
      }	
    },
  },
  plugins: [],
}

