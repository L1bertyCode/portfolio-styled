import { memo } from "react";
import { Text } from "../../shared/ui/Text/Text";
import { Button } from "../../shared/ui/Button/Button";
import styled from "styled-components";
import ava from "../../shared/assets/images/ava.png";
import { Image } from "../../shared/ui/Image/Image";
interface BannerProps {
 className?: string;
}

export const Banner = memo((props: BannerProps) => {
 const { className } = props;
 return (
  <StyledBanner className={className}>
   <div className="text">
    <Text text="Web developer" />
    <Text text="Web developer" colorType="error" />
    <Text text="John Doe" size="xxxl" />
    <Text text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt." />
    <Button variant="filled">Contact Me</Button>
   </div>
   <Image className="img" src={ava} alt="ava" />
  </StyledBanner>
 );
});
const StyledBanner = styled.div<BannerProps>`
 display: flex;
 justify-content: space-between;
 align-items: center;
 .text {
  margin-bottom: 12px;
 }
 .img {
  width: 50%;
 }
`;
