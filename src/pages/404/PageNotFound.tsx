import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, Stack, Typography} from "@mui/material";

const PageNotFound: FC = () => {
  const navigate = useNavigate();
  const handleHomeNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  }
  return (
    <Box component="main"
         sx={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Stack spacing={2} textAlign="center">
        <Typography variant="h4" color="error">Page Not Found</Typography>
        <Typography variant="body1">Sorry, we could’t find the page you’re looking for.</Typography>
        <Button color="primary"
                href=""
                onClick={handleHomeNavigation}
        >
          Go back to Dashboard
        </Button>
      </Stack>
    </Box>
  )
}

export default PageNotFound;
