/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src A/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false // <== disable this!
  },
}

