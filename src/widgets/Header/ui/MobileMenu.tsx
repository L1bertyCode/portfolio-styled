import { memo } from "react";
import styled from "styled-components";
import { Navbar } from "../../Navbar";

interface MobileMenuProps {
 className?: string;
}

export const MobileNav = memo((props: MobileMenuProps) => {
 const { className } = props;
 return (
  <div className={className}>
   <StyledBurgerButton>
    <span></span>
   </StyledBurgerButton>
   <StyledMobileNav />
  </div>
 );
});
const StyledMobileNav = styled.div`
 display: none;
`;
const StyledBurgerButton = styled.button`
 content: "";
 width: 20px;
 height: 4px;
 background: var(--accent-gradient);
`;
