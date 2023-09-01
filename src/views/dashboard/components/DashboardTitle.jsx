import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import Calendly from "../../../components/calendly";


const DashboardTitle = () => {
  const [openCalendly, setOpenCalendly] = useState(false);

  const onCalenderOpen = () => {
    setOpenCalendly(true);
  };

  const onCalenderClose = () => {
    setOpenCalendly(false);
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Calendly
        onCalenderOpen={openCalendly}
        onCalenderClose={onCalenderClose}
      />
      <Box
        className="dashboard-title"
        sx={{ textAlign: { xs: "center", sm: "start" } }}
      >
        <Typography
          variant="h1"
          fontSize={{ xs: "30px", sm: "40px" }}
          lineHeight="40px"
          color="#fff"
          fontWeight="600"
        >
          Dashboard
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "20px" }}
          lineHeight="20px"
          color="#F30000"
          fontWeight="500"
          marginTop="10px"
        >
          Welcome to your Clone Ai interactive dashboard
        </Typography>
      </Box>

      <Button
        onClick={onCalenderOpen}
        className="login-button"
        variant="contained"
        sx={{
          fontSize: { xs: "14px !important", sm: "16px !important" },
          marginTop: { xs: "20px", sm: "0" },
        }}
      >
        Talk to our team
      </Button>
    </Box>
  );
};

export default DashboardTitle;
