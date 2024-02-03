import { memo } from "react";

import styled from "styled-components";
import { AppLink } from "../../../../shared/ui/AppLink/AppLink";
import { Button } from "../../../../shared/ui/Button/Button";

interface NavbarProps {
 className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
 const { className } = props;
 return (
  <StyledNavbar className={className}>
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
   <Button variant="filled">Contact Me</Button>
  </StyledNavbar>
 );
});
const StyledNavbar = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 height: var(--header-height);
 nav {
  max-width: 50%;
  display: flex;
  align-content: center;
  justify-content: start;
  margin-left: 0;
 }
`;
