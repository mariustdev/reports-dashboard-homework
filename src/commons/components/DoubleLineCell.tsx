import {Stack, Typography} from "@mui/material";
import {FC} from "react";

interface DoubleLineCellProps {
  firstValue: string;
  secondValue?: string;
}

const DoubleLineCell: FC<DoubleLineCellProps> = ({firstValue, secondValue = ''}) =>
  <Stack height="100%" justifyContent="center">
    <Typography variant="body2">{firstValue}</Typography>
    <Typography variant="caption" sx={{color: 'gray'}}>{secondValue}</Typography>
  </Stack>;

export default DoubleLineCell;
