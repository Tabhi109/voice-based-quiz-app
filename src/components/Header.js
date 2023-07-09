import React, { useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import Modal from "./Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box bg="navy" color="white" p={4}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="xl">
          TechTrek
        </Heading>
        <Button colorScheme="teal" variant="solid" onClick={handleOpenModal}>
          Start a Quiz
        </Button>
      </Flex>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </Box>
  );
};

export default Header;
