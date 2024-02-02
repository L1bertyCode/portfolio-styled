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
   <AppLink to="/">Home</AppLink>
   <div>
    <AppLink to="/projects">Projects</AppLink>
    <AppLink to="/contacts">Contacts</AppLink>
   </div>
  </StyledNavbar>
 );
});
const StyledNavbar = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: var(--header-height);
`;
