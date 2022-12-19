import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

interface IBoard {
  cells: null[] | string[];
  onClick?: any;
}
const BoardStyles = styled.div`
  margin: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Board: React.FC<IBoard> = ({ cells, onClick }) => {
  return (
    <BoardStyles>
      {cells.map((item, index) => (
        <Cell key={index} value={item} onClick={() => onClick(index)}></Cell>
      ))}
    </BoardStyles>
  );
};

export default Board;
