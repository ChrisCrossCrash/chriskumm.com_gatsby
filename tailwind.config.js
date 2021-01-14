const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia', 'serif'],
    },
    colors: {
      // Customize colors: https://tailwindcss.com/docs/customizing-colors
      // TailwindInk: https://tailwind.ink/
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      dark: '#091e42',
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.lightBlue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      mango: {
        '50': '#faf6ee',
        '100': '#fbeed7',
        '200': '#f8deab',
        '300': '#f6c56c',
        '400': '#f39e30',
        '500': '#f27615',
        '600': '#e6520e',
        '700': '#c53d12',
        '800': '#9f3118',
        '900': '#812818',
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ['odd'],
      textColor: ['visited'],
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
