import { memo } from "react";
import { SkillItemSchema } from "../../model/types/skill";
import { SkillItem } from "../SkillItem/SkillItem";
import styled from "styled-components";
import { theme } from "../../../../app/styles/Theme";

interface SkillsListProps {
 skillsList?: SkillItemSchema[];
 className?: string;
}

export const SkillsList = memo((props: SkillsListProps) => {
 const { className, skillsList } = props;
 return (
  <StyledSkillsList className={className}>
   {skillsList?.map((skillItem, i) => (
    <SkillItem skill={skillItem} key={skillItem.text + i} />
   ))}
  </StyledSkillsList>
 );
});
const StyledSkillsList = styled.div`
 display: flex;
 align-items: center;
 flex-wrap: wrap;
 justify-content: center;
 gap: var(--indent-20);
 @media ${theme.media.mobile} {
  gap: var(--indent-16);
 }
`;
