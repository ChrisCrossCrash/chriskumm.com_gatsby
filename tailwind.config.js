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
