import styled, { css } from "styled-components";
type TextColor = "primary" | "accent" | "error";
type TextSize = "s" | "m" | "l" | "xl" | "xxl";
interface TextProps {
 className?: string;
 text?: string;
 title?: string;
 size?: TextSize;
 colorType?: TextColor;
}

export const Text = (props: TextProps) => {
 const { text, className, ...otherPorps } = props;

 return (
  <StyledText {...otherPorps} className={className}>
   {text}
  </StyledText>
 );
};
const StyledText = styled.p<TextProps>`
 ${(props: TextProps) => {
  switch (props.size) {
   case "s":
    return css<TextProps>`
     font: var(--font-s);
    `;
   case "l":
    return css<TextProps>`
     font: var(--font-l);
    `;
   case "xl":
    return css<TextProps>`
     font: var(--font-xl);
    `;
   case "xxl":
    return css<TextProps>`
     font: var(--font-xxl);
    `;
   default:
    return css<TextProps>`
     font: var(--font-m);
    `;
  }
 }};
 ${(props: TextProps) => {
  switch (props.colorType) {
   case "error":
    return css<TextProps>`
     color: var(--error-color);
    `;
   case "accent":
    return css<TextProps>`
     color: var(--accent-color);
    `;
   default:
    return css<TextProps>`
     color: var(--text-color);
    `;
  }
 }};
`;
