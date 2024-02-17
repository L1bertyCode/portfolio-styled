import { memo } from "react";
import { Text } from "../../shared/ui/Text/Text";

import styled from "styled-components";
import ava from "../../shared/assets/images/ava.png";
import { Image } from "../../shared/ui/Image/Image";
import { Title } from "../../shared/ui/Title/Title";
import { ContactButton } from "../../feature/contactButton/ContactButton";
import { theme } from "../../app/styles/Theme";
interface BannerProps {
 className?: string;
}

export const Banner = memo((props: BannerProps) => {
 const { className } = props;
 return (
  <StyledBanner className={className}>
   <Info>
    <Title title="Web developer" TitleTag="h1" />
    <Name
     title="Vyacheslav Dev"
     TitleTag="h2"
     colorType="accent"
    />
    <Text text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt." />
    <BannerButton />
   </Info>
   <BunnerImage src={ava} alt="ava" />
  </StyledBanner>
 );
});
const Name = styled(Title)`
 margin-bottom: var(--indent-16);
`;
const Info = styled.div`
 width: 50%;
 @media ${theme.media.mobile} {
  width: 100%;
  text-align: center;
 }
`;
const BannerButton = styled(ContactButton)`
 margin-top: var(--indent-20);
`;
const BunnerImage = styled(Image)`
 width: 45%;
 @media ${theme.media.mobile} {
  width: 80%;
  margin-top: var(--indent-20);
 }
`;
const StyledBanner = styled.div<BannerProps>`
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media ${theme.media.mobile} {
  flex-direction: column;
 }
`;
