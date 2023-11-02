/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        light: "var(--bg-light)",
        dark: "var(--bg-dark)",
      },
      textColor: {
        light: "var(--text-light)",
        dark: "var(--text-dark)",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

