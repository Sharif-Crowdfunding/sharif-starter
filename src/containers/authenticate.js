import { Button } from "@mui/material";
import React from "react";
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
const Authenticate =()=> {
  const navigate = useNavigate()
    return (
      <React.Fragment>
        <div style={{padding :20}}><Button variant="outline-primary" className="rounded-circle" onClick={()=>navigate('/')}><IoArrowBack /></Button></div>
      </React.Fragment>
    );
}

export default Authenticate;
