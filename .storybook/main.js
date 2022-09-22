/*
 * @Author: W·S
 * @Date: 2022-09-21 10:24:37
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-22 11:30:37
 * @Description: Description
 */
module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "storybook-addon-sass-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
        rule: {
          test: /\.(scss|sass)$/i,
        },
        loadSassAfterPostCSS: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
