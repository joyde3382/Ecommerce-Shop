module.exports = {
  content: [
    './pages/**/*.{html,js,ts}',
    './components/**/*.{html,js,ts}',
],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
