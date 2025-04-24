/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Malgun Gothic"', '"맑은 고딕"', 'sans-serif'],
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px', // Limiting max width to 1280px
        },
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};