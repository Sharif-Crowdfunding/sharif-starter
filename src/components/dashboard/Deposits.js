import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>میزان توکن فروخته شده</Title>
      <Typography component="p" variant="h4">
        ۱۰۰۰۰۰۰ eth
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 1 sep, 2022
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}
function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}
