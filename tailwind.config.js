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
        times: ['Times New Roman'],
      },
      backgroundImage: {
        navbar:
          'radial-gradient(circle, rgba(255, 251, 251, 1) 0%, rgba(224, 237, 255, 1) 100%)',
        story:
          'linear-gradient(0deg, rgba(240,236,236,1) 0%, rgba(224,242,255,1) 100%)',
        style:
          'linear-gradient(0deg, rgba(161,161,161,1) 0%, rgba(156,170,180,1) 100%)',
      },
    },
  },
  plugins: [],
};
