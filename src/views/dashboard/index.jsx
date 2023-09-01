import { Box } from "@mui/material";

import DashboardTitle from "./components/DashboardTitle";
import DashboardAccordion from "./components/DashboardAccordion";

const DashboardNew = () => {
  return (
    <Box padding={{ xs: "10px", sm: "20px", md: "25px" }}>
      <DashboardTitle />
      <DashboardAccordion />
    </Box>
  );
};

export default DashboardNew;
