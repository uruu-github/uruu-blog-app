// config/webpack/environment.js

const { environment } = require('@rails/webpacker');
const path = require('path');

// modulesディレクトリを解決するための設定を追加
environment.config.resolve = {
  modules: [path.resolve(__dirname, '../../node_modules')],
  alias: {
    '@rails/ujs': path.resolve(__dirname, '../../node_modules/@rails/ujs')
  }
};

module.exports = environment;
