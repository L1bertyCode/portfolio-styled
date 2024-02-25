import { memo } from "react";
import styled, { css } from "styled-components";
import { AppLink } from "../../shared/ui/AppLink/AppLink";
import { BurgerButton } from "../../shared/ui/BurgerButton/BurgerButton";

interface DrawerProps {
 isOpen?: boolean;
 onClick?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
 return (
  <StyledDrawer {...props}>
   <StyledBurgerButton isOpen />
   <AppLink variant="clear" className={"link"} to="/">
    Home
   </AppLink>
   <AppLink
    variant="clear"
    className={"link"}
    to="/projects"
   >
    Projects
   </AppLink>
   <AppLink
    variant="clear"
    className={"link"}
    to="/contacts"
   >
    Contacts
   </AppLink>
  </StyledDrawer>
 );
});

const StyledDrawer = styled.nav<DrawerProps>`
 position: fixed;
 right: 0;
 top: 0;
 left: 0;
 z-index: 11;
 padding: 20px;
 background: var(--card-color);
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 transform: translateY(-100%);
 transition: var(--transition-delay);
 ${(props: DrawerProps) =>
  props.isOpen === true &&
  css<DrawerProps>`
   transform: translateY(0);
   transition: var(--transition-delay);
  `}
`;
const StyledBurgerButton = styled(BurgerButton)`
 position: absolute;
 top: 20px;
 right: 20px;
`;
