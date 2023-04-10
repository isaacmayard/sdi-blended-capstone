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
      fontFamily: {
        inter: ['inter', 'serif'],
      },
    },
  },
  plugins: [],
};
