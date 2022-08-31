import { duration } from "@mui/material";
import SharifStarterContractInstance from "./sharifstarterInstance";
import ProjectContractInstance from "./sharifstarterProject";
import web3 from "./web3";

export async function startProject(title,description,tokenName,durationInDays,tokenNumber,pricePerToken,maximumTokenSale) {
    SharifStarterContractInstance.methods.startProject(
      title,description,tokenName,durationInDays,tokenNumber,pricePerToken,maximumTokenSale
    ).send({
      from: this.account,
    }).then((res) => {
      const projectInfo = res.events.ProjectStarted.returnValues;
      projectInfo.isLoading = false;
      projectInfo.currentAmount = 0;
      projectInfo.currentState = 0;
      projectInfo.contract = ProjectContractInstance(projectInfo.contractAddress);
      this.startProjectDialog = false;
      this.newProject = { isLoading: false };
    });
  }