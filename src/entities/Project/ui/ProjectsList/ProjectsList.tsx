import { memo } from "react";
import {
 ProjectItem,
 ProjectSchema,
} from "../../../../entities/Project";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
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
      <AnimatePresence>
       {projectList.map((projectListItem, i) => {
        return (
         <ProjectItem
          key={projectListItem.title + i}
          project={projectListItem}
          uniqueKey={projectListItem.title + i}
         />
        );
       })}
      </AnimatePresence>
     </div>
    </StyledProjectsList>
   </>
  );
 }
);
const StyledProjectsList = styled.section`
 width: 100%;
 .projectList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;
 }
`;
