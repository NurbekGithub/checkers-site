import { Box, Heading, List, ListItem } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

export default function DocumentsPage() {
  return (<Box>
    <Heading>
      Документы
    </Heading>
    <List mt={2}>
      <ListItem>
        <Link href="/test.docx" download="test.docx" color="teal.500">Тестовый документ</Link>
      </ListItem>
    </List>
  </Box>
  )
}