module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
     extend: {
       screens: {
         'xs': {'max': '639px'}
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }