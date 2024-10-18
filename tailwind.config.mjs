import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mongodb: {
          text: 'rgb(8,49,22)',
          button: 'rgb(0,237,100)',
          border: 'rgb(8,49,22)',
          borderNav: 'rgb(186,196,194)',
          header: 'rgb(0,40,33)',
        },
      },
      fontFamily: {
        sans: ['Euclid', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
