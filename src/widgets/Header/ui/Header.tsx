import { Navbar } from "../../Navbar";
import styled from "styled-components";
import { Logo } from "../../../shared/ui/Logo/Logo";
import { Icon } from "../../../shared/ui/Icon/Icon";
import { Button } from "../../../shared/ui/Button/Button";

interface HeaderProps {
 className?: string;
}

export const Header = (props: HeaderProps) => {
 const { className } = props;
 return (
  <StyledHeader className={className}>
   <Logo className="logo">
    <Icon iconId="programmer" viewBox="0 0 64 64" />
   </Logo>
   <Navbar />
   <Button variant="filled">Contact Me</Button>
  </StyledHeader>
 );
};
const StyledHeader = styled.header`
 position: fixed;
 box-sizing: border-box;
 top: 0;
 left: 50%;
 transform: translateX(-50%);
 max-width: 1200px;
 padding: 0 30px;
 z-index: 1000;
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: var(--header-height);
 background: var(--background-color);
 opacity: 0.95;
 .logo {
  margin-left: 0;
 }
`;
