import { memo, useState } from "react";
import styled from "styled-components";
import { Drawer } from "../../Drawer/Drawer";
import { BurgerButton } from "../../../shared/ui/BurgerButton/BurgerButton";
import { theme } from "../../../app/styles/Theme";

interface MobileMenuProps {}

export const MobileNav = memo((props: MobileMenuProps) => {
 const [drawerIsOpen, setDrawerIsOpen] =
  useState<boolean>(false);
 const onToggleDrawer = () => {
  setDrawerIsOpen((prev) => !prev);
 };
 return (
  <StyledMobileNav>
   <BurgerButton
    isOpen={drawerIsOpen}
    onClick={onToggleDrawer}
   />
   <Drawer isOpen={drawerIsOpen} onClick={onToggleDrawer} />
  </StyledMobileNav>
 );
});
const StyledMobileNav = styled.div`
 display: none;
 margin-right: 20px;
 @media ${theme.media.mobile} {
  display: block;
 }
`;
