import { Footer } from "./Footer";
import { Header } from "./Header";
import NextNProgress from 'nextjs-progressbar';
import { Container, Stack } from "@chakra-ui/layout";

export function Layout({children}) {
  return (
    <Stack h="100vh" alignItems="center">
      <NextNProgress />
      <Header width="100%"/>
      <Container maxW="840px" flex={1}>{children}</Container>
      <Footer />
    </Stack>
  )
}