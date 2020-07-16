const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');

const { BUILD } = require('./configs/build');
const base = require('./configs/base');
const commonTemplate = require('../src/template');
const templates = require('../src/template/templates');

const generateHtmlPlugins = (list = []) => {
  return list.map((item) => {
    const commonTmpl = commonTemplate(item);
    return new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'src', item.input, `${item.name}.html`),
      filename: `./${item.output}/index.html`,
      title: item.html.title,
      inject: false,
      hash: true,
      files: {
        js: item.js || [],
        css: item.css || [],
      },
      tags: {
        header: commonTmpl.header,
        footer: commonTmpl.footer
      },
      minify: {collapseWhitespace: true },
    });
  });
}

const htmlWebpackPlugin = generateHtmlPlugins(templates);

module.exports = merge(base, {
  mode: 'development', // webpack mode
  devtool: '#source-map', // source map
  output: {
    path: BUILD.BUILD_PATH,
    filename: `[name]${BUILD.FILENAME_SUFFIX}`,
    publicPath: process.env.WEBPACK_DEV ? '' : BUILD.PUBLIC_PATH,
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/',
          to: 'assets/',
        },
      ],
    }),
    ...htmlWebpackPlugin,
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    inline: true,
    hot: true,
    host: "localhost",
    port: 5000,
    open: true,
  },
});
