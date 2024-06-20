import {FC, ReactNode} from "react";
import {Stack, Typography} from "@mui/material";
import {Status} from "../../../../commons/interfaces/Report";
import {Each} from "../../../../commons/components";
import GaugeChart from "../../../../commons/components/GaugeChart.tsx";

interface StatusChartsProps {
  charts: { [key in Status]: { value: number, label: string, color: string } }
}

const StatusCharts: FC<StatusChartsProps> = ({charts}) => {

  const renderStatusChart = (status: Status): ReactNode => {
    const {value, label, color} = charts[status];
    return (
      <Stack alignItems="center">
        <GaugeChart value={value} strokeColor={color}/>
        <Typography variant="body1">{label}</Typography>
      </Stack>
    )
  };

  return (
    <Stack direction="row" justifyContent="space-around">
      <Each
        of={Object.keys(charts) as Status[]}
        render={renderStatusChart}
      />
    </Stack>
  )
}

export default StatusCharts;
