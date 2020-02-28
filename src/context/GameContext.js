import React, { createContext, useState, useEffect } from "react";

import { getNextGame } from "../api";

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [nextGame, setNextGame] = useState({});
  const [loadingGame, setLoadingGame] = useState(true);

  useEffect(() => {
    fetchNextGame();
  }, []);

  const fetchNextGame = async () => {
    const [err, game] = await getNextGame();
    if (err) return;

    setNextGame(game.data);
    setLoadingGame(false);
  };

  /**
   * updateGame
   * @desc update next game details from other files
   * and set context state when getNextGame api call
   */
  const updateGame = data => setNextGame(data);

  return (
    <GameContext.Provider value={{ nextGame, updateGame }}>
      {!loadingGame ? children : null}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
