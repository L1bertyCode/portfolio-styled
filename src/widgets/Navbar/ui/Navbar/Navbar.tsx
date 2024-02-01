import { memo } from "react";
import { Routes, NavLink, Link } from "react-router-dom";

import cn from "classnames";
import s from "./Navbar.module.css";

interface NavbarProps {
 className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
 const { className } = props;
 return (
  <div className={cn(s.navbar, {}, [className])}>
   <Routes></Routes>
   <Link to="/">Home</Link>
   <nav>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
   </nav>
  </div>
 );
});
