import { memo, useEffect, useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import styled from "styled-components";
import { theme } from "../../../app/styles/Theme";

interface ScrollTopProps {}

export const ScrollTop = memo((props: ScrollTopProps) => {
 const [showBtn, setShowBtn] = useState(false);
 const onScrollTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };
 //  const {} = props;
 useEffect(() => {
  window.addEventListener("scroll", () => {
   if (window.scrollY > 200) {
    setShowBtn(true);
   } else {
    setShowBtn(false);
   }
  });
 }, []);
 return (
  <>
   {showBtn && (
    <StyledScrollTop onClick={onScrollTop}>
     {">"}
    </StyledScrollTop>
   )}
  </>
 );
});
const StyledScrollTop = styled(Button)`
 position: fixed;
 right: var(--indent-40);
 bottom: var(--indent-40);
 z-index: 100;
 transform: rotate(-90deg);
 background: #00000060;
 border-radius: 50%;
 @media ${theme.media.tablet} {
  right: var(--indent-20);
  bottom: var(--indent-20);
 }
`;
