import { memo } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import styled from "styled-components";

interface ScrollTopProps {}

export const ScrollTop = memo((props: ScrollTopProps) => {
 const onScrollTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };
 //  const {} = props;
 return (
  <StyledScrollTop onClick={onScrollTop}>
   {">"}
  </StyledScrollTop>
 );
});
const StyledScrollTop = styled(Button)`
 position: fixed;
 z-index: 100;
 right: var(--indent-20);
 bottom: var(--indent-20);
 transform: rotate(-90deg);
 background: #00000060;
 border-radius: 50%;
`;
