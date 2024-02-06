import { memo } from "react";

import styled from "styled-components";
import { AppLink } from "../../../../shared/ui/AppLink/AppLink";

import { Logo } from "../../../../shared/ui/Logo/Logo";

interface NavbarProps {
 className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
 const { className } = props;
 return (
  <StyledNavbar className={className}>
   <Logo className="logo"></Logo>
   <nav>
    <AppLink className={"link"} to="/">
     Home
    </AppLink>
    <AppLink className={"link"} to="/projects">
     Projects
    </AppLink>
    <AppLink className={"link"} to="/contacts">
     Contacts
    </AppLink>
   </nav>
  </StyledNavbar>
 );
});
const StyledNavbar = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: var(--header-height);
 .logo {
  margin-left: 0;
 }
 nav {
  margin-right: 0;
  display: flex;
  align-content: center;
  justify-content: end;
 }
`;
