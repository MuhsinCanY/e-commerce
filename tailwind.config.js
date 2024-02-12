/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'p-1': '#4731D3',
        'p-2': '#CBF281',
        't-1': '#23A6F0', //blue
        't-2': '#737373', //gray
        't-3': '#252B42', //black
      },
    },
  },
  plugins: [],
}
