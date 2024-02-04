import { memo } from "react";
import { Text } from "../../../shared/ui/Text/Text";
import { ContactMeForm } from "../../../feature/contactMeForm";

interface ContactsProps {
 className?: string;
}

export const Contacts = memo((props: ContactsProps) => {
 const { className } = props;
 return (
  <div className={className}>
   <Text text={"Contacts"} />
   <ContactMeForm />
  </div>
 );
});
