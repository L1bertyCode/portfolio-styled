import styled from "styled-components";
import { Banner } from "../../../widgets/Banner/Banner";
import { AboutMe } from "../../../widgets/AboutMe/AboutMe";
import { Projects } from "../../../widgets/Projects";
import { Skills } from "../../../widgets/Skills";
import { Contacts } from "../../../widgets/Contacts";
import { Page } from "../../../shared/layouts/Page/Page";
import { ScrollTop } from "../../../feature/scrollTop";
import { Dispatch, SetStateAction } from "react";

type MainPageProps = {
 setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MainPage = (props: MainPageProps) => {
 return (
  <StyledPage>
   <ScrollTop />
   <Banner
    setModalIsOpen={props.setModalIsOpen}
    className="section"
   />
   <AboutMe className="section" />
   <Projects className="section" />
   <Skills className="section" />
   <Contacts className="section" />
  </StyledPage>
 );
};
const StyledPage = styled(Page)`
 .section {
  margin-bottom: var(--indent-40);
 }
`;

export default MainPage;
