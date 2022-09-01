import axios from "axios";
import { toast } from "react-toastify";
import urls from "../common/urls";
import SharifStarterContractInstance from "./sharifstarterInstance";
import ProjectContractInstance from "./sharifstarterProject";
import web3 from "./web3";

export async function startProject(
  title,
  description,
  tokenName,
  durationInDays,
  tokenNumber,
  pricePerToken,
  maximumTokenSale,
  from,
  id
) {
  console.log("startProject");
  console.log(
    title,
    description,
    tokenName,
    durationInDays,
    tokenNumber,
    pricePerToken,
    maximumTokenSale
  );
  SharifStarterContractInstance.methods
    .startProject(
      title,
      description,
      tokenName,
      durationInDays,
      tokenNumber,
      pricePerToken,
      maximumTokenSale
    )
    .send({
      from: from,
    })
    .then((res) => {
      const projectInfo = res.events.ProjectStarted.returnValues;
      axios
        .post(urls.project.release(), {
          ID: id,
          ProjectContractAddress: projectInfo.contractAddress,
          CreatorWalletAddress: from,
        })
        .then((res) => {
          if (res.status) {
            toast.success("کانترکت با موفقیت ایجاد شد.", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            window.location.reload(true);
          }
        })
        .catch((err) => console.log(err));
    });
}

export function getProjects() {
  SharifStarterContractInstance.methods
    .returnAllProjects()
    .call()
    .then((projects) => {
      projects.forEach((projectAddress) => {
        const projectInst = ProjectContractInstance(projectAddress);
        projectInst.methods
          .getDetails()
          .call()
          .then((projectData) => {
            console.log(projectData);
          });
      });
    });
}

export function participate(
  contractAddress,
  walletAddress,
  buyTokens,
  pricePerToken,
  projectTokenId
) {
  const amount = buyTokens * pricePerToken;
  console.log(contractAddress, walletAddress, amount);
  const projectInst = ProjectContractInstance(contractAddress);
  projectInst.methods
    .contribute()
    .send({
      from: walletAddress,
      value: amount,
    })
    .then((res) => {
      console.log(res);
      const participateInfo = res.events.FundingReceived.returnValues;
      axios
        .post(urls.sale.buyToken(), {
          WalletAddress: participateInfo.contributor,
          PurchasedTokens: parseInt(participateInfo.amount),
          ProjectTokenId: parseInt(projectTokenId),
          Transaction: res.transactionHash,
        })
        .then((res) => {
          if (res.status) {
            toast.success("توکن با موفقیت خریده شد.", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        })
        .catch((err) => console.log(err));
    });
}
