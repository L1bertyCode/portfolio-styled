import { memo } from "react";
import {
 Project,
 ProjectSchema,
} from "../../../../entities/Project";
import styled from "styled-components";
import { Button } from "../../../../shared/ui/Button/Button";

interface ProjectsListProps {
 className?: string;
 projectList?: ProjectSchema[];
 isLoading?: boolean;
 error?: string;
}

export const ProjectsList = memo(
 (props: ProjectsListProps) => {
  const { projectList, className } = props;
  if (!projectList) {
   return null;
  }
  return (
   <>
    <StyledProjectsList className={`${className}`}>
     <div className="projectList">
      {projectList.map((projectListItem, i) => (
       <Project
        key={projectListItem.title + i}
        project={projectListItem}
       />
      ))}
     </div>
     <Button className="btn" variant="filled">
      SEE ALL PROJECTS
     </Button>
    </StyledProjectsList>
   </>
  );
 }
);
const StyledProjectsList = styled.section`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 .projectList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;
 }
 .btn {
  max-width: 300px;
 }
`;
