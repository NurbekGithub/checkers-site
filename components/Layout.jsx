import { Footer } from "./Footer";
import { Header } from "./Header";
import NextNProgress from 'nextjs-progressbar';
import { Container, Stack } from "@chakra-ui/layout";
import Head from 'next/head'

export function Layout({children}) {
  return (
    <Stack h="100vh" alignItems="center">
      <Head>
        <title>Федерация шашек Республики Казахстан</title>
      </Head>
      <NextNProgress />
      <Header width="100%"/>
      <Container maxW="840px" flex={1}>{children}</Container>
      <Footer />
    </Stack>
  )
}