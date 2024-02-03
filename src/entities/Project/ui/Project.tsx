import { memo } from "react";
import styled from "styled-components";
import { ProjectSchema } from "../model/types/project";
import { Text } from "../../../shared/ui/Text/Text";

interface ProjectProps {
 className?: string;
 project?: ProjectSchema;
 isLoading?: boolean;
 error?: string;
}

export const Project = memo((props: ProjectProps) => {
 const { project, className } = props;

 return (
  <StyledProject className={`${className}`}>
   {project?.imgUrl ? (
    <img
     className="img"
     src={project?.imgUrl}
     alt={project?.title}
    />
   ) : (
    // <img
    //  className="img"
    //  src={"../../../shared/assets/images/stub.webp"}
    //  alt={"default_img"}
    // />
    <div className={"imgBlock"}></div>
   )}
   <div className="content">
    <Text className="title" text={project?.title} />
    <div className="skillsList">
     {project?.skills &&
      project?.skills.map((skill) => (
       <Text className="skill" text={skill} />
      ))}
    </div>
    <Text
     className="descriprion"
     text={project?.description}
    />
   </div>
  </StyledProject>
 );
});
const StyledProject = styled.div<ProjectProps>`
 width: 49%;
 height: 638px;
 background: var(--card-color);
 border-radius: var(--b-rad-small);
 overflow: hidden;

 .img {
  height: 388px;
 }
 .imgBlock {
  height: 388px;
  background: var(--accent-gradient);
 }
 .content {
  padding: 12px;
 }
 .title {
  margin-bottom: 12px;
 }

 .skillsList {
  width: 100%;
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
  color:var(--card-color);
  &:last-child {
   margin-right: 0;
  }
 }
`;
