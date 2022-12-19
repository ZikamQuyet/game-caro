import React from "react";
import styled from "styled-components";
interface IModal {
  children: any;
}
const ModalStyles = styled.div``;
const Modal: React.FC<IModal> = ({ children }) => {
  return <ModalStyles>{children}</ModalStyles>;
};

export default Modal;
