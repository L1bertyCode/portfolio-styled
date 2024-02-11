import styled from "styled-components";
import { AboutMe } from "../../../../widgets/AboutMe/AboutMe";
import { Banner } from "../../../../widgets/Banner/Banner";
import { Contacts } from "../../../../widgets/Contacts";
import { Projects } from "../../../../widgets/Projects";
import { Skills } from "../../../../widgets/Skills";
import { Page } from "../../../layouts/Page/Page";

type MainPageProps = {};

export const MainPage = (props: MainPageProps) => {
 return (
  <StyledPage>
   <Banner className="section" />
   <AboutMe className="section" />
   <Projects className="section" />
   <Skills className="section" />
   <Contacts className="section" />
  </StyledPage>
 );
};
const StyledPage = styled(Page)`
 .section {
  margin-bottom: 60px;
 }
`;
