import styled, { css } from "styled-components";
type TextColor = "primary" | "accent" | "error";
type TextSize = "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
interface TextProps {
 className?: string;
 text?: string;
 title?: string;
 size?: TextSize;
 colorType?: TextColor;
}
// type HeaderTagType =
//  | "h1"
//  | "h2"
//  | "h3"
//  | "h4"
//  | "h5"
//  | "h6";

// const mapSizeToHeader: Record<TextSize, HeaderTagType> = {
//  s: "h6",
//  m: "h5",
//  l: "h4",
//  xl: "h3",
//  xxl: "h2",
//  xxxl: "h1",
// };
export const Text = (props: TextProps) => {
 const { text, className } = props;

 return (
  <StyledText className={className}>{text}</StyledText>
 );
};
const StyledText = styled.p<TextProps>`
 ${(props) => {
  switch (props.colorType) {
   case "error":
    return css<TextProps>`
     color: var(--error-color);
    `;
   default:
    return css<TextProps>`
     color: var(--text-color);
    `;
  }
 }}
 ${(props) => {
  switch (props.size) {
   case "xxxl":
    return css<TextProps>`
     font: var(--font-xxxl);
    `;
   case "l":
    return css<TextProps>`
     font: var(--font-l);
    `;
   case "xl":
    return css<TextProps>`
     font: var(--font-xl);
    `;
   default:
    return css<TextProps>`
     font: var(--font-m);
    `;
  }
 }}
`;
