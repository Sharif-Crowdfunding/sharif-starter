import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useWalletReducer } from "../../providers/wallet";

const Portfolio = () => {
  const { state, refresh } = useWalletReducer();

  return (
    <>
      <Container>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <Container size="sm" sx={{ width: "80%" }}>
            <Typography
              variant="h3"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              {"پرتفوی من"}
            </Typography>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={refresh}
            >
              {"به روزرسانی"}
            </Button>
            <br />
            <br />
            <hr />
            <Typography>{JSON.stringify(state)}</Typography>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
