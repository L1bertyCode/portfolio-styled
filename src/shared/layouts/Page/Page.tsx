import { ReactNode } from "react";

import styled from "styled-components";

interface PageProps {
 children?: ReactNode;
 className?: string;
}

export const Page = (props: PageProps) => {
 const { children, className } = props;
 return (
  <StyledPage className={className}>{children}</StyledPage>
 );
};

const StyledPage = styled.main`
 padding-top: var(--header-height);
 min-height: calc(100vh - var(--footer-height));
`;
