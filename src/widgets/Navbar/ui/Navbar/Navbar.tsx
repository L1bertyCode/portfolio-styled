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
   <AppLink className={"link"} to="/">
    Home
   </AppLink>
   <AppLink className={"link"} to="/projects">
    Projects
   </AppLink>
   <AppLink className={"link"} to="/contacts">
    Contacts
   </AppLink>
  </StyledNavbar>
 );
});
const StyledNavbar = styled.nav`
 margin-right: 0;
 display: flex;
 align-content: center;
 justify-content: end;

 a {
  margin-right: 10px;
 }
`;
