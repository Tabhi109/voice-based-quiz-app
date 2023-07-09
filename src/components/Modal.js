import React, { useState } from "react";
import { Box, FormControl, FormLabel, Select, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Modal = ({ onClose, onStartQuiz }) => {
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState("");
  const [timeLimit, setTimeLimit] = useState("");

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleTimeLimitChange = (event) => {
    setTimeLimit(event.target.value);
  };

  const handleSubmit = () => {
    // Close the modal
    onClose();

    // Pass the selected number of questions and time limit to the parent component
    onStartQuiz({ numQuestions, timeLimit });
  };

  return (
    <Box p={4}>
      <FormControl mb={4}>
        <FormLabel>How many questions do you want to set up in your quiz?</FormLabel>
        <Select value={numQuestions} onChange={handleNumQuestionsChange} color="black">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </Select>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>How much time do you want to set up for this quiz?</FormLabel>
        <Select value={timeLimit} onChange={handleTimeLimitChange} color="black">
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
