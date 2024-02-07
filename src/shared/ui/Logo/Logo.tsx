import { ReactNode } from "react";

import { Link, LinkProps } from "react-router-dom";

type LinkType = Omit<LinkProps, "to">;
interface LogoProps extends LinkType {
 children?: ReactNode;
 to?: string;
 className?: string;
}

export const Logo = (props: LogoProps) => {
 const { children = "Home", to = "/", className } = props;

 return (
  <Link className={className} to={to}>
   {children}
  </Link>
 );
};
