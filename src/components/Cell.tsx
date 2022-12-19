import React from "react";
import styled from "styled-components";
interface ICell {
  value?: string | null;
  onClick?: any;
}
const CellStyles = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  margin: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const Cell: React.FC<ICell> = ({ value, onClick = () => {} }) => {
  return (
    <CellStyles
      onClick={onClick}
      style={{ color: `${value === "X" ? "blue" : "red"}` }}
    >
      {value}
    </CellStyles>
  );
};

export default Cell;
