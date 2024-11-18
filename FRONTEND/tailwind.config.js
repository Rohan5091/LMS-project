/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'header': '4rem', // 16 * 4px = 64px
      },
    },
  },
  plugins: [require("daisyui")],
}

