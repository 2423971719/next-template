/*
 * @Author: W·S
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-22 18:13:25
 * @Description: Description
 */
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
