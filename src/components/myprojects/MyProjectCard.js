import { Done } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export default function MyProjectCard() {
  return (
    <Card
      sx={{
        width:'80%',margin:2
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Sharif Starter
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          مبلغ هدف: ۱ میلیون تومان
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          تاریخ ایجاد: ۲۱ تیر
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Done />
        </IconButton>
      </CardActions>
    </Card>
  );
}
