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
  grid-template-columns: repeat(10, 1fr);
  /* margin: 30px 0; */
`;

const Board: React.FC<IBoard> = ({ cells, onClick }) => {
  return (
    <BoardStyles>
      {cells.map((item: any, i) => (
        <div className="colum" key={i}>
          {item.map((ele: any, j: any) => (
            <Cell key={j} value={ele} onClick={() => onClick(i, j)}></Cell>
          ))}
        </div>
      ))}
    </BoardStyles>
  );
};

export default Board;
