/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oculos: {
          harmony: '#BFCEBB',
          aqua: '#04808D',
          oip: '#BBDDE6',
          peppa:'#E4D5D3',
          lightgrey:'#F5F5F5',
          lightsage:'#DFE9E0',
          lightersage:'#F1F6F3',
          lightoip:'#EBF5F8',
          piglet:'#FFF3F2',
          hvit:'white',
        },
      },
      gridTemplateRows: {
        // Simple 8 row grid
       '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
    content: {
      'arrowwhite': 'url("/icons/arrow-w.svg")',
      'arrowblack': 'url("/icons/arrow-b.svg")',
      'corner-tl': 'url("/icons/element-aqua.svg")',
      'line': 'url("/icons/line_element.svg")',
      'chevron-circle': 'url("/icons/circle-chevron.svg")',
      'quote': 'url("/icons/icon_quote.svg")',
    },
    listStyleType: {
      square: 'square',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),    
  ],
}
