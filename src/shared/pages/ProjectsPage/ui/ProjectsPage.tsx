import { Page } from "../../../layouts/Page/Page";

import {
 ProjectSchema,
 ProjectsList,
} from "../../../../entities/Project";
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
type ProjectsPageProps = {};

export const ProjectsPage = (props: ProjectsPageProps) => {
 return (
  <Page>
   <ProjectsList projectList={defaultList} />
  </Page>
 );
};
