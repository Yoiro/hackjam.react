const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "index.js",
    publicPath: "/dist/",
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".js", ".jsx", ".ts", ".tsx"]
  },
  stats: {
    chunks: false,
    colors: true,
    timings: true,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0'],
          plugins: ["transform-decorators-legacy"],
        },
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file' },
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
      {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
      {test: /(\.css|\.scss)$/, loaders: ['style', 'css', 'postcss', 'sass?sourceMap']}
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  postcss: function () {
    return [autoprefixer];
  }
};
