const path = require("path");
const motaCssConfig = require("./mota-css.config.js");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        module: {
          ...webpackConfig.module,
          rules: [
            ...webpackConfig.module.rules,
            {
              test: /\.(js|ts|jsx|tsx)$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: "webpack-mota-css-loader",
                  options: {
                    config: motaCssConfig,
                    output: path.resolve(__dirname, "./public/auto-styles.css"),
                    minimize: false,
                    postcssPlugins: [],
                  },
                },
              ],
            },
          ],
        },
      };
    },
  },
};
