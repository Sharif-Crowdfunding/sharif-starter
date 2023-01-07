import React from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";

import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../components/ScrollToTop";
import { AuthProvider } from "../providers/auth";
import { ProjectProvider } from "../providers/project";
import { WalletProvider } from "../providers/wallet";

class App extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default App;
