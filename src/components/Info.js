import React, { useState } from "react";
import { Box, Flex, List, ListItem, ListIcon, Text, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Modal from "./Modal";

const Info = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        About TechTrek
      </Text>
      <Text mb={4}>
        TechTrek is a quiz app designed for Computer Science students to brush up on their concepts for upcoming placements. With our unique voice-based quiz app, you can enhance your knowledge and skills in an interactive and engaging manner.
      </Text>
      <Flex align="center">
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Interactive and engaging quiz experience
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Voice-based functionality for hands-free learning
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Comprehensive coverage of Computer Science concepts
          </ListItem>
        </List>
        <Button onClick={handleOpenModal}>Start Quiz</Button>
      </Flex>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </Box>
  );
};

export default Info;
