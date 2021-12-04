import { Box, Heading } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Tr, Td, Th } from "@chakra-ui/table";
import { client } from "../contentClient";

export default function PlayersPage(props) {
  const {players} = props;
  return <Box>
    <Heading mb={8}>
      Спортсмены
    </Heading>
    <Table>
      <Thead>
        <Tr>
          <Th>ФИО</Th>
          <Th>Дата рождения</Th>
          <Th>Звание</Th>
        </Tr>
      </Thead>
      <Tbody>
        {players.items.map(player => (
          <Tr key={player.sys.id}>
            <Td>{player.fields.fio}</Td>
            <Td>{player.fields.dob}</Td>
            <Td>{player.fields.title}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
}

export async function getStaticProps() {
  const players = await client.getEntries({
    content_type: "player",
  });
  return {
    props: {
      players,
    },
    revalidate: 1,
  };
}