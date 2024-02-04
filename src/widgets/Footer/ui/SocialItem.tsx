import React, { ReactNode, memo } from "react";
import { Text } from "../../../shared/ui/Text/Text";

interface SocialItemProps {
 className?: string;
 icon?: ReactNode;
 text?: string;
}

export const SocialItem = memo((props: SocialItemProps) => {
 const { className, icon, text } = props;
 return (
  <div className={className}>
   <Text text={text} />
  </div>
 );
});
