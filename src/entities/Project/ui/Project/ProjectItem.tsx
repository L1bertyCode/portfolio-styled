import { memo } from "react";
import styled from "styled-components";
import { ProjectSchema } from "../../model/types/project";
import { Text } from "../../../../shared/ui/Text/Text";
import { Button } from "../../../../shared/ui/Button/Button";
import { AppLink } from "../../../../shared/ui/AppLink/AppLink";

interface ProjectItemProps {
 className?: string;
 project?: ProjectSchema;
 isLoading?: boolean;
 error?: string;
}

export const ProjectItem = memo(
 (props: ProjectItemProps) => {
  const { project, className } = props;
  if (!project) {
   return null;
  }
  return (
   <StyledProjectItem className={`${className}`}>
    <div className={"imgBlock"}>
     {project.imgUrl ? (
      <img
       className="img"
       src={project.imgUrl}
       alt={project.title}
      />
     ) : (
      <div />
     )}
     <AppLink className="link" to={"/project" + project.id}>
      Show poject
     </AppLink>
    </div>
    <div className="content">
     <Text className="title" text={project.title} />
     <div className="skillsList">
      {project?.skills &&
       project?.skills.map((skill, i) => (
        <Text
         key={skill + i}
         className="skill"
         text={skill}
        />
       ))}
     </div>
     <Text
      className="descriprion"
      text={project?.description}
     />
    </div>
   </StyledProjectItem>
  );
 }
);
const StyledProjectItem = styled.div<ProjectItemProps>`
 width: 48%;
 height: 638px;
 background: var(--card-color);
 border-radius: var(--b-rad-small);
 overflow: hidden;

 .imgBlock {
  width: 100%;
  position: relative;
  .img {
   width: 100%;
   height: 388px;
  }
  div {
   width: 100%;
   height: 388px;
   background: var(--accent-gradient);
   .link {
    position: absolute;
    top: 50%;
   }
  }

  height: 388px;
  background: var(--accent-gradient);
 }
 .content {
  width: 100%;

  padding: 12px;
 }
 .title {
  width: 100%;

  margin-bottom: 12px;
 }

 .skillsList {
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow-x: hidden;
  margin-bottom: 20px;
 }
 .skill {
  margin: 0;
  padding: 12px 20px;
  width: fit-content;
  margin-right: 12px;
  background: var(--accent-gradient);
  border-radius: var(--b-rad-small);
  color: var(--card-color);
  &:last-child {
   margin-right: 0;
  }
 }
`;
