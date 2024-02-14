import { Navbar } from "../../Navbar";
import styled from "styled-components";
import { Logo } from "../../../shared/ui/Logo/Logo";
import { Icon } from "../../../shared/ui/Icon/Icon";
import { Button } from "../../../shared/ui/Button/Button";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
 modalIsOpen?: boolean;
 setModalIsOpen: Dispatch<SetStateAction<boolean>>;
 className?: string;
}

export const Header = (props: HeaderProps) => {
 const { setModalIsOpen, className } = props;
 return (
  <StyledHeader className={className}>
   <HeaderLogo>
    <Icon iconId="programmer" viewBox="0 0 64 64" />
   </HeaderLogo>
   <Navbar />
   <Button
    onClick={() => setModalIsOpen(true)}
    variant="filled"
   >
    Contact Me
   </Button>
  </StyledHeader>
 );
};
const StyledHeader = styled.header`
 /* position: fixed;
 z-index: 10;
 top: 0;
 left: 50%;
 transform: translateX(-50%); */
 max-width: 1200px;
 padding: 0 30px;
 width: 100%;
 box-sizing: border-box;
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: var(--header-height);
 background: var(--background-color);
 opacity: 0.95;
`;

const HeaderLogo = styled(Logo)`
 margin-left: 0;
`;
