/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        pp_bsbg: "#CACACA",
        secondary: "#ffffff",
      },
      fontFamily: {
        'sf-pro': ['SF Pro', 'sans-serif'],
        'sf-pro-display-black': ['SF-Pro-Display-Black', 'sans-serif'],
        'sf-pro-display-bold': ['SF-Pro-Display-Bold', 'sans-serif'],
        'sf-pro-display-heavy': ['SF-Pro-Display-Heavy', 'sans-serif'],
        'sf-pro-display-light': ['SF-Pro-Display-Light', 'sans-serif'],
        'sf-pro-display-medium': ['SF-Pro-Display-Medium', 'sans-serif'],
        'sf-pro-display-regular': ['SF-Pro-Display-Regular', 'sans-serif'],
        'sf-pro-display-semibold': ['SF-Pro-Display-Semibold', 'sans-serif'],
        'sf-pro-display-thin': ['SF-Pro-Display-Thin', 'sans-serif'],
        'sf-pro-display-ultralight': ['SF-Pro-Display-Ultralight', 'sans-serif']
      },
    },
    plugins: [],
  },
};
