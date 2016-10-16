module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { test: /\.js$/, loaders: ['babel?' + JSON.stringify({ presets: ['react', 'es2015', 'stage-0'] })], exclude: /node_modules/ },
        { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
