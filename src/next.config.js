const withSass = require("@zeit/next-sass");

const nextConfig = {
  distDir: "../.next",
  publicRuntimeConfig: {
    mySecret: "clientsecret",
    SERVICES_API_KEY2: "MORE",
    SERVICES_API_KEY: process.env.NEXT_PUBLIC_TACO
  }
};

const sassConfig = {
  test: /\.(eot|otf|ttf|woff|woff2)$/,
  use: {
    loader: "url-loader",
    options: {
      limit: 100000,
      name: "[name].[ext]",
      outputPath: "static/fonts",
      publicPath: "../fonts"
    }
  }
};

module.exports = withSass({
  ...nextConfig,
  webpack(config) {
    config.module.rules.push(sassConfig);

    return config;
  }
});
