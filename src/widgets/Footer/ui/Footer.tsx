import { memo } from "react";
import { Text } from "../../../shared/ui/Text/Text";
import styled from "styled-components";
import { SocialItem } from "./SocialItem";
import { Navbar } from "../../Navbar";
import { Icon } from "../../../shared/ui/Icon/Icon";

interface FooterProps {
 className?: string;
}

export const Footer = memo((props: FooterProps) => {
 const { className } = props;
 const fullYear = new Date().getFullYear();

 return (
  <StyledFooter className={className}>
   <div className="socialList">
    <SocialItem
     icon={<Icon iconId="gmail" viewBox="0 0 35 35" />}
     text={"GMAIL"}
    />
    <SocialItem
     icon={<Icon iconId="linkedIn" viewBox="0 0 30 30" />}
     text={"LINKEDIN"}
    />
    <SocialItem
     icon={<Icon iconId="github" viewBox="0 0 50 50" />}
     text={"github"}
    />
   </div>
   <Navbar />
   <Text text={`WEB DEVELOPER ${fullYear}`} />
  </StyledFooter>
 );
});
const StyledFooter = styled.footer<FooterProps>`
 width: 320px;
 margin: 0 auto;
 height: var(--footer-height);
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 .socialList {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
 }
 nav {
  margin-bottom: 32px;
  display: flex;
 }
`;
