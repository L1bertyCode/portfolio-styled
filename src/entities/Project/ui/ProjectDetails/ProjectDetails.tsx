import { memo } from "react";
import { Page } from "../../../../shared/layouts/Page/Page";

import { Title } from "../../../../shared/ui/Title/Title";
import { Image } from "../../../../shared/ui/Image/Image";
import { Text } from "../../../../shared/ui/Text/Text";

import stubImg from "../../../../shared/assets/images/stub.webp";
import { theme } from "../../../../app/styles/Theme";
import styled from "styled-components";
import { defaultList } from "../../../../widgets/Projects/ui/Projects";

interface ProjectDetailsProps {
 id: string | undefined;
 className?: string;
}

export const ProjectDetails = memo(
 (props: ProjectDetailsProps) => {
  const { id, className } = props;

  const project = defaultList[Number(id) - 1];

  if (!id && !project) {
   return null;
  }
  return (
   <StyledProjectDetailsPage className={className}>
    <Image
     className="img"
     src={project?.imgUrl || stubImg}
     alt={project?.title || "image"}
    />
    <div className="content">
     <Title
      className="porject_title"
      title={project?.title || ""}
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
   </StyledProjectDetailsPage>
  );
 }
);
const StyledProjectDetailsPage = styled(Page)`
 width: 100%;
 background: var(--card-color);
 border-radius: var(--b-rad-small);
 overflow: hidden;

 @media ${theme.media.tablet} {
 }

 .img {
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 388px;
  object-fit: cover;
 }

 .content {
  width: 100%;
  padding: 12px;
  text-align: center;
 }
 .porject_title {
  width: 100%;
  margin-bottom: 12px;
 }

 .skillsList {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
 }
 .skill {
  padding: 12px 20px;
  margin: 0 12px 20px 0;
  background: var(--accent-gradient);
  border-radius: var(--b-rad-small);
  color: var(--card-color);
  &:last-child {
   margin-right: 0;
  }
  .description {
   overflow: hidden;
   text-overflow: ellipsis;
  }
 }
`;
