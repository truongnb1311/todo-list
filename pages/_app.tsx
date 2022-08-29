import '../styles/globals.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/common/Layout'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return(
   <Layout>
  <Component {...pageProps} />
  </Layout>)

}

export default MyApp
