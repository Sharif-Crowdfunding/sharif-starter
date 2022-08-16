import { ethers } from "ethers";
import React, { useState } from "react";

export const useWallet = () => {
  const address = localStorage.getItem("account_address");
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    if (address === "") {
      getWalletAddress();
    }
    return [
      {
        address: address,
        balance: 0, //getBalance(address),
      },
      true,
    ];
  } else {
    return [{}, false];
  }
};

const getWalletAddress = (set) => {
  let address = "";
  window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
    address = res[0];
  });
  localStorage.setItem("account_address", address);
};

const getBalance = (address) => {
  let balance = 0;
  if (address.length < 40) return balance;
  window.ethereum
    .request({
      method: "eth_getBalance",
      params: [address, "latest"],
    })
    .then((b) => {
      balance = ethers.utils.formatEther(b);
    });
  return balance;
};
