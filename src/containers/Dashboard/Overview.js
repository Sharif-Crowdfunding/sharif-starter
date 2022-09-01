import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../common/table";
import Chart from "../../components/dashboard/Charts";
import Deposits from "../../components/dashboard/Deposits";

const Overview = () => {
  const [projects, setProjects] = useState(null);
  const navigate = useNavigate();
  //   const { data, error, loading } = useFetch(
  //     urls.project.getUserProjects(),
  //     "GET"
  //   );
  //   useEffect(() => {
  //     if (error) {
  //       toast.error(error && error.messsage, {
  //         position: toast.POSITION.BOTTOM_RIGHT,
  //       });
  //     }
  //     if (data && data.length > 0) {
  //       setProjects(data);
  //     }
  //   }, [error, data]);
  return (
    <>
      <Container>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: (theme)=>theme.palette.grey[500_12],
                      height: 240,
                    }}
                  >
                    <Chart />
                  </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: (theme)=>theme.palette.grey[500_12],

                      height: 240,
                    }}
                  >
                    <Deposits />
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      backgroundColor: (theme)=>theme.palette.grey[500_12],
                      flexDirection: "column",
                    }}
                  >
                    <CustomTable />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default Overview;
