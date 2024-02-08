import { memo } from "react";
import styled, { css } from "styled-components";

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
  <TitleTag {...otherPorps} className={className}>
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
    `;
   case "h4":
    return css<TitleProps>`
     font: var(--font-l);
    `;
   case "h3":
    return css<TitleProps>`
     font: var(--font-xl);
    `;
   case "h2":
    return css<TitleProps>`
     font: var(--font-xxxl);
    `;
   case "h1":
    return css<TitleProps>`
     font: var(--font-xxl);
    `;
   default:
    return css<TitleProps>`
     font: var(--font-l);
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
