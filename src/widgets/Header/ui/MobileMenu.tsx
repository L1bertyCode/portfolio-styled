import { memo } from "react";
import styled from "styled-components";
import { Navbar } from "../../Navbar";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";
import { Drawer } from "../../Drawer/Drawer";

interface MobileMenuProps {
 className?: string;
}

export const MobileNav = memo((props: MobileMenuProps) => {
 const { className } = props;
 return (
  <StyledMobileNavWrapper className={className}>
   <StyledBurgerButton>
    <span></span>
   </StyledBurgerButton>
   <Drawer />
  </StyledMobileNavWrapper>
 );
});
const StyledMobileNavWrapper = styled.div``;

const StyledBurgerButton = styled.button`
 position: relative;
 content: "";
 margin: 16px;
 width: 36px;
 height: 2px;
 border: none;
 outline: none;
 border-radius: var(--b-rad-small);
 background: var(--accent-color);
 cursor: pointer;

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
 &:hover {
  background: transparent;
  transition-delay: var(--transition-delay);
  &:before {
   top: 8.5px;
   transform: rotate(45deg) translateX(-50%);
   transition-delay: var(--transition-delay);
  }
  &:after {
   top: -8.5px;
   transform: rotate(-45deg) translateX(-50%);
   transition-delay: var(--transition-delay);
  }
 }
`;
