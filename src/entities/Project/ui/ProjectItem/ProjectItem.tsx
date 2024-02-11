import { memo } from "react";
import styled from "styled-components";
import { ProjectSchema } from "../../model/types/project";
import { Text } from "../../../../shared/ui/Text/Text";

import { AppLink } from "../../../../shared/ui/AppLink/AppLink";
import { Title } from "../../../../shared/ui/Title/Title";

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
   <StyledProjectItem className={className}>
    <div className={"imgBlock"}>
     {project.imgUrl && (
      <img
       className="img"
       src={project.imgUrl}
       alt={project.title}
      />
     )}
     <AppLink
      variant="filled"
      className={"link"}
      to={"/project/" + project.id}
     >
      Show poject
     </AppLink>
    </div>
    <div className="content">
     <Title
      className="title"
      title={project.title}
      TitleTag="h5"
     />
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
 max-width: 48.5%;
 height: 638px;
 background: var(--card-color);
 border-radius: var(--b-rad-small);
 overflow: hidden;

 .imgBlock {
  width: 100%;
  height: 388px;
  border-radius: 12px 12px 0 0;
  border: 1px solid var(--accent-color-inverted);
  position: relative;

  background: var(--background-color);

  .img {
   border-radius: 12px 12px 0 0;
   width: 100%;
   height: 388px;
  }

  .link {
   display: none;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate3d(-50%, -50%, 0);
  }
 }
 &:hover {
  .imgBlock {
   background: #00000001;

   .link {
    display: block;
   }
  }
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
  width: 100%;
  margin-left: 0;
  display: flex;
  overflow-x: hidden;
  margin-bottom: 20px;
 }
 .skill {
  padding: 12px 20px;
  margin-right: 12px;
  background: var(--accent-gradient);
  border-radius: var(--b-rad-small);
  color: var(--card-color);
  &:last-child {
   margin-right: 0;
  }
 }
`;
