import { Box, Text } from "@chakra-ui/layout";

export function Footer() {
  return (
    <Box as="footer" w="100%" bg="teal.900" color="white" p={4}>
      <Text textAlign="center">&#169; Copyright 2021, All Rights Reserved.</Text>
    </Box>
  );
}
