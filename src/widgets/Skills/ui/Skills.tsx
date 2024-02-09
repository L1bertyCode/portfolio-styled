import { memo } from "react";

import {
 SkillSchema,
 SkillsList,
} from "../../../entities/Skill";
import { Icon } from "../../../shared/ui/Icon/Icon";
const defaultSkillsList: SkillSchema[] = [
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
 {
  iconId: "next",
  text: "next",
 },
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
  <section className={className}>
   <SkillsList skillsList={defaultSkillsList} />
   <Icon iconId="next" viewBox="0 0 20 20" />
  </section>
 );
});
