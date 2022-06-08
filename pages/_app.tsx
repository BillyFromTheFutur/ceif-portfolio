import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { Html } from 'next/document'
import useWindowDimensions from '../components/winSize'
import SizeScreen from './size'

function MyApp({ Component, pageProps }: AppProps) {
  const { height, width } = useWindowDimensions();
  if (width < 1150) {
    return <SizeScreen />

  }
  return (<>
    <Head>
      <link
        href="../asset/AgaveRegularFontW.ttf"
        rel="stylesheet"
      />
      <link
        href="../asset/AgaveRegularFontCM.ttf"
        rel="stylesheet"
      />
      <link
        href="../asset/AgaveRegularFontWC.ttf"
        rel="stylesheet"
      />
      <link
        href="../asset/AgaveRegularFontC.ttf"
        rel="stylesheet"
      />
    </Head>


    <Component {...pageProps} />
  </>)
}

export default MyApp
