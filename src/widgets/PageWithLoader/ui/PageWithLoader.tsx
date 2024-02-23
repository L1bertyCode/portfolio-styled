import { memo } from "react";
import { Loader } from "../../../shared/ui/Loader/Loader";
import styled from "styled-components";
interface PageWithLoaderProps {
 className?: string;
}

export const PageWithLoader = memo(
 (props: PageWithLoaderProps) => {
  return (
   <StyledPageWithLoader>
    <Loader />
   </StyledPageWithLoader>
  );
 }
);
const StyledPageWithLoader = styled.div`
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
`;
