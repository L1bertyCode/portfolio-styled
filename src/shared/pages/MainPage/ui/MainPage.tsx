import { AboutMe } from "../../../../widgets/AboutMe/AboutMe";
import { Banner } from "../../../../widgets/Banner/Banner";

type MainPageProps = {};

export const MainPage = (props: MainPageProps) => {
 return (
  <div>
   <Banner />
   <AboutMe/>
  </div>
 );
};
