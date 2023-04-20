/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    './src/components/**/*.{jsx,js}',
    './src/pages/**/*.{jsx,js}',
    './src/**/*.{jsx,js}',
    'index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 50px 60px -15px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        inter: ['inter', 'serif'],
      },
    },
  },
  plugins: [],
};
