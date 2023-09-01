import * as React from "react";
import styled from "styled-components";

import { Box, CardMedia } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import ConnectInteractiveBroker from "./ConnectInteractiveBroker";
import Subscriptions from "./Subscriptions";

import MoreIcon from "../../../images/dashboard/more.png";
import CheckIcon from "../../../images/dashboard/check.png";
import { useStore } from "../../../context/AppProvider";

const Accordion = styled((props) => <MuiAccordion {...props} />)(() => ({
  padding: "15px",
  border: "none",
  "&:not(:last-child)": {
    borderBottom: 20,
  },
  "&:before": {
    display: "block",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper svg": {
    fontSize: "24px",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}));

const DashboardAccordion = () => {
  const { user } = useStore();
  return (
    <Box marginTop="30px">
      <Accordion
        sx={{
          backgroundColor: "#111928",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              width: "20px",
              height: "20px",
              marginRight: "10px",
            }}
            image={user?.interactiveBrokerAccount ? CheckIcon : MoreIcon}
            alt="More"
          />
          <Typography fontSize={{ xs: "15px", sm: "20px" }} lineHeight="20px" fontWeight="600">
            Connect your interactive Brokers account
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            className="accordion-divider"
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#474B53",
              marginBottom: "25px",
            }}
          ></Box>
          <ConnectInteractiveBroker />
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#111928",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              width: "20px",
              height: "20px",
              marginRight: "10px",
            }}
            image={user?.subscription?.id && user?.subscription?.status !== 'canceled' ? CheckIcon : MoreIcon}
            alt="Check"
          />
          <Typography fontSize={{ xs: "15px", sm: "20px" }} lineHeight="20px" fontWeight="600">
            Start your Subscriptions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            className="accordion-divider"
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#474B53",
              marginBottom: "25px",
            }}
          ></Box>
          <Subscriptions />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DashboardAccordion;
