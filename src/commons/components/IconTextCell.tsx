import {Stack, Typography} from "@mui/material";
import {FC, ReactNode} from "react";

interface IconTextCellProps {
  icon?: ReactNode;
  text?: string | ReactNode;
  textColor?: string;
}

const IconTextCell: FC<IconTextCellProps> = ({icon, text = '', textColor = 'inherit'}) =>
  <Stack height="100%" alignItems="center" direction="row" spacing={1}>
    {icon ? icon : ''}
    <Typography variant="body2" sx={{color: textColor}}>{text}</Typography>
  </Stack>;

export default IconTextCell;
