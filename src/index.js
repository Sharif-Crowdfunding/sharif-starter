import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./containers/App";
import "./index.css";
import "simplebar/src/simplebar.css";
import "./assets/fonts/B-Nazanin.ttf";
import ThemeProvider from "./theme";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.withCredentials = true; // even for get requests if
                                    // demand session authentication
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

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
