import s from "./Header.module.scss";
import { Navbar } from "../../Navbar";
import styled from "styled-components";
import { Logo } from "../../../shared/ui/Logo/Logo";
import { Icon } from "../../../shared/ui/Icon/Icon";

interface HeaderProps {
 className?: string;
}

export const Header = (props: HeaderProps) => {
 const { className } = props;
 return (
  <StyledHeader className={className}>
   <Logo className="logo">
    <Icon iconId="arrowScroll" />
   </Logo>
   <Navbar />
  </StyledHeader>
 );
};
const StyledHeader = styled.header`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: var(--header-height);
 .logo {
  margin-left: 0;
 }
`;
