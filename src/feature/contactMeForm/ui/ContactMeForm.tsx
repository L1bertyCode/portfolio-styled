import { ElementRef, memo, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  const form = useRef<ElementRef<"form">>(null);
  const sendEmail = (e: any) => {
   e.preventDefault();
   if (!form.current) return;

   emailjs
    .sendForm(
     "service_vfbzvpj",
     "template_wmmcwnv",
     form.current,
     {
      publicKey: "M4LfBYovqd-Kq9JUo",
     }
    )
    .then(
     () => {
      console.log("SUCCESS!");
      alert("Submit");
      e.target.reset();
     },
     (error) => {
      console.log("FAILED...", error.text);
     }
    );
  };
  return (
   <ContactMeFormStyled
    ref={form}
    onSubmit={sendEmail}
    className={className}
   >
    <StyledField required name={"username"} label="Name" />
    <StyledField
     required
     name={"email"}
     type="email"
     label="Email"
    />
    <StyledTextarea
     required
     name={"message"}
     label="Message"
    />
    <StyledButton variant="filled">Submit</StyledButton>
   </ContactMeFormStyled>
  );
 }
);
const ContactMeFormStyled = styled.form`
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
