import {FC} from "react";
import {Gauge, gaugeClasses} from '@mui/x-charts/Gauge';

interface GaugeChartProps {
  value?: number;
  strokeColor?: string;
  height?: number;
  width?: number;
  fontSize?: number;
}

const GaugeChart: FC<GaugeChartProps> = ({
                                           value = 0,
                                           strokeColor = 'green',
                                           height = 120,
                                           width = 120,
                                           fontSize = 30
                                         }) =>
  <Gauge
    value={value}
    height={height}
    width={width}
    cornerRadius="50%"
    sx={
      {
        [`& .${gaugeClasses.valueText}`]: {
          fontSize,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: strokeColor,
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: 'lightgrey',
        },
      }
    }
  />;

export default GaugeChart;
