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
    },
    screens: {
      'sm': '650px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
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
