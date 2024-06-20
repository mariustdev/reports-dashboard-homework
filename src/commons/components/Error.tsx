import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, Stack, Typography} from "@mui/material";

const Error: FC = () => {
  const navigate = useNavigate();
  const handleHomeNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  }
  return (
    <Box component="main"
         sx={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Stack spacing={2} textAlign="center">
        <Typography variant="h4" color="error">Something went wrong</Typography>
        <Typography variant="body1">You see this message for better user experience. Try again navigation to Dashboard
          or try later.</Typography>
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

export default Error;
