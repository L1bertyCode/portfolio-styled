import { AboutMe } from "../../../../widgets/AboutMe/AboutMe";
import { Banner } from "../../../../widgets/Banner/Banner";
import { ProjectsList } from "../../../../widgets/Projects";

type MainPageProps = {};

export const MainPage = (props: MainPageProps) => {
 return (
  <div>
   <Banner />
   <AboutMe />
   <ProjectsList />
  </div>
 );
};
