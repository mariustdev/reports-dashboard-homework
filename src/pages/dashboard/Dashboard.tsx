import {FC, useMemo} from "react";
import {useFetchReports} from "../../hooks/useFetchReports.tsx";
import {Loading} from "../../commons/components";
import ReportsList from "./components/reports/ReportsList.tsx";
import {Paper, Stack, Typography} from "@mui/material";
import StatusCharts from "./components/charts/StatusCharts.tsx";
import {buildStatusCharts} from "../../utils/helpers.tsx";


const Dashboard: FC = () => {
  const {loading, reports} = useFetchReports();
  const charts = useMemo(() => buildStatusCharts(reports), [reports]);

  if (loading) {
    return <Loading/>;
  }

  return (
    <Stack component="main" spacing={1} padding={2}>
      <Typography variant="body1">Dashboard</Typography>
      <Paper sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
        <Typography variant="h6" padding={1}>KYC Application Reports</Typography>
        <StatusCharts charts={charts}/>
        <ReportsList reports={reports}/>
      </Paper>
    </Stack>
  )
}

export default Dashboard;
