// postcss.config.cjs (Corrected)
module.exports = {
  plugins: {
    // We explicitly tell PostCSS to use the plugin package.
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {},
  },
};