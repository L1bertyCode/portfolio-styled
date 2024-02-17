import { memo } from "react";

import { ContactMeForm } from "../../../feature/contactMeForm";
import { Title } from "../../../shared/ui/Title/Title";
import styled from "styled-components";

interface ContactsProps {
 className?: string;
}

export const Contacts = memo((props: ContactsProps) => {
 const { className } = props;
 return (
  <StyledContacts className={className}>
   <Title
    className="title"
    title={"Contacts"}
    TitleTag="h3"
   />
   <ContactMeForm />
  </StyledContacts>
 );
});
const StyledContacts = styled.section<ContactsProps>`
 .title {
  margin-bottom: var(--indent-40);
 }
`;
