import React, { createContext, useState } from "react";

export const ResultContext = createContext();

const ResultContextProvider = ({ children }) => {
  const [gameResult, setGameResult] = useState(null);

  /**
   * updateGame
   * @desc update next game details from other files
   * and set context state when game api call
   */
  const updateResult = data => setGameResult(data);

  return (
    <ResultContext.Provider value={{ gameResult, updateResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
