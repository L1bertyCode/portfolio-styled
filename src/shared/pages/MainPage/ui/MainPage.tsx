import { AboutMe } from "../../../../widgets/AboutMe/AboutMe";
import { Banner } from "../../../../widgets/Banner/Banner";
import { Contacts } from "../../../../widgets/Contacts";
import { Projects} from "../../../../widgets/Projects";
import { Skills } from "../../../../widgets/Skills";
import { Page } from "../../../layouts/Page/Page";

type MainPageProps = {};

export const MainPage = (props: MainPageProps) => {
 return (
  <Page>
   <Banner />
   <AboutMe />
   <Projects />
   <Skills/>
   <Contacts />
  </Page>
 );
};
