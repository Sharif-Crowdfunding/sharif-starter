import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../Theme";
import routes from "./routes";

import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../components/ScrollToTop";
import { AuthProvider } from "../providers/auth";
import { ProjectProvider } from "../providers/project";
import { WalletProvider } from "../providers/wallet";

function App() {
  const [theme, colorMode] = useMode();
  <CssBaseline />;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <ProjectProvider>
            <WalletProvider>
              <ScrollToTop />
              <Routes>
                {routes.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      element={
                        <route.layout>
                          <route.component />
                        </route.layout>
                      }
                    />
                  );
                })}
              </Routes>
            </WalletProvider>
          </ProjectProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
