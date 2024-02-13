import { memo } from "react";
import { Page } from "../../../../shared/layouts/Page/Page";

interface ProjectDetailsProps {
 id?: string;
 className?: string;
}

export const ProjectDetails = memo(
 (props: ProjectDetailsProps) => {
  const { id, className } = props;

  if (!id) {
   return null;
  }
  return (
   <Page className={className}>
    <div>ProjectDetails</div>
   </Page>
  );
 }
);
