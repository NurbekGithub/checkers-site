import { Box, Heading, Link, Text } from "@chakra-ui/layout";

export default function ContactsPage() {
  return <Box>
    <Heading mb={4}>
      Контакты
    </Heading>

    <Text>email: <Link color="teal.500" href="mailto:Draughtskz@mail.ru">Draughtskz@mail.ru</Link></Text>
  </Box>
}