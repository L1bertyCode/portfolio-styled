import { memo, useState } from "react";

import styled from "styled-components";
import {
 ProjectSchema,
 ProjectsList,
} from "../../../entities/Project";

import { Title } from "../../../shared/ui/Title/Title";

import { TabMenu } from "../../../feature/chngeTab";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";

interface ProjectsProps {
 className?: string;
 isLoading?: boolean;
 error?: string;
}
export interface Tab {
 title: string;
 status: string;
}
export const defaultList: ProjectSchema[] = [
 {
  id: "1",
  imgUrl: "",
  title: "TITLE PROJECT",
  skills: ["Javascript", "PostgreSQL", "React", "Redux"],
  description:
   "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  type: "react",
 },
 {
  id: "2",
  title: "Instagramm",
  imgUrl: "",
  skills: ["Javascript", "PostgreSQL", "React", "Redux"],
  description:
   "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  type: "vue",
 },
 {
  id: "3",
  title: "TITLE PROJECT",
  imgUrl: "",
  skills: ["Javascript", "PostgreSQL", "React", "Redux"],
  description:
   "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  type: "react native",
 },
 {
  id: "4",
  title: "Instagramm",
  imgUrl: "",
  skills: ["Javascript", "PostgreSQL", "React", "Redux"],
  description:
   "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  type: "Spa",
 },
];
export const Projects = memo((props: ProjectsProps) => {
 const { className } = props;

 const arrayTabs: Tab[] = [
  { title: "All", status: "all" },
  { title: "React JS", status: "react" },
  { title: "React Native", status: "native" },
  { title: "Vue", status: "vue" },
 ];
 const [activeTab, setActiveTab] = useState<Tab>({
  title: "All",
  status: "all",
 });

 let filtredWorks = defaultList;
 if (activeTab.status === "react") {
  filtredWorks = defaultList.filter(
   (filtredWorksItem) => filtredWorksItem.type
  );
 }
 if (activeTab.status === "vue") {
  filtredWorks = defaultList.filter(
   (filtredWorksItem) => filtredWorksItem.type
  );
 }
 if (activeTab.status === "native") {
  filtredWorks = defaultList.filter(
   (filtredWorksItem) => filtredWorksItem.type
  );
 }
 const changeFilterStatus = (tab: Tab) => setActiveTab(tab);
 return (
  <StyledProjects className={`${className}`}>
   <Title
    className="title"
    title="Projects"
    TitleTag="h3"
   />
   <div className="content">
    <TabMenu
     arrayTabs={arrayTabs}
     activeTab={activeTab}
     onActiveTab={changeFilterStatus}
     className="tabs"
    />
    <ProjectsList projectList={filtredWorks} />
    <AppLink
     to="/projects"
     className="btn"
     variant="filled"
    >
     SEE ALL PROJECTS
    </AppLink>
   </div>
  </StyledProjects>
 );
});
const StyledProjects = styled.section`
 width: 100%;
 .content {
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .title {
  margin-bottom: var(--indent-40);
 }
 .tabs {
  margin-bottom: var(--indent-24);
 }
`;
