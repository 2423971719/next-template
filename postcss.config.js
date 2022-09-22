/*
 * @Author: W·S
 * @Date: 2022-09-19 21:48:03
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-21 23:47:33
 * @Description: Description
 */

module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
