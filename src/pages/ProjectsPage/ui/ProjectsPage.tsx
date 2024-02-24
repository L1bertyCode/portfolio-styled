import {
 ProjectsList,
} from "../../../entities/Project";
import { Page } from "../../../shared/layouts/Page/Page";
import { defaultList } from "../../../widgets/Projects/ui/Projects";

type ProjectsPageProps = {};

const ProjectsPage = (props: ProjectsPageProps) => {
 return (
  <Page>
   <ProjectsList projectList={defaultList} />
  </Page>
 );
};
export default ProjectsPage;
