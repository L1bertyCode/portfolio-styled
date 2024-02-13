import styled from "styled-components";
import { ContactMeForm } from "../../../feature/contactMeForm";
import { Page } from "../../../shared/layouts/Page/Page";

type ContactsPageProps = {};

const ContactsPage = (props: ContactsPageProps) => {
 return (
  <StyledContactsPage>
   <ContactMeForm />
  </StyledContactsPage>
 );
};
const StyledContactsPage = styled(Page)`
 display: flex;
 align-items: center;
 justify-content: center;
`;
export default ContactsPage;
