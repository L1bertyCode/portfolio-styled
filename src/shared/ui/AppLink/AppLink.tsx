import { ReactNode } from "react";
import {
 Link,
 LinkProps,
 useLocation,
} from "react-router-dom";
import styled from "styled-components";
interface AppLinkProps extends LinkProps {
 children: ReactNode;
 to: string;
 className?: string;
}
export const AppLink = (props: AppLinkProps) => {
 const { children, to, className, ...otherProps } = props;
 const location = useLocation();
 const isActive = location.pathname === to;

 return (
  <StyledAppLink
   className={`${className} ${isActive ? "isActive" : " "}`}
  >
   <Link
    {...otherProps}
    to={to}
    className={` ${isActive ? "isActive" : " "}`}
   >
    {children}
   </Link>
  </StyledAppLink>
 );
};
const StyledAppLink = styled.p`
 a {
  position: relative;
  padding: 12px 6px;
  text-decoration: none;
  border-bottom: 11px solid transparent;
  border-radius: var(--b-rad-small);
  transition: var(--transition-delay);
  color: var(--text-color);
  &:after {
   transition: var(--transition-delay);
   position: absolute;
   content: "";
   width: 100%;
   height: 11px;
   background: transparent;
   bottom: -4px;
   left: 0;
   border-radius: var(--b-rad-small);
  }
  &:hover {
   transition: var(--transition-delay);
   &:after {
    transition: var(--transition-delay);
    background: var(--accent-gradient);
   }
  }
  &.isActive {
   transition: var(--transition-delay);
   &:after {
    transition: var(--transition-delay);
    position: absolute;
    content: "";
    width: 100%;
    height: 11px;
    background: var(--accent-gradient);
    bottom: -4px;
    left: 0;
    border-radius: var(--b-rad-small);
   }
  }
 }
`;
