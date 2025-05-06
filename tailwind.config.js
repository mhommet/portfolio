// @ts-check

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'theme-gray': '#f5f5f7',
        'theme-dark': '#1d1d1f',
        'theme-blue': '#0071e3',
        'theme-light-blue': '#147ce5',
      },
      boxShadow: {
        'custom': '0 1px 3px rgba(0, 0, 0, 0.12)',
        'custom-hover': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'custom': '12px',
      },
    },
  },
  plugins: [],
}

export default config;