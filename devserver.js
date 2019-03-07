const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const browserSync = require('browser-sync');

// Set `process.env.NODE_ENV` BEFORE calling the Webpack CLI
process.env.NODE_ENV = 'development';

// Some options I'm using in my Webpack config function
const options = {
  contentBase: './dist',
  hot: true, // should always be true --- BrowserSync without HMR is pretty pointless
  devServer: true,
  host:'localhost',
  browserSync: true
};

// Get the Webpack config (with options)
const config = require('./webpack.config.js');
const bundler = webpack(config);

//Run BrowserSync and use middleware for HMR
const middleware = [
  webpackDevMiddleware(bundler, {
    publicPath: config.output.publicPath,
    index: 'index.html',
    stats: {colors: true}
  })
];

if (options.hot === true) {
  // bundler should be the same as above
  middleware.push(webpackHotMiddleware(bundler));
}

browserSync({
  port: 3002,
  notify: false,
  server: {
    baseDir: config.output.path,
    middleware
  },
  files: [
  'css/*.css',
  '*.html',
  '*.htm',
  "js/.*js"
  ]
});
