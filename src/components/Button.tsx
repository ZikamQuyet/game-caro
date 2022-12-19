import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  onClick: any;
  padding?: string;
  borderRadius?: string;
  bgColor?: string;
}

const ButtonStyles = styled.button<IButton>`
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bgColor};
  cursor: pointer;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const Button: React.FC<IButton> = ({
  children,
  onClick,
  padding,
  borderRadius,
  bgColor,
}) => {
  return (
    <ButtonStyles
      onClick={onClick}
      padding={padding}
      borderRadius={borderRadius}
      bgColor={bgColor}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
