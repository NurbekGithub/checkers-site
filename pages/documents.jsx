import { Box, Heading, List, ListItem } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

export default function DocumentsPage() {
  return (<Box>
    <Heading>
      Документы
    </Heading>
    <List mt={2}>
      <ListItem>
        <Link href="/Календарь 2022 год ШАШКИ.pdf" download="Календарь 2022 год ШАШКИ.pdf" color="teal.500">Календарь 2022 год ШАШКИ.pdf</Link>
      </ListItem>
    </List>
  </Box>
  )
}