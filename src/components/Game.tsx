import React, { useState } from "react";
import styled from "styled-components";
import { calculateWinner } from "../utils/calculateWinner";
import Board from "./Board";
import Button from "./Button";

const GameStyles = styled.div`
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
  const [board, setBoard] = useState(Array(3).fill(Array(3).fill(null)));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  // calculateWinner(board);

  const handleClick = (i: any, j: any) => {
    const boardCopy = JSON.parse(JSON.stringify(board));
    // if (winner || boardCopy[index]) {
    //   return;
    // }
    // boardCopy[index] = xIsNext ? "X" : "O";
    // boardCopy.forEach((item1, index1) => {
    //   if (index1 === i) {
    //     item1.forEach((item2: any, index2: any) => {
    //       if (index2 === j) item2 = "X";
    //     });
    //   }
    // });
    if (winner || boardCopy[i][j]) return;
    for (let index1 = 0; index1 < boardCopy.length; index1++) {
      if (index1 === i) {
        for (let index2 = 0; index2 < boardCopy[index1].length; index2++) {
          if (index2 === j) {
            boardCopy[index1][index2] = xIsNext ? "X" : "O";
          }
        }
      }
    }

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(3).fill(Array(3).fill(null)));

    // setXIsNext(true);
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
