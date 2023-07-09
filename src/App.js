import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import Header from "./components/Header";
import Info from "./components/Info";
import Quiz from "./Quiz";
import Modal from "./components/Modal";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    alanBtn({
      key: 'YOUR_ALAN_AI_API_KEY',
      onCommand: (commandData) => {
        if (commandData.command === 'startQuiz') {
          setIsModalOpen(true);
        }
      },
    });
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStartQuiz = (data) => {
    setQuizData(data);
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quiz"
            element={<QuizPage quizData={quizData} />}
          />
        </Routes>
        {isModalOpen && <Modal onClose={handleCloseModal} onStartQuiz={handleStartQuiz} />}
      </ChakraProvider>
    </Router>
  );
}

const Home = () => (
  <>
    <Header />
    <Info />
  </>
);

const QuizPage = ({ quizData }) => (
  <>
    <Header />
    {quizData ? (
      <Quiz numQuestions={quizData.numQuestions} timeLimit={quizData.timeLimit} />
    ) : (
      <p>Loading quiz...</p>
    )}
  </>
);

export default App;
