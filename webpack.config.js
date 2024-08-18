const path = require('path');

module.exports = {
  entry: './src/index.js',  // エントリーポイントの設定
  output: {
    filename: 'bundle.js',  // 出力ファイル名
    path: path.resolve(__dirname, 'dist')  // 出力先ディレクトリ
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Babelローダーを使用
        }
      }
    ]
  },
  // nodeオプションの設定をここに追加します
  node: {
    __dirname: true,  // __dirnameを有効にする
    __filename: true,  // __filenameを有効にする
    global: true,  // グローバルオブジェクトを有効にする
    process: true,  // processオブジェクトを有効にする
    Buffer: true  // Bufferオブジェクトを有効にする
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']  // 拡張子の設定
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),  // 開発サーバのコンテンツの場所
    compress: true,  // Gzip圧縮を有効にする
    port: 9000  // 開発サーバのポート番号
  }
};
