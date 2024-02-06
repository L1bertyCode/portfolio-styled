import { ReactNode } from "react";

import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";
import { AppLink } from "../AppLink/AppLink";
type LinkType = Omit<LinkProps, "to">;
interface LogoProps extends LinkType {
 children?: ReactNode;
 to?: string;
 className?: string;
}

export const Logo = (props: LogoProps) => {
 const { children = "Home", to = "/", className } = props;

 return (
  <LogoLink>
   <Link to={to} className={className}>
    {children}
   </Link>
  </LogoLink>
 );
};
const LogoLink = styled.p<LogoProps>`
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
