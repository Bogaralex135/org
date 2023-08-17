/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Prata: ['Prata', 'sans-serif'],
    },
    colors: {
      blue: {
        500: '#E8F8FF',
        600: '#82CFFA',
        700: '#6278F7',
      },
      green: {
        500: '#D9F7E9',
        600: '#95FFD4',
        700: '#A6D157',
        800: '#57C278',
      },
      yellow: {
        500: '#F0F8E2',
        600: '#FFF5D9',
        700: '#FFBA05',
      },
      red: {
        500: '#FDE7E8',
        600: '#E06B69',
      },
      pink: {
        500: '#FAE9F5',
        600: '#DB6EBF',
      },
      orange: {
        500: '#FFEEDF',
        600: '#FF8A29',
      },
      gray: {
        100: '#f2f2f2',
        200: '#F6F6F6',
      },
      white: '#ffffff',
    },
    backgroundImage: {
      Footer: "url('/img/Footer.png')",
    },
  },
  plugins: [],
}
