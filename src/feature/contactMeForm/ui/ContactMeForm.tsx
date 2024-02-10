import { memo } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { Input } from "../../../shared/ui/Input/Input";
import styled from "styled-components";
import { Textarea } from "../../../shared/ui/Textarea/Textarea";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";

interface ContactMeFormProps {
 className?: string;
}

export const ContactMeForm = memo(
 (props: ContactMeFormProps) => {
  const { className } = props;
  return (
   <ContactMeFormStyled className={className}>
    <Input label="Name" className="field" />
    <Input label="Email" className="field" />
    <Textarea label="Message" className="field" />
    <AppLink
     to="/projects"
     className="btn"
     variant="filled"
    >
     Submit
    </AppLink>
   </ContactMeFormStyled>
  );
 }
);
const ContactMeFormStyled = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 532px;
 .field {
  margin-bottom: 20px;
 }
 .textarea {
  height: 165px;
 }
 .btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 }
`;
