import React, { useState } from "react";
import { Box, Heading, Text, Radio, RadioGroup, Button } from "@chakra-ui/react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleNextQuestion = () => {
    // Logic to handle moving to the next question
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption("");
  };

  // Replace this with your actual quiz data or API call
  const quizData = [
    {
      question: "Question 1",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      question: "Question 2",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    // Add more questions and options as needed
  ];

  const currentQuizQuestion = quizData[currentQuestion];

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Quiz
      </Heading>
      {currentQuizQuestion ? (
        <>
          <Text mb={4}>{currentQuizQuestion.question}</Text>
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            {currentQuizQuestion.options.map((option) => (
              <Radio key={option} value={option}>
                {option}
              </Radio>
            ))}
          </RadioGroup>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            Next
          </Button>
        </>
      ) : (
        <Text>No more questions.</Text>
      )}
    </Box>
  );
};

export default Quiz;
