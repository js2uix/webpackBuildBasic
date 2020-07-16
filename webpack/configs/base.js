

const ENV = require('./build');
const entryLoader = require('./entry');

/**
 * TODO... grob 사용을 할 수 있었으면 좋겠다.
 * @param {number} depth 
 */
const getMoreEntry = (depth) => {
  const result = [];
  const glob = []; 
  for (let i = 0; i < depth; i++) {
    result.push(entryLoader(ENV.PATHS.APP_DIR, `${glob.join('/')}/*.js`));
    result.push(entryLoader(ENV.PATHS.APP_DIR, `${glob.join('/')}/*.scss`));
    glob.push('**');
  }
  result.push(entryLoader(ENV.PATHS.SRC_DIR, `assets/**/*.js`));
  result.push(entryLoader(ENV.PATHS.SRC_DIR, `assets/**/*.scss`));
  return result;
}

module.exports = {
  entry: (() => Object.assign({}, ...getMoreEntry(10)))(),
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: [".js", ".json", ".jsx", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
}