import React from "react";
import { Typography, Box } from "@mui/material";

const SubscriptionTitle = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography
        variant="h1"
        fontSize={{ xs: "25px", sm: "40px" }}
        lineHeight="40px"
        color="#fff"
        fontWeight="600"
      >
        Subscription
      </Typography>
    </Box>
  );
};

export default SubscriptionTitle;
