import { memo } from "react";

import styled from "styled-components";
import {
 ProjectSchema,
 ProjectsList,
} from "../../../entities/Project";

import { Title } from "../../../shared/ui/Title/Title";
import { Button } from "../../../shared/ui/Button/Button";

interface ProjectsProps {
 className?: string;
 isLoading?: boolean;
 error?: string;
}
const defaultList: ProjectSchema[] = [
 {
  id: "1",
  title: "TITLE PROJECT",
  skills: ["Javascript", "PostgreSQL", "React", "Redux"],
  description:
   "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
 },
 {
  id: "2",
  title: "Instagramm",
  skills: ["Javascript", "PostgreSQL", "React", "Redux"],
  description:
   "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
 },
 {
  id: "3",
  title: "TITLE PROJECT",
  skills: ["Javascript", "PostgreSQL", "React", "Redux"],
  description:
   "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
 },
 {
  id: "4",
  title: "Instagramm",
  skills: ["Javascript", "PostgreSQL", "React", "Redux"],
  description:
   "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
 },
];
export const Projects = memo((props: ProjectsProps) => {
 const { className } = props;
 return (
  <StyledProjects className={`${className}`}>
   <Title title="Projects" TitleTag="h2" />
   <ProjectsList projectList={defaultList} />
   <Button className="btn" variant="filled">
    SEE ALL PROJECTS
   </Button>
  </StyledProjects>
 );
});
const StyledProjects = styled.section`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
`;
