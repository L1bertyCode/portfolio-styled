import { memo } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../app/styles/Theme";

type TitleTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TitleColor = "primary" | "accent";
interface TitleProps {
 title: string;
 TitleTag: TitleTagType;
 colorType?: TitleColor;
 className?: string;
}

const DefaultTitle = memo((props: TitleProps) => {
 const {
  title,
  TitleTag = "h2",
  colorType = "primary",
  className,
  ...otherPorps
 } = props;
 return (
  <TitleTag
   {...otherPorps}
   className={`${className} ${colorType}`}
  >
   {title}
  </TitleTag>
 );
});
export const Title = styled(DefaultTitle)`
 ${(props: TitleProps) => {
  switch (props.TitleTag) {
   case "h5":
    return css<TitleProps>`
     font: var(--font-m);
     font-weight: 600;
     @media ${theme.media.tablet} {
      font: var(--font-s);
     }
    `;

   case "h4":
    return css<TitleProps>`
     font: var(--font-l);
     font-weight: 600;
     @media ${theme.media.tablet} {
      font: var(--font-m);
     }
    `;
   case "h3":
    return css<TitleProps>`
     font: var(--font-xl);
     font-weight: 600;
     @media ${theme.media.tablet} {
      font: var(--font-l);
     }
    `;
   case "h2":
    return css<TitleProps>`
     font: var(--font-5xl);
     font-weight: 600;
     @media ${theme.media.laptop} {
      font: var(--font-4xl);
     }
     @media ${theme.media.tablet} {
      font: var(--font-2xl);
     }
    `;
   case "h1":
    return css<TitleProps>`
     font: var(--font-4xl);
     font-weight: 700;
     @media ${theme.media.laptop} {
      font: var(--font-3xl);
     }
     @media ${theme.media.tablet} {
      font: var(--font-xl);
     }
    `;
   default:
    return css<TitleProps>`
     font: var(--font-l);
     font-weight: 600;
    `;
  }
 }};
 ${(props: TitleProps) => {
  switch (props.colorType) {
   case "accent":
    return css<TitleProps>`
     color: var(--accent-color);
    `;
   default:
    return css<TitleProps>`
     color: var(--text-color);
    `;
  }
 }};
`;
