/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#C10206',
      secondary: '#211D21',
      accent: '#A50113',
      neutral: '#DFE2DB',
      'base-100': '#FFFBF2',
      info: '#3abff8',
      success: '#36d399',
      warning: '#fbbd23',
      error: '#f87272',
      black: '#000',
      white: '#fff',
      gold: '#C49D31',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
