import { ReactNode } from "react";
import {
 Link,
 LinkProps,
 useLocation,
} from "react-router-dom";
import styled, { css } from "styled-components";

type AppLinkVariant = "default" | "clear" | "filled";
interface AppLinkProps extends LinkProps {
 children: ReactNode;
 to: string;
 variant?: AppLinkVariant;
 className?: string;
}

const DefaultAppLink = (props: AppLinkProps) => {
 const { children, to, className, ...otherProps } = props;
 const location = useLocation();
 const isActive = location.pathname === to;

 return (
  <Link
   className={`${className} ${isActive ? "isActive" : " "}`}
   {...otherProps}
   to={to}
  >
   {children}
  </Link>
 );
};
export const AppLink = styled(DefaultAppLink)<AppLinkProps>`
 text-decoration: none;
 color: var(--text-color);
 ${(props: AppLinkProps) => {
  switch (props.variant) {
   case "filled":
    return css<AppLinkProps>`
     padding: 16px 24px;
     border-radius: var(--b-rad-small);
     border: 1px solid transparent;
     background: var(--accent-gradient);
     color: var(--background-color);
     &:hover {
      border: 1px solid var(--accent-color);
      background: none;
      color: var(--accent-color);
      transition: var(--transition-delay);
     }
    `;
   case "clear":
    return css<AppLinkProps>`
     position: relative;
     padding: 12px 6px;
     border-bottom: 11px solid transparent;
     border-radius: var(--b-rad-small);
     transition: var(--transition-delay);
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
       background: var(--accent-gradient);
      }
     }
    `;
   default:
    return css`
     margin: 0;
     padding: 0;
    `;
  }
 }}
`;
