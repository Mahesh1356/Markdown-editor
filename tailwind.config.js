// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  corePlugins: {
    preflight: false, 
  },
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
  ],
  extend: {
    height: {
      '128': '32rem',
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
     },
  }
}
