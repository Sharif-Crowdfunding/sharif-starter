import { KeyboardArrowRight } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import urls from "../../common/urls";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadios:'2px',
  boxShadow: 24,
  p: 4,
};

export default function CrowdFundModal() {
  const classes = {
    field: {
      marginTop: 2,
      marginBottom: 2,
      display: "block",
      textAlign: "right",
    },
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [saleToken, setSaleToken] = useState("");
  const [minPricePerToken, setMinPricePerToken] = useState("");
  const [biddingTime, setBiddingTime] = useState("");

  return (
    <div>
      <Button onClick={handleOpen}>جمع‌سپاری</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            ایجاد حراجی
          </Typography>
          <form noValidate autoComplete="off">
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
              onChange={(e) => setMinPricePerToken(e.target.value)}
              label="قیمت هر توکن(براساس milliether)"
              variant="outlined"
              color="primary"
              fullWidth
              required
            />
            <TextField
              sx={classes.field}
              onChange={(e) => setBiddingTime(e.target.value)}
              label="زمان حراجی بر حسب ساعت"
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
              onClick={() => {
                createCrowdfund({
                    
                })
              }}
            >
              <Typography variant="h4">ثبت</Typography>
            </Button>
          </form>{" "}
        </Box>
      </Modal>
    </div>
  );
}

function createCrowdfund(data){
    axios
    .post(urls.auction.create(), data)
    .then((response) => {
      if (response.status === 200) {
        toast.success("ثبت حراجی با موفقیت انجام شد.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      console.log(response.data)
    })
    .catch((err) => console.log(err));
}
