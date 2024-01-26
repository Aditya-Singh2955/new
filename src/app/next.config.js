const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          outputPath: 'static/media',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },
};
