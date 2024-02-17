import styled from "styled-components";
import { Text } from "../../shared/ui/Text/Text";
import { Title } from "../../shared/ui/Title/Title";
import { theme } from "../../app/styles/Theme";
interface AboutMeProps {
 className?: string;
}
export const AboutMe = (props: AboutMeProps) => {
 const { className } = props;
 return (
  <StyledAboutMe className={className}>
   <Title
    className="title"
    title="About me"
    TitleTag="h3"
   />
   <Text
    className="text"
    text="The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals."
   />
  </StyledAboutMe>
 );
};
const StyledAboutMe = styled.section`
 width: 65%;
 margin-left: 0;
 @media ${theme.media.tablet} {
  width: 100%;
 }

 .title {
  margin-bottom: var(--indent-20);
 }
 .text {
  padding-left: 20px;
  position: relative;
  &::before {
   position: absolute;
   content: "";
   width: 5px;
   height: 100%;
   left: 0;
   border-radius: var(--b-rad-small);
   background: var(--accent-gradient);
  }
 }
`;
