import { ReactNode } from "react";

import styled from "styled-components";

interface PageProps {
 children?: ReactNode;
 className?: string;
}

export const Page = (props: PageProps) => {
 const { children, className } = props;
 return (
  <StylePage className={className}>{children}</StylePage>
 );
};

const StylePage = styled.main`
 padding-top: var(--header-height);
 min-height: calc(
  100vh - var(--header-height) - var(--footer-height)
 );
`;
