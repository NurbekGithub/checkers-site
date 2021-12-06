import { Box, Heading, Text } from "@chakra-ui/layout";

export function Footer() {
  return (
    <Box as="footer" w="100%" bg="teal.900" color="white" p={4}>
      <Heading size="md" textAlign="center">
        Федерация шашек Республики Казахстан
      </Heading>
      <Text textAlign="center">
        &#169; Copyright 2021, All Rights Reserved.
      </Text>
    </Box>
  );
}
