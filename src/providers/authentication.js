import axios from "axios";
import { useState } from "react";
// import React, { useEffect, useState } from "react";
import urls from "../common/urls";

export const useAuth = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  if (token && user) {
    setAuthToken(token);
    return [user, true];
  }
  return [user, false];
};

export function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location.reload();
  // axios.post(urls.auth.logout(), {}, { withCredentials: true }).then((res) => {
  //   if (res.status === 200) {
  //     if (res.headers["content-type"] === "text/html;charset=UTF-8") {
  //       return res;
  //     }
  //   }
  // });
}

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};
// function setInfoToStorage(values) {
//   values.forEach((key, item) => {
//     localStorage.setItem("key", "value");
//   });
// }
