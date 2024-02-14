import { ReactNode } from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";

interface ModalProps {
 children?: ReactNode;
 className?: string;
 modalIsOpen?: boolean;
}

export const Modal = (props: ModalProps) => {
 const { children, className, modalIsOpen } = props;
 if (!modalIsOpen) {
  return null;
 }
 return (
  <StyledModal className={className}>
   <ModalCard>{children}</ModalCard>
  </StyledModal>
 );
};
const StyledModal = styled.div`
 position: fixed;
 width: 100%;
 height: 100vh;
 background: #00000099;
 z-index: 100000;
 display: flex;
 align-items: center;
 justify-content: center;
`;
const ModalCard = styled(Card)`
 padding: var(--indent-xxxl);
 border-radius: var(--b-rad-small);
`;
