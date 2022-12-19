import React, { useState } from "react";
import styled from "styled-components";
import { calculateWinner } from "../utils/calculateWinner";
import Board from "./Board";
import Button from "./Button";

const GameStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .winner {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
const Game: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index: any) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) {
      return;
    }
    boardCopy[index] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <GameStyles>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && (
        <div className="winner">
          Winner is:{" "}
          <span style={{ color: `${winner === "X" ? "blue" : "red"}` }}>
            {winner}
          </span>
        </div>
      )}
      <Button
        onClick={handleResetGame}
        padding="20px 30px"
        borderRadius="8px"
        bgColor="green"
      >
        Reset game
      </Button>
    </GameStyles>
  );
};

export default Game;
