import { ReactNode, memo } from "react";
import { Text } from "../../../shared/ui/Text/Text";
import styled from "styled-components";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";

interface SocialItemProps {
 className?: string;
 icon?: ReactNode;
 text?: string;
 to?: string;
}

export const SocialItem = memo((props: SocialItemProps) => {
 const { to = "/", className, icon, text } = props;
 return (
  <StyledSocialItem className={className}>
   <StyledIconWrapper to={to} className="iconWrapper">
    {icon && icon}
   </StyledIconWrapper>
   <Text text={text?.toUpperCase()} />
  </StyledSocialItem>
 );
});

const StyledSocialItem = styled.div`
 gap: 20px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;
const StyledIconWrapper = styled(AppLink)`
 width: 60px;
 height: 60px;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 50%;
 background: var(--accent-gradient);
 padding: 0;
 margin: 0;
`;
