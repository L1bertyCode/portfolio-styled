import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";
interface AppLinkProps extends LinkProps {
 children: ReactNode;
 to: string;
 className?: string;
}
export const AppLink = (props: AppLinkProps) => {
 const { children, to, className } = props;
 return (
  <StyledAppLink className={className}>
   <Link to={to}>{children}</Link>
  </StyledAppLink>
 );
};
const StyledAppLink = styled.span`
 a {
  padding: 20px 12px;
  text-decoration: none;
  &:hover {
   background: var(--accent-colot);
  }
 }
`;
