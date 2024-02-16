import { memo } from "react";
import { Button } from "../../shared/ui/Button/Button";

interface ContactButtonProps {
 onClick?: () => void;
 className?: string;
}

export const ContactButton = memo(
 (props: ContactButtonProps) => {
  return (
   <Button {...props} variant="filled">
    Contact Me
   </Button>
  );
 }
);
