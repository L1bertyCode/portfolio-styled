import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
type ButtonVariant = "clear" | "filled" | "outlined";
interface ButtonProps
 extends ButtonHTMLAttributes<HTMLButtonElement> {
 children: ReactNode;
 variant?: ButtonVariant;
 className?: string;
 disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
 const { children, className, ...otherProps } = props;
 return (
  <StyledButton {...otherProps} className={className}>
   {children}
  </StyledButton>
 );
};
const StyledButton = styled.button<ButtonProps>`
 padding: 12px 20px;
 text-decoration: none;
 border: 1px solid transparent;
 border-radius: var(--b-rad-small);
 cursor: pointer;
 transition: var(--transition-delay);
 
 ${(props) => {
  switch (props.variant) {
   case "filled":
    return css<ButtonProps>`
     background: var(--accent-gradient);
     color: var(--background-color);
     &:hover {
      border: 1px solid var(--accent-color);
      background: none;
      color: var(--accent-color);
      transition: var(--transition-delay);
     }
    `;
   default:
    return css<ButtonProps>`
     color: var(--text-color);
     background: transparent;
     &:hover {
      background: var(--accent-gradient);
      transition: var(--transition-delay);
     }
    `;
  }
 }}
`;
