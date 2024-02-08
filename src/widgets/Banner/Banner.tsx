import { memo } from "react";
import { Text } from "../../shared/ui/Text/Text";
import { Button } from "../../shared/ui/Button/Button";
import styled from "styled-components";
import ava from "../../shared/assets/images/ava.png";
import { Image } from "../../shared/ui/Image/Image";
import { Title } from "../../shared/ui/Title/Title";
interface BannerProps {
 className?: string;
}

export const Banner = memo((props: BannerProps) => {
 const { className } = props;
 return (
  <StyledBanner className={className}>
   <div className="info">
    <Title title="Web developer" TitleTag="h1" />
    <Title
     className="title"
     title="Vyacheslav Dev"
     TitleTag="h2"
     colorType="accent"
    />
    <Text text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt." />
    <Button className="btn" variant="filled">
     Contact Me
    </Button>
   </div>
   <Image className="img" src={ava} alt="ava" />
  </StyledBanner>
 );
});
const StyledBanner = styled.div<BannerProps>`  
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-bottom: 100px;
 .info {
  width: 50%;
 }
 .title {
  margin-bottom: var(--indent-l);
 }
 .btn {
  margin-top: var(--indent-xl);
 }
 .img {
  width: 50%;
 }
`;
