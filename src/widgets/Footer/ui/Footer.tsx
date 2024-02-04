import { memo } from "react";
import { Text } from "../../../shared/ui/Text/Text";
import styled from "styled-components";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";
import { SocialItem } from "./SocialItem";

interface FooterProps {
 className?: string;
}

export const Footer = memo((props: FooterProps) => {
 const { className } = props;
 const fullYear = new Date().getFullYear();

 return (
  <StyledFooter className={className}>
   <div className="socialList">
    <SocialItem text={"GMAIL"} />
    <SocialItem text={"LINKEDIN"} />
    <SocialItem text={"githun"} />
   </div>
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
 width: 320px;
 padding: 100px 0;
 display: flex;
 flex-direction: column;
 .socialList {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
 }
 nav {
  margin-bottom: 32px;
 }
`;
