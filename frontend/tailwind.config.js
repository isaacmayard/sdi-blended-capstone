/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{jsx,js}',
    './src/pages/**/*.{jsx,js}',
    './src/**/*.{jsx,js}',
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
