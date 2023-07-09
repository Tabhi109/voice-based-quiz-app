import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Radio, RadioGroup, Button, CircularProgress } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import quizData from "./QuizQuestions";

const Quiz = ({ numQuestions, time }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time * 60);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          setIsQuizOver(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion === numQuestions - 1) {
      setIsQuizOver(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption("");
    }
  };

  const currentQuizQuestion = quizData[currentQuestion];

  const displayTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const displayScore = () => {
    return ((score / numQuestions) * 100).toFixed(2);
  };

  const handleFinishQuiz = () => {
    navigate("/results", { state: { score: displayScore() } });
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Quiz
      </Heading>
      {isQuizOver ? (
        <>
          <Text>Your score: {displayScore()}%</Text>
          <Button colorScheme="teal" variant="solid" onClick={handleFinishQuiz}>
            Finish
          </Button>
        </>
      ) : (
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
          <Text mt={4}>
            Time Left: {displayTime()}
          </Text>
          <CircularProgress
            value={Math.floor((timeLeft / (time * 60)) * 100)}
            size="120px"
            mt={4}
            mx="auto"
          />
        </>
      )}
    </Box>
  );
};

export default Quiz;
