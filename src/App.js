import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Info from "./components/Info";
import Modal from "./components/Modal";
import Quiz from "./Quiz";

function App() {
  const [numQuestions, setNumQuestions] = useState("");
  const [timeLimit, setTimeLimit] = useState("");

  useEffect(() => {
    alanBtn({
      key: '44fc86e8f2933fe0456f47e21fb0ce962e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'startQuiz') {
          setNumQuestions(commandData.numQuestions);
          setTimeLimit(commandData.timeLimit);
        }
      },
    });
  }, []);

  return (
    <Router>
      <ChakraProvider>
        <Header />
        <Info />
        <Routes>
          <Route
            path="/"
            element={<Modal onClose={() => {}} />} // Update the onClose function as needed
          />
          <Route
            path="/quiz"
            element={<Quiz numQuestions={numQuestions} time={timeLimit} />}
          />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
