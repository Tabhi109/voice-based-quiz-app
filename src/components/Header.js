import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="navy" color="white" p={4}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="xl">
          TechTrek
        </Heading>
        <Button colorScheme="teal" variant="solid">
          Start a Quiz
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
