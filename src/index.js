import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./containers/App";
import "./index.css";
import "simplebar/src/simplebar.css";
import "./assets/fonts/B-Nazanin.ttf";
import ThemeProvider from "./theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>
);
