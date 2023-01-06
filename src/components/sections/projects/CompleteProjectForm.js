import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Button,
  Container, TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CompleteProjectForm({ projectId,onSubmit }) {
  const classes = {
    field: {
      marginTop: 2,
      marginBottom: 2,
      display: "block",
      textAlign: "right",
    },
  };
  const navigate = useNavigate();
  const [tokenName, setTokenName] = useState("");
  const [tokenNumber, setTokenNumber] = useState("");
  const [saleToken, setSaleToken] = useState("");
  const [pricePerToken, setPricePerToken] = useState("");
  const [maximumTokenSale, setMaxTokenSale] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container size="sm" sx={{ width: "80%" }}>
      <Typography variant="h3" color="textPrimary" component="h2" gutterBottom>
        ثبت اطلاعات توکن پروژه{" "}
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={classes.field}
          onChange={(e) => setTokenName(e.target.value)}
          label="نام توکن"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setTokenNumber(e.target.value)}
          label="تعداد توکن درخواستی"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setSaleToken(e.target.value)}
          label="تعداد توکن آماده فروش"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setPricePerToken(e.target.value)}
          label="قیمت هر توکن(براساس milliether)"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <TextField
          sx={classes.field}
          onChange={(e) => setMaxTokenSale(e.target.value)}
          label="بیشترین میزان خرید توکن برای هر حساب"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          startIcon={<KeyboardArrowRight />}
          onClick={() =>
            onSubmit(
              {
                ProjectId: parseInt(projectId),
                TokenNumber: parseInt(tokenNumber),
                TokenName: tokenName,
                PricePerTokenByGwei: parseInt(pricePerToken)*1000000000000000,
                MaximumTokenSale: parseInt(maximumTokenSale),
              },
              navigate
            )
          }
        >
          <Typography variant="h4">ثبت اطلاعات</Typography>
        </Button>
      </form>
    </Container>
  );
}


