import { Dispatch, ReactNode, SetStateAction } from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { theme } from "../../../app/styles/Theme";

interface ModalProps {
 children?: ReactNode;
 className?: string;
 modalIsOpen?: boolean;
 setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = (props: ModalProps) => {
 const {
  children,
  className,
  modalIsOpen,
  setModalIsOpen,
 } = props;
 const onCloseModal = () => setModalIsOpen(false);
 const onKeyCloseModal = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
   onCloseModal();
  }
 };
 const onContentClick = (e?: MouseEvent) => {
  if (e) {
   e.stopPropagation();
  }
 };
 if (!modalIsOpen) {
  return null;
 }
 return (
  <StyledModal
   // onClick={onCloseModal}
   className={className}
  >
   <ModalCard>
    {
     <>
      <ModalButton onClick={onCloseModal}>
       close
      </ModalButton>
      {children}
     </>
    }
   </ModalCard>
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
 position: relative;
 padding: var(--indent-40);
 border-radius: var(--b-rad-small);
 box-sizing: border-box;
 @media ${theme.media.mobile} {
  width: 100%;
 }
`;
const ModalButton = styled(Button)`
 position: absolute;
 top: 10px;
 right: 10px;
`;
