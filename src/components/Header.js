import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="navy" color="white" p={4}>
      <Heading as="h1" size="xl">
        TechTrek
      </Heading>
    </Box>
  );
};

export default Header;
