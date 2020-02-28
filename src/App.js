import React from "react";

import GameContextProvider from "./context/GameContext";
import ConfigContextProvider from "./context/ConfigContext";
import ResultContextProvider from "./context/ResultContext";

import Routes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ConfigContextProvider>
        <ResultContextProvider>
          <GameContextProvider>
            <Header />
            <Routes />
          </GameContextProvider>
        </ResultContextProvider>
      </ConfigContextProvider>
    </>
  );
}

export default App;
