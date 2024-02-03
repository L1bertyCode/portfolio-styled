// import styled from "styled-components";
import "./styles/index.css";
import { Navbar } from "../widgets/Navbar";
import { MainLayout } from "../shared/layouts/MainLayout";
import { AppRouter } from "./providers/router";
import { useState } from "react";
export enum Theme {
 DARK = "theme_dark",
 LIGHT = "theme_light",
}
function App() {
 const [theme, setTheme] = useState<Theme>(Theme.DARK);
 return (
  <div className={`App ${theme} theme_dark`}>
   <MainLayout
    header={<Navbar />}
    content={<AppRouter />}
   />
  </div>
 );
}

export default App;
