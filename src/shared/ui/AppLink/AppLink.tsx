import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";
interface AppLinkProps extends LinkProps {
 children: ReactNode;
 to: string;
 className?: string;
}
export const AppLink = (props: AppLinkProps) => {
 const { children, to, className, ...otherProps } = props;
 return (
  <StyledAppLink className={className}>
   <Link {...otherProps} to={to}>
    {children}
   </Link>
  </StyledAppLink>
 );
};
const StyledAppLink = styled.p`
 a {
  padding: 12px 20px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: var(--b-rad-small);
  transition: var(--transition-delay);
  color: var(--text-color);
  &:hover {
   transition: var(--transition-delay);
   background: var(--accent-gradient);
  }
 }
`;
