/*
 * @Author: W·S
 * @Date: 2022-09-08 14:31:37
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-22 18:12:47
 * @Description: Description
 */
/** @type {import('tailwindcss').Config} */

const colors = {
  theme: "#4F79A1", // 蓝色
  hoverTheme: "#385877",
  E7F3FF: "#E7F3FF",
  495057: "#495057",
  EBEDF2: "#EBEDF2",
};
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
