/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#3B82F6',
        accent: '#F59E0B',
        dark: '#111827',
        light: '#F3F4F6',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
}