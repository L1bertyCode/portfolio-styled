import { memo } from "react";
import { ProjectDetails } from "../../../entities/Project";
import { useParams } from "react-router-dom";

interface ProjectsItemPageProps {
 className?: string;
}
const ProjectsItemPage = memo(
 (props: ProjectsItemPageProps) => {
  const { id } = useParams();
  const { className } = props;
  return (
   <div className={className}>
    <ProjectDetails id={id} />
   </div>
  );
 }
);
export default ProjectsItemPage;
