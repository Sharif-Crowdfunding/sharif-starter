import axios from "axios";
import React, { useContext, useReducer } from "react";
import urls from "../common/urls";
import { useAuth } from "./auth";

export const REFRESH_REQUESTED = "REFRESH_REQUESTED";
export const REFRESH_SUCCESS = "REFRESH_SUCCESS";
export const REFRESH_ERROR = "REFRESH_ERROR";

const initialState = {
  loading: false,
  walletAddress: "",
  ethBalance: 0,
  tokens: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_REQUESTED:
      return {
        ...state,
        ...initialState,
      };
    case REFRESH_SUCCESS:
      console.log(action.payload);
      let data = action.payload;
      return {
        ...state,
        walletAddress: data.address,
        ethBalance: data.balance,
        tokens: data.tokens,
      };
    case REFRESH_ERROR:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

const context = React.createContext();

const WalletProvider = ({ children }) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);
  const { user } = useAuth();

  const refresh = async () => {
    console.log("refresh");
    dispatch({ type: REFRESH_REQUESTED });
    try {
      const res = await axios({
        url: urls.wallet.info(),
        method: "GET",
      });
      dispatch({ type: REFRESH_SUCCESS, payload: res.data });
    } catch (e) {
      console.log(e);
      dispatch({ type: REFRESH_ERROR, payload: e.response.error });
    }
  };
  return (
    <context.Provider value={{ state, dispatch, refresh }}>
      {children}
    </context.Provider>
  );
};

const useWalletReducer = () => useContext(context);

export { WalletProvider, useWalletReducer };
