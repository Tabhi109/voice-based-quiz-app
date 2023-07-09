import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Header from "./components/Header";
import Info from "./components/Info";
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  useEffect(() => {
    alanBtn({
      key: '44fc86e8f2933fe0456f47e21fb0ce962e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'startQuiz') {
          
        }
      },
    });
  }, []);
  
  return (
    <ChakraProvider>
        <Header/>
        <Info/>
    </ChakraProvider>

      
    
  );
}

export default App;
