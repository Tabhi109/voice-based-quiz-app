import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Select } from "@chakra-ui/react";

const Modal = ({ onClose }) => {
  const [numQuestions, setNumQuestions] = useState("");
  const [timeLimit, setTimeLimit] = useState("");

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleTimeLimitChange = (event) => {
    setTimeLimit(event.target.value);
  };

  const handleSubmit = () => {
    // Logic to handle form submission
    // Redirect to Quiz.js or perform any other actions
  };

  return (
    <Box p={4}>
      <FormControl mb={4}>
        <FormLabel>How many questions do you want to set up in your quiz?</FormLabel>
        <Select value={numQuestions} onChange={handleNumQuestionsChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </Select>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>How much time do you want to set up for this quiz?</FormLabel>
        <Select value={timeLimit} onChange={handleTimeLimitChange}>
          <option value="10">10 min</option>
          <option value="20">20 min</option>
          <option value="30">30 min</option>
        </Select>
      </FormControl>
      <Button colorScheme="teal" onClick={handleSubmit}>
        Let's Go
      </Button>
    </Box>
  );
};

export default Modal;
