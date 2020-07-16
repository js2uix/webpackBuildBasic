module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'modules': false,
        'targets': {
          'browsers': ['last 2 Chrome versions'],
        },
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-object-assign",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-strict-mode"
  ],
};
