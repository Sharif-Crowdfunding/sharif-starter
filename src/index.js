import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/app";

import "bootstrap/dist/css/bootstrap.min.css";
import { CookiesProvider } from "react-cookie";
// import Index from "./containers/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CookiesProvider>
      <App />
      {/* <Index /> */}
    </CookiesProvider>
  </BrowserRouter>
);
