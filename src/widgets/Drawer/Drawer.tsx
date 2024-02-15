import { memo } from "react";
import styled from "styled-components";
import { AppLink } from "../../shared/ui/AppLink/AppLink";

interface DrawerProps {
 className?: string;
}

export const Drawer = memo((props: DrawerProps) => {
 const { className } = props;
 return (
  <StyledDrawer className={className}>
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
const StyledDrawer = styled.nav`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 position: fixed;
 right: 0;
 top: 0%;
 left: 0;
 background: var(--card-color);
`;
