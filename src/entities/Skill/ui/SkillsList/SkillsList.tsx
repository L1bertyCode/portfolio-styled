import { memo } from "react";
import { SkillSchema } from "../../model/types/skill";
import { Skill } from "../Skill/Skill";
import styled from "styled-components";

interface SkillsListProps {
 skillsList?: SkillSchema[];
 className?: string;
}

export const SkillsList = memo((props: SkillsListProps) => {
 const { className, skillsList } = props;
 return (
  <StyledSkillsList className={className}>
   {skillsList?.map((skillItem, i) => (
    <Skill skill={skillItem} key={skillItem.text + i} />
   ))}
  </StyledSkillsList>
 );
});
const StyledSkillsList = styled.div`
 display: flex;
 align-items: center;
 flex-wrap: wrap;
`;
