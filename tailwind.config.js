const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-syne)', ...fontFamily.sans],
        courier: ['Courier New', 'Courier', 'monospace'],
      },
      backgroundImage: {
        navbar:
          'radial-gradient(circle, rgba(255, 251, 251, 1) 0%, rgba(224, 237, 255, 1) 100%)',
      },
    },
  },
  plugins: [],
};
