/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: ['fall'],
    },
    fontFamily: {
      'page': ['Roboto'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      text: '#04d9ff',
      dark1: '#3e3e42',
      dark2: '#2d2d30',
      dark3: '#252526',
      dark4: '#1e1e1e',
      white: '#ffffff',
      offwhite: '#cccccc',
      black: '#000000',

      background: '#2e2e2e',
      backgroundDimmed: '#171717',
      backgroundLightened: '#585858',
      comments: '#797979',
      monokaiWhite: '#d6d6d6',
      monokaiYellow: '#e5b567',
      monokaiGreen: '#b4d273',
      monokaiOrange: '#e87d3e',
      monokaiPurple: '#9e86c8',
      monokaiPink: '#b05279',
      monokaiBlue: '#6c99bb',
    }
  },
  plugins: [],
}

