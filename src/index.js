import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./containers/App";
import "./index.css";
import "simplebar/src/simplebar.css";
import "./assets/fonts/B-Nazanin.ttf";
import axios from "axios";

axios.defaults.withCredentials = true; 
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HelmetProvider> 
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </HelmetProvider>
);
