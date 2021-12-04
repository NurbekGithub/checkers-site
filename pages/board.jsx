import { Image } from "@chakra-ui/image";
import {
  Box,
  Heading,
  List,
  ListItem,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { client } from "../contentClient";

export default function BoardPage(props) {
  const { members } = props;
  return (
    <Box>
      <Heading mb={8}>Правление</Heading>
      <List>
        {members.items.map((member) => (
          <ListItem key={member.sys.id} border="1px solid" borderColor="gray.200">
            <HStack spacing={12}>
              <Image w={100} alt={member.fields.fio} src={member.fields.photo.fields.file.url} size="sm" />
              <Stack>
                <Heading as="h6" size="md">{member.fields.fio} ({member.fields.country})</Heading>
                <Text>{member.fields.title}</Text>
              </Stack>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export async function getStaticProps() {
  const members = await client.getEntries({
    content_type: "boardMember",
    order: "fields.order",
  });
  return {
    props: {
      members,
    },
    revalidate: 1,
  };
}
