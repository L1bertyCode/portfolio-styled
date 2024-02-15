import { memo } from "react";

import { Input } from "../../../shared/ui/Input/Input";
import styled from "styled-components";
import { Textarea } from "../../../shared/ui/Textarea/Textarea";

import { Button } from "../../../shared/ui/Button/Button";
import { theme } from "../../../app/styles/Theme";

interface ContactMeFormProps {
 className?: string;
}

export const ContactMeForm = memo(
 (props: ContactMeFormProps) => {
  const { className } = props;
  return (
   <ContactMeFormStyled className={className}>
    <StyledField label="Name" />
    <StyledField label="Email" />
    <StyledTextarea label="Message" />
    <StyledButton variant="filled">Submit</StyledButton>
   </ContactMeFormStyled>
  );
 }
);
const ContactMeFormStyled = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 510px;
 margin: 0 auto;
 @media ${theme.media.mobile} {
  width: 100%;
 }
`;

const StyledField = styled(Input)`
 margin-bottom: 20px;
`;
const StyledTextarea = styled(Textarea)`
 height: 165px;
 margin-bottom: 20px;
`;
const StyledButton = styled(Button)`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
`;
