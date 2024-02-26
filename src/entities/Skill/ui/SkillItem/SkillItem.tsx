import { memo } from "react";
import { SkillItemSchema } from "../../model/types/skill";
import { Icon } from "../../../../shared/ui/Icon/Icon";
import { Text } from "../../../../shared/ui/Text/Text";
import styled from "styled-components";
import { theme } from "../../../../app/styles/Theme";
import { Fade } from "react-awesome-reveal";
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
   <Fade cascade={true} damping={0.2}>
    <Icon iconId={skill.iconId} viewBox={skill?.viewBox} />
    <Text text={skill.text.toUpperCase()} />
   </Fade>
  </StyledSkillItem>
 );
});
const StyledSkillItem = styled.div`
 width: 200px;
 display: flex;
 align-items: center;
 flex-direction: column;
 gap: var(--indent-12);
 /* padding: 0 0 var(--indent-40) 0; */
 text-align: center;

 @media ${theme.media.laptop} {
  width: 160px;
 }
 @media ${theme.media.tablet} {
  width: 140px;
 }
 @media ${theme.media.mobile} {
  width: 117px;
 }
`;
