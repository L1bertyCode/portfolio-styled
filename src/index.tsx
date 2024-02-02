import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./app/styles/GlobalStyles";

const root = ReactDOM.createRoot(
 document.getElementById("root") as HTMLElement
);
root.render(
 <React.StrictMode>
  <Router>
   <App />
  </Router>
  <GlobalStyles />
 </React.StrictMode>
);

reportWebVitals();
