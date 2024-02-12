import styled from "styled-components";
import { ContactMeForm } from "../../../../feature/contactMeForm";

import { Page } from "../../../layouts/Page/Page";

type Props = {};

export const ContactsPage = (props: Props) => {
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
