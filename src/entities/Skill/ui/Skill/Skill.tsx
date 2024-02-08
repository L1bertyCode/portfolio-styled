import { memo } from "react";
import { SkillSchema } from "../../model/types/skill";
import { Icon } from "../../../../shared/ui/Icon/Icon";
import { Text } from "../../../../shared/ui/Text/Text";
import styled from "styled-components";

interface SkillProps {
 skill?: SkillSchema;
 className?: string;
}

export const Skill = memo((props: SkillProps) => {
 const { skill, className } = props;
 if (!skill) {
  return null;
 }
 return (
  <StyledSkill className={className}>
   <Icon iconId={skill.iconId} />
   <Text text={skill.text.toUpperCase()} />
  </StyledSkill>
 );
});
const StyledSkill = styled.div`
 width: 200px;
 display: flex;
 flex-direction: column;
 gap: var(--indent-m);
`;
