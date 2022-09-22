/*
 * @Author: W·S
 * @Date: 2022-09-18 23:19:07
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-20 14:13:48
 * @Description: Description
 */
// used for SSR (getServerSideProps)

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require("path");

const config = {
  debug: process.env.NODE_ENV === "development",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["en-US", "zh-CN"],
  },
  localePath: resolve("./public/locales"),
};
module.exports = config;
