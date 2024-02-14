import { memo } from "react";

import styled from "styled-components";
import { AppLink } from "../../../../shared/ui/AppLink/AppLink";

interface NavbarProps {
 className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
 const { className } = props;
 return (
  <StyledNavbar className={className}>
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
  </StyledNavbar>
 );
});
const StyledNavbar = styled.nav`
 display: flex;
 align-content: center;
 justify-content: end;

 a {
  margin-right: 20px;
 }
`;
