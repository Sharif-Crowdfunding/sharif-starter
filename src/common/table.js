import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

export default function CustomTable({ rows, price }) {
  return (
    <React.Fragment>
      <Title>تراکنش های اخیر</Title>
      <Table size="small" sx={{ direction: "rtl" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: "right" }}>توکن خریداری شده </TableCell>
            <TableCell sx={{ textAlign: "right" }}>آدرس شرکت کننده</TableCell>
            <TableCell sx={{ textAlign: "right" }}>قیمت هر توکن</TableCell>
            <TableCell sx={{ textAlign: "right" }}>آدرس هش</TableCell>
            <TableCell sx={{ textAlign: "right" }}>تاریخ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody direction="rtl">
          {rows &&
            rows.length > 0 &&
            rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ textAlign: "right" }}>
                  {row.PurchasedTokens}
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  {row.WalletAddress &&
                    `${row.WalletAddress.slice(
                      0,
                      6
                    )}...${row.WalletAddress.slice(
                      row.WalletAddress.length - 4,
                      row.WalletAddress.length
                    )}`}
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>{row.price}</TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  {row.Transaction.slice(0, 6)}
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  {row.CreatedAt.slice(0, 10)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
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
