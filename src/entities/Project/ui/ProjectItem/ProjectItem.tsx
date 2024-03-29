import { memo } from "react";
import styled from "styled-components";
import { ProjectSchema } from "../../model/types/project";
import { Text } from "../../../../shared/ui/Text/Text";

import { AppLink } from "../../../../shared/ui/AppLink/AppLink";
import { Title } from "../../../../shared/ui/Title/Title";
import stubImg from "../../../../shared/assets/images/stub.webp";
import { Image } from "../../../../shared/ui/Image/Image";
import { Card } from "../../../../shared/ui/Card/Card";
import { theme } from "../../../../app/styles/Theme";
import { motion } from "framer-motion";
interface ProjectItemProps {
 className?: string;
 project?: ProjectSchema;
 isLoading?: boolean;
 error?: string;
 uniqueKey: string;
}

export const ProjectItem = memo(
 (props: ProjectItemProps) => {
  const { uniqueKey, project, className } = props;
  if (!project) {
   return null;
  }
  return (
   <StyledProjectItem {...props} className={className}>
    <motion.div
     layout={true}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     key={uniqueKey}
    >
     <div className={"imgBlock"}>
      <Image
       className="img"
       src={project.imgUrl || stubImg}
       alt={project.title}
      />
      <AppLink
       variant="filled"
       className={"link"}
       to={"/projects/" + project.id}
      >
       Show poject
      </AppLink>
     </div>
     <div className="content">
      <Title
       className="porject_title"
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
    </motion.div>
   </StyledProjectItem>
  );
 }
);
const StyledProjectItem = styled(Card)<ProjectItemProps>`
 width: 48.5%;
 height: 638px;
 background: var(--card-color);
 border-radius: var(--b-rad-small);
 overflow: hidden;
 @media ${theme.media.tablet} {
  width: 100%;
 }

 .imgBlock {
  position: relative;
  width: 100%;
  height: 388px;
  border-radius: 12px 12px 0 0;
  position: relative;

  /* background: var(--background-color); */
  &:before {
   content: "";
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   z-index: 1;
   background: #00000099;
   opacity: 0;
   transition: var(--transition-delay);
   @media ${theme.media.tablet} {
    opacity: 1;
   }
  }
  .img {
   border-radius: 12px 12px 0 0;
   width: 100%;
   height: 388px;
   object-fit: cover;
  }

  .link {
   display: none;
   position: absolute;
   top: 50%;
   left: 50%;
   z-index: 2;
   transform: translate3d(-50%, -50%, 0);
   @media ${theme.media.tablet} {
    display: block;
   }
  }
 }
 &:hover {
  .imgBlock {
   &:before {
    opacity: 1;
   }
   .link {
    display: block;
   }
  }
 }

 .content {
  width: 100%;
  padding: 12px;
 }
 .porject_title {
  width: 100%;
  margin-bottom: 12px;
 }

 .skillsList {
  width: 100%;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
 }
 .skill {
  padding: 12px 20px;
  margin: 0 12px 12px 0;
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
