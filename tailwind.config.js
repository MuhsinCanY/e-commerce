/** @type {import('tailwindcss').Config} */

import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    extend: {
      colors: {
        m: '#BDBDBD', //muted
        s: '#2DC071', //success
        'p-1': '#4731D3',
        'p-2': '#CBF281',
        't-1': '#23A6F0', //blue
        't-2': '#737373', //gray
        't-3': '#252B42', //black
        't-4': '#23856D', //green
      },
    },
  },
  plugins: [forms],
}
