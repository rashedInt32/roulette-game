import React, { useContext } from "react";

import { ConfigContext } from "../context/ConfigContext";
import { ResultContext } from "../context/ResultContext";

import BoardCell from "../components/BoardCell";

function GameBoard() {
  const { config } = useContext(ConfigContext);
  const { gameResult } = useContext(ResultContext);

  return (
    <div className="game-board">
      <h4 className="title">Game Board</h4>
      <div className="cell-content">
        {config.map(item => (
          <BoardCell
            key={item.position}
            value={item.position}
            color={item.color}
            result={gameResult}
          />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
