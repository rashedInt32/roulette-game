import React from "react";

const BoardCell = ({ value, color, size, result }) => {
  const style = {
    'backgroundColor': color,
    opacity: '0.7'
  };

  const resultClass = value === result ? "hit" : "";

  return (
    <div className={`board-cell ${size || ""} ${resultClass}`} style={style}>
      <span>{value}</span>
    </div>
  );
};
export default BoardCell;
