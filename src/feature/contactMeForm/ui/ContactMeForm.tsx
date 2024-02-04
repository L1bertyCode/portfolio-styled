import { memo } from "react";
import { Button } from "../../../shared/ui/Button/Button";

interface ContactMeFormProps {
 className?: string;
}

export const ContactMeForm = memo(
 (props: ContactMeFormProps) => {
  const { className } = props;
  return (
   <div className={className}>
    <Button variant="filled">Submit</Button>
   </div>
  );
 }
);
