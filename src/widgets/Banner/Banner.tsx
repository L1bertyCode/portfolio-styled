import { Dispatch, SetStateAction, memo } from "react";
import { Text } from "../../shared/ui/Text/Text";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import ava from "../../shared/assets/images/ava.png";
import { Image } from "../../shared/ui/Image/Image";
import { Title } from "../../shared/ui/Title/Title";
import { ContactButton } from "../../feature/contactButton/ContactButton";
import { theme } from "../../app/styles/Theme";
import Tilt from "react-parallax-tilt";
import { AppLink } from "../../shared/ui/AppLink/AppLink";
interface BannerProps {
 className?: string;
 setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Banner = memo((props: BannerProps) => {
 const { setModalIsOpen, className } = props;
 return (
  <StyledBanner className={className}>
   <Info>
    <Title
     title={
      <Typewriter
       options={{
        strings: ["Web developer", "Frontend developer"],
        autoStart: true,
        loop: true,
        delay: 100,
       }}
      />
     }
     TitleTag="h1"
    />
    <Text text="Web developer" className="none" />
    <Text text="Frontend developer" className="none" />
    <Name
     title="Vyacheslav Dev"
     TitleTag="h2"
     colorType="accent"
    />
    <Text text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt." />
    <BannerButton
     onClick={() =>
      document.getElementById("contact")?.scrollIntoView({
       behavior: "smooth",
      })
     }
    />
   </Info>
   <BunnerImage>
    <Image src={ava} alt="ava" />
   </BunnerImage>
  </StyledBanner>
 );
});
const Name = styled(Title)`
 margin-bottom: var(--indent-16);
`;
const Info = styled.div`
 width: 55%;
 @media ${theme.media.mobile} {
  width: 100%;
  text-align: center;
 }
`;
const BannerButton = styled(ContactButton)`
 margin-top: var(--indent-20);
`;
const BunnerImage = styled(Tilt)`
 width: 45%;
 @media ${theme.media.mobile} {
  width: 80%;
  margin-top: var(--indent-20);
 }
`;
const StyledBanner = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media ${theme.media.mobile} {
  flex-direction: column;
 }
 .none {
  display: none;
 }
`;
