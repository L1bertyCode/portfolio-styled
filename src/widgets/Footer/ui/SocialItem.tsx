import { ReactNode, memo } from "react";
import { Text } from "../../../shared/ui/Text/Text";
import styled from "styled-components";

interface SocialItemProps {
 className?: string;
 icon?: ReactNode;
 text?: string;
}

export const SocialItem = memo((props: SocialItemProps) => {
 const { className, icon, text } = props;
 return (
  <StyledSocialItem className={className}>
   <div className="iconWrapper">
    {icon && icon}
   </div>
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
 .iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--accent-gradient);
  padding: 0;
  margin: 0;
 }
`;
