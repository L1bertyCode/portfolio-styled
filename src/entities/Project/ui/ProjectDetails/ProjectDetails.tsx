import { memo } from "react";
import { Page } from "../../../../shared/layouts/Page/Page";
import { AppLink } from "../../../../shared/ui/AppLink/AppLink";
import { Title } from "../../../../shared/ui/Title/Title";
import { Image } from "../../../../shared/ui/Image/Image";
import { Text } from "../../../../shared/ui/Text/Text";
import { ProjectSchema } from "../../model/types/project";
import stubImg from "../../../../shared/assets/images/stub.webp";
interface ProjectDetailsProps {
 id?: string;
 project?: ProjectSchema;
 className?: string;
}

export const ProjectDetails = memo(
 (props: ProjectDetailsProps) => {
  const {
   id,
   project = {
    id: "1",
    title: "TITLE PROJECT",
    skills: ["Javascript", "PostgreSQL", "React", "Redux"],
    description:
     "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
   },
   className,
  } = props;

  if (!id && !project) {
   return null;
  }
  return (
   <Page className={className}>
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
   </Page>
  );
 }
);
