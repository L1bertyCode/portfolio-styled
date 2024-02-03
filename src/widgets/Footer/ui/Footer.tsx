import { memo } from "react";
import { Text } from "../../../shared/ui/Text/Text";
import styled from "styled-components";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";

interface FooterProps {
 className?: string;
}

export const Footer = memo((props: FooterProps) => {
 const { className } = props;
 const fullYear = new Date().getFullYear();

 return (
  <StyledFooter className={className}>
   <div className="social"></div>
   <nav>
    <AppLink className={"link"} to="/projects">
     Projects
    </AppLink>
    <AppLink className={"link"} to="/contacts">
     Contacts
    </AppLink>
   </nav>
   <Text text={`WEB DEVELOPER ${fullYear}`} />
  </StyledFooter>
 );
});
const StyledFooter = styled.footer<FooterProps>`
 display: flex;
 flex-direction: column;
`;
