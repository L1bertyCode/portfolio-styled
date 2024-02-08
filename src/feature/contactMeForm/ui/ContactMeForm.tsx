import { memo } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { Input } from "../../../shared/ui/Input/Input";
import styled from "styled-components";

interface ContactMeFormProps {
 className?: string;
}

export const ContactMeForm = memo(
 (props: ContactMeFormProps) => {
  const { className } = props;
  return (
   <ContactMeFormStyled className={className}>
    <Input label="Name" className="input" />
    <Input label="Email" className="input" />
    <Input label="Message" className="input message" />
    <Button className="btn" variant="filled">
     Submit
    </Button>
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
 .input {
  margin-bottom: 20px;
 }

 .btn {
  width: 100%;
 }
`;
