import styled from "styled-components";
import { Banner } from "../../../widgets/Banner/Banner";
import { AboutMe } from "../../../widgets/AboutMe/AboutMe";
import { Projects } from "../../../widgets/Projects";
import { Skills } from "../../../widgets/Skills";
import { Contacts } from "../../../widgets/Contacts";
import { Page } from "../../../shared/layouts/Page/Page";

type MainPageProps = {};

const MainPage = (props: MainPageProps) => {
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
export default MainPage;
