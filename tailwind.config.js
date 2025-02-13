/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"JejuMyeongjo", serif'],
    },
    extend: {
      colors: {
        finalText: '#fafafa',
        mainBackground: '#02191D',
        border: '#197686',
        borderButtom: '#24A0B5',
        borderBg: '#0E464F',
        priceColor: '#D9D9D9',
        text: '#B3B3B3',
        subBackground: '#08252b',
        fextBg: '#07373f',
        ticketBg: '#052228',
        selectBg: '#12464e',
        imageBg: 'rgb(10,12,17, 20%)',
        ticketStroke: '#031e21',
        formBg: '#08343c',
        formBorder: '#133d44',
      },
    },
  },
  plugins: [],
};
