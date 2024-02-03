import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./app/styles/GlobalStyles";
import "./app/styles/index.css";

const root = ReactDOM.createRoot(
 document.getElementById("root") as HTMLElement
);
root.render(
 <React.StrictMode>
  <GlobalStyles />
  <Router>
   <App />
  </Router>
 </React.StrictMode>
);

reportWebVitals();
