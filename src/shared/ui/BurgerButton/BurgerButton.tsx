import { memo } from "react";
import styled, { css } from "styled-components";

interface BurgerButtonProps {
 isOpen?: boolean;
 onClick?: () => void;
}

export const BurgerButton = memo(
 (props: BurgerButtonProps) => {
  return (
   <StyledBurgerButton {...props}>
    <span></span>
   </StyledBurgerButton>
  );
 }
);

const StyledBurgerButton = styled.button<BurgerButtonProps>`
 border: none;
 outline: none;
 background: none;
 cursor: pointer;
 span {
  display: inline-block;
  position: relative;
  content: "";
  margin: 16px;
  width: 36px;
  height: 2px;
  border-radius: var(--b-rad-small);
  background: var(--accent-color);
  &:before,
  &:after {
   position: absolute;
   content: "";
   width: 36px;
   height: 2px;
   border-radius: var(--b-rad-small);
   background: var(--accent-color);
   transform: translateX(-50%);
  }
  &:before {
   top: -10px;
  }
  &:after {
   top: 10px;
  }
 }
 ${(props: BurgerButtonProps) =>
  props.isOpen &&
  css<BurgerButtonProps>`
   span {
    background: transparent;
    transition-delay: var(--transition-delay);
    &:before {
     top: 12px;
     transform: rotate(45deg) translateX(-50%);
     transition-delay: var(--transition-delay);
    }
    &:after {
     top: -12px;
     transform: rotate(-45deg) translateX(-50%);
     transition-delay: var(--transition-delay);
    }
   }
  `}
`;
