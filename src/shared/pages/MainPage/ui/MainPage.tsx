import { AboutMe } from "../../../../widgets/AboutMe/AboutMe";
import { Banner } from "../../../../widgets/Banner/Banner";
import { Contacts } from "../../../../widgets/Contacts";
import { ProjectsList } from "../../../../widgets/Projects";
import { Page } from "../../../layouts/Page/Page";

type MainPageProps = {};

export const MainPage = (props: MainPageProps) => {
 return (
  <Page>
   <Banner />
   <AboutMe />
   <ProjectsList />
   <Contacts />
  </Page>
 );
};
