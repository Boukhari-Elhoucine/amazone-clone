module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazone_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
