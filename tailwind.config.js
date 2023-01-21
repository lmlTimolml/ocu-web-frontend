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
          lightsage: '#DFE9E0',
          harmony: '#BFCEBB',
          aqua: '#01A1B1',
          oip: '#BBDDE6',
          peppa:'#E4D5D3',
          palemagenta:'#AB5099',
        },
      },
      content: {
        'arrowwhite': 'url("/icons/arrow-w.svg")',
        'arrowblack': 'url("/icons/arrow-b.svg")',
      },
    },
    listStyleType: {
      square: 'square',
    }
  },
  plugins: [],
}
