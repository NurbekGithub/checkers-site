import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return (
    <ChakraProvider>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
