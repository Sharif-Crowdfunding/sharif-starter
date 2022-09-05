import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { set } from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomTable from "../../common/table";
import urls from "../../common/urls";
import Chart from "../../components/dashboard/Charts";
import Deposits from "../../components/dashboard/Deposits";
import { useFetch } from "../../utils/useFetch";

const Overview = () => {
  const [currentProject, setCurrentProject] = useState();
  const [projects, setProjects] = useState(null);
  const { data, error, loading } = useFetch(
    urls.project.getUserProjects(),
    "GET"
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.messsage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (data && data.length > 0) {
      setProjects(data);
      setCurrentProject(0);
    }
  }, [error, data]);

  return (
    <>
      <Container>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <form>
            {/* <FormControl>
              <FormLabel>پروژه موردنظر را انتخاب کنید</FormLabel>
            </FormControl> */}
            <FormControl sx={{ m: 1, minWidth: "10%" }} size="large">
              <InputLabel id="demo-select"> نام پروژه</InputLabel>
              <Select
                id="demo-select"
                labelId="demo-select"
                value={currentProject ? currentProject : 0}
                label="نام پروژه"
                onChange={(e) => {
                  setCurrentProject(parseInt(e.target.value));
                }}
              >
                {projects &&
                  projects.map((v, i) => (
                    <MenuItem value={i}>{v.Name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </form>
          {currentProject ? (
            <ProjectReport id={projects[currentProject].ID} />
          ) : (
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                backgroundColor: (theme) => "secondary.lighter",
                height: 120,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">پروژه شما نهایی نشده است.</Typography>
            </Paper>
          )}
        </div>
      </Container>
    </>
  );
};

const ProjectReport = ({ id }) => {
  const [report, setReport] = useState();
  const { data, error, loading } = useFetch(
    urls.project.report(),
    "POST",
    {
      ProjectId: id,
    },
    id
  );
  useEffect(() => {
    if (error) {
      toast.error(error && error.messsage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    setReport(data);
  }, [error, data]);
  return (
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
                backgroundColor: (theme) => theme.palette.grey[500_12],
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
                backgroundColor: (theme) => theme.palette.grey[500_12],

                height: 240,
              }}
            >
              <Deposits total={report && report.TotalFunded} />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                backgroundColor: (theme) => theme.palette.grey[500_12],
                flexDirection: "column",
              }}
            >
              <CustomTable rows={report && report.Participants} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Overview;
