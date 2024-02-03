import { memo } from "react";
import { Text } from "../../shared/ui/Text/Text";
import { Button } from "../../shared/ui/Button/Button";
import styled from "styled-components";

interface BannerProps {
 className?: string;
}

export const Banner = memo((props: BannerProps) => {
 const { className } = props;
 return (
  <StyledBanner className={className}>
   <div style={{ width: "50%", marginLeft: "0" }}>
    <Text
     text="Web developer"
    />
    <Text text="John Doe" size="xxxl" />
    <Text
     text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt."
    />
   </div>
   <Button variant="filled">Contact Me</Button>
  </StyledBanner>
 );
});
const StyledBanner = styled.div<BannerProps>`
 div {
  margin-bottom: 12px;
 }
`;
