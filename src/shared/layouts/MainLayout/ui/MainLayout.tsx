import { ReactNode, memo } from "react";
import styled from "styled-components";

interface MainLayoutProps {
 header: ReactNode;
 content: ReactNode;
 footer?: ReactNode;
}

interface MainLayoutProps {
 className?: string;
}

export const MainLayout = memo((props: MainLayoutProps) => {
 const { header, content, footer, className } = props;

 return (
  <MainLayoutStyled className={className}>
   <>{header}</>
   <>{content}</>
   {footer && <>{footer}</>}
  </MainLayoutStyled>
 );
});
export const MainLayoutStyled = styled.div`
 margin: 0 auto;
 max-width: 1200px;
 width: 100%;
 padding: 0 30px;
`;
