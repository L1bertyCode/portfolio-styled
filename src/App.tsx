import "./App.css";
// import styled from "styled-components";
import { Navbar } from "./widgets/Navbar";
import { MainLayout } from "./shared/layouts/MainLayout";
import { AppRouter } from "./app/providers/router";

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

// const Title = styled.h1`
//  font-size: 1.5em;
//  text-align: center;
//  color: #e91e63;
// `;
