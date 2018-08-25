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
        { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
        { test: /\.(gif|png|jpe?g|svg)$/, loaders: ['url-loader'] },
        { test: /\.mp4$/, loader: 'url?limit=10000&mimetype=video/mp4' },
        { test: /\.html$/, loader: 'html-loader?attrs[]=video:src' },
        {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
        },
            {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file?name=public/style/css/assets/fonts/[name].[ext]'
                },
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
