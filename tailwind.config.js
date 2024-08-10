module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'goldman': ['"Goldman"', 'sans-serif'],
      },
      fontWeight: {
        'regular': 400,
        'bold': 700,
      },
    },
  },
  plugins: [],
};
