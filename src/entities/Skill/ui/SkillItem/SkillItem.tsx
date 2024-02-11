import { memo } from "react";
import { SkillItemSchema } from "../../model/types/skill";
import { Icon } from "../../../../shared/ui/Icon/Icon";
import { Text } from "../../../../shared/ui/Text/Text";
import styled from "styled-components";

interface SkillItemProps {
 skill?: SkillItemSchema;
 className?: string;
}

export const SkillItem = memo((props: SkillItemProps) => {
 const { skill, className } = props;
 if (!skill) {
  return null;
 }
 return (
  <StyledSkillItem className={className}>
   <Icon iconId={skill.iconId} viewBox={skill?.viewBox} />
   <Text text={skill.text.toUpperCase()} />
  </StyledSkillItem>
 );
});
const StyledSkillItem = styled.div`
 width: 200px;
 display: flex;
 align-items: center;
 flex-direction: column;
 gap: var(--indent-m);
 padding: 0 0 var(--indent-xxxl) 0;
`;
