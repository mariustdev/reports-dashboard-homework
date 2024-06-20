import {FC} from "react";
import {Box, CircularProgress} from "@mui/material";

const Loading: FC = () => (
  <Box component="section"
       sx={{
         width: '100%',
         height: '100%',
         position: 'absolute',
         top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'
       }}>
    <CircularProgress/>
  </Box>
);

export default Loading;
