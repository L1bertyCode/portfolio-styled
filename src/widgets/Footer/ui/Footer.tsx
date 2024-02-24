import { memo } from "react";
import { Text } from "../../../shared/ui/Text/Text";
import styled from "styled-components";
import { SocialItem } from "./SocialItem";
import { Navbar } from "../../Navbar";
import { Icon } from "../../../shared/ui/Icon/Icon";
import { theme } from "../../../app/styles/Theme";

interface FooterProps {
 className?: string;
}

export const Footer = memo((props: FooterProps) => {
 const { className } = props;
 const fullYear = new Date().getFullYear();

 return (
  <StyledFooter className={className}>
   <StyledSocialList className="socialList">
    <SocialItem
     icon={<Icon iconId="gmail" viewBox="-4.5 -4.5 35 35" />}
     text={"GMAIL"}
    />
    <SocialItem
     icon={<Icon iconId="linkedIn" viewBox="-4 -3 30 30" />}
     text={"LINKEDIN"}
    />
    <SocialItem
     icon={<Icon iconId="github" viewBox="0 0 50 50" />}
     text={"github"}
    />
   </StyledSocialList>
   <StyledFooterNav />
   <Text text={`WEB DEVELOPER ${fullYear}`} />
  </StyledFooter>
 );
});
const StyledFooter = styled.footer<FooterProps>`
 max-width: 290px;
 width: 100%;
 margin: 0 auto;
 height: var(--footer-height);
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;
const StyledFooterNav = styled(Navbar)`
 margin-bottom: 32px;
 display: flex;
 @media ${theme.media.mobile} {
  display: none;
 }
`;
const StyledSocialList = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 margin-bottom: 32px;
`;
