//const path = require('path');

module.exports = {
  experimental: {
  },

  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.$/,
  //     use: 'raw-loader',
  //   });
  //   return config;
  // }

  // webpack: (config, { webpack, buildId, isServer }) => {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       'process.env.CONFIG_BUILD_ID': JSON.stringify(buildId)
  //     })
  //   );
  //   if (isServer) {
  //     return {
  //       ...config,
  //       entry() {
  //         return config.entry().then((entry) => ({
  //           ...entry,
  //           client: path.resolve(process.cwd(), 'client-js/index.js')
  //         }));
  //       }
  //     };
  //   }

  //   return config
  // },
};
