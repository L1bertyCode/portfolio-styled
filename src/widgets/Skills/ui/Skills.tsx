import { memo } from "react";

import {
 SkillItemSchema,
 SkillsList,
} from "../../../entities/Skill";
import { Icon } from "../../../shared/ui/Icon/Icon";
import { Title } from "../../../shared/ui/Title/Title";
import styled from "styled-components";
const defaultSkillsList: SkillItemSchema[] = [
 {
  iconId: "docker",
  text: "docker",
 },
 {
  iconId: "express",
  text: "express",
 },
 {
  iconId: "git",
  text: "git",
  viewBox: "0 0 420 420",
 },
 {
  iconId: "jest",
  text: "jest",
 },
 {
  iconId: "javascript",
  text: "javascript",
 },
 {
  iconId: "mongoDb",
  text: "mongo Db",
 },
 //  {
 //   iconId: "next",
 //   text: "next",
 //  },
 {
  iconId: "postgreSql",
  text: "postgreSql",
 },
 {
  iconId: "reactJs",
  text: "react Js",
 },
 {
  iconId: "reactNative",
  text: "react Native",
 },
 {
  iconId: "redux",
  text: "redux",
 },
 {
  iconId: "styledComponents",
  text: "styled Components",
 },
 {
  iconId: "typescript",
  text: "typescript",
 },
];
interface SkillsProps {
 className?: string;
}

export const Skills = memo((props: SkillsProps) => {
 const { className } = props;
 return (
  <StyledSkills className={className}>
   <Title
    className="title"
    title={"Skills"}
    TitleTag="h3"
   />
   <SkillsList skillsList={defaultSkillsList} />
   <Icon iconId="next" viewBox="0 0 20 20" />
  </StyledSkills>
 );
});
const StyledSkills = styled.section`
 .title {
  margin-bottom: var(--indent-40);
 }
`;
