// import styled from "styled-components";
import "./styles/index.css";
import { Navbar } from "../widgets/Navbar";
import { MainLayout } from "../shared/layouts/MainLayout";
import { AppRouter } from "./providers/router";

function App() {
 return (
  <div className="App">
   <MainLayout
    header={<Navbar />}
    content={<AppRouter />}
   />
  </div>
 );
}

export default App;
