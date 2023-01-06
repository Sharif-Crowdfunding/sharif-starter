import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useFetch from "use-http";
import urls from "../common/urls";

const context = React.createContext();

const AuthProvider = ({ children }) => {
  const { loading, error, data } = useFetch(
    urls.auth.profile(),
    { data: undefined, credentials: "include" },
    []
  );

  const [logoutState, setLogoutState] = useState(() => ({
    loading: false,
    error: undefined,
    success: false,
  }));
  const [user, setUser] = useState(() => ({
      isLoading: loading,
      isAuthenticated: false,
      data: data,
  }));

  useEffect(() => {
    if (loading || !data) {
      setUser({
        isLoading: loading,
        isAuthenticated: false,
        data: data,
      })
    } else {
      setUser({
        isLoading: loading,
        isAuthenticated: !error,
        data: data,
      })
    }

  }, [data, loading, error]);

  const logout = async () => {
    if (!error) {
      try {
        setLogoutState((prev) => ({
          ...prev,
          loading: true,
        }));
        await axios({
          method: "POST",
          url: urls.auth.logout(),
          withCredentials: true,
        });
        setLogoutState((prev) => ({
          ...prev,
          success: true,
          loading: false,
        }));
      } catch (e) {
        console.log(e);
        setLogoutState((prev) => ({
          ...prev,
          error: e,
          loading: false,
        }));
      }
    }
  };



  return (
    <context.Provider value={{ user, logout, logoutState }}>
      {children}
    </context.Provider>
  );
};

const useAuth = () => useContext(context);

export { AuthProvider, useAuth };
