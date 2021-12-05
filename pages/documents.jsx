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
      <ListItem>
        <Link href="/Official-Rules-of-the-game.pdf" download="Official-Rules-of-the-game.pdf" color="teal.500">Official-Rules-of-the-game.pdf</Link>
      </ListItem>
      <ListItem>
        <Link href="/Rules-of-the-Rapid-and-Blitz-games.pdf" download="Rules-of-the-Rapid-and-Blitz-games.pdf" color="teal.500">Rules-of-the-Rapid-and-Blitz-games.pdf</Link>
      </ListItem>
      <ListItem>
        <Link href="/Table_of_draw_745-03.07.2017-1.pdf" download="Table_of_draw_745-03.07.2017-1.pdf" color="teal.500">Table_of_draw_745-03.07.2017-1.pdf</Link>
      </ListItem>
      <ListItem>
        <Link href="/Правила игры, регламент проведения соревнований.docx" download="Правила игры, регламент проведения соревнований.docx" color="teal.500">Правила игры, регламент проведения соревнований.docx</Link>
      </ListItem>
      <ListItem>
        <Link href="/Таблица-дебютов-жен-2016.pdf" download="Таблица-дебютов-жен-2016.pdf" color="teal.500">Таблица-дебютов-жен-2016.pdf</Link>
      </ListItem>
    </List>
  </Box>
  )
}