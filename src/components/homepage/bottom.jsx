import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import tempImage4 from "../../images/newHome/30x30.png";
import { Grid, Tooltip } from "@mui/material";
import { tokens } from "../../theme";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import BottomLiner from "./bottomLiner";
import logoWht from "../../images/newHome/logo-wht.png";
import logowhite from "../../images/logowhite.png";
import Typewriter from "typewriter-effect";

import Privacy from "./privacy";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const pricing = [
  {
    tier: "Tier 1 30-60k",
    price: "$800",
    save: "$800",
    advantage_1: "30 days Free",
    advantage_2: "Hands free software",
  },
  {
    tier: "Tier 2 60-120k",
    price: "$1400",
    save: "$1000",
    advantage_1: "30 days Free",
    advantage_2: "Hands free software",
  },
  {
    tier: "Tier 3 120k",
    price: "$2000",
    save: "$1200",
    advantage_1: "30 days Free",
    advantage_2: "Hands free software",
  },
];

export default function Closing() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function openPrivacyDialog() {
    setOpen(true);
  }

  return (
    <Grid container spacing="2" justifyContent={"space-evenly"}>
      <Privacy open={open} onClose={() => setOpen(false)} />

      <Grid item xs={12} display="flex" justifyContent={"center"}>
        {/* 
        <Typography
          variant="h11"
          // width={"inherit"}
          justifyContent={"center"}
          align="center"
          display="flex"
          color={colors.grey[100]}
          //fontWeight="600"
          sx={{ m: "0 0 5px 0" }}
        >
          Ready to automate your investing? <br />
        </Typography> */}

        <Box width={"inherit"} display="flex" justifyContent={"center"}>
          <Typography
            variant="h11"
            // width={"inherit"}
            justifyContent={"center"}
            align="center"
            display="flex"
            color={colors.grey[100]}
            //fontWeight="600"
            sx={{ m: "0 0 5px 0" }}
          >
            <Typewriter
              loop="true"
              onInit={(typewriter) => {
                typewriter
                  .typeString("Ready to automate your investing?")
                  .pauseFor(1500)
                  .deleteAll();
                typewriter
                  .typeString("Ready to automate your investing?")
                  .pauseFor(1500)
                  .deleteAll();
                typewriter
                  .typeString("Ready to automate your investing?")
                  .pauseFor(1500)
                  .deleteAll();
                typewriter
                  .typeString("Ready to automate your investing?")
                  .pauseFor(1500)
                  .deleteAll();
                typewriter
                  .typeString("Ready to automate your investing?")
                  .pauseFor(1500)
                  .deleteAll();
                typewriter
                  .typeString("Ready to automate your investing?")
                  .pauseFor(1500)
                  .deleteAll();
                typewriter
                  .typeString("Ready to automate your investing?")
                  .pauseFor(1500)
                  .deleteAll();
                typewriter
                  .typeString("Ready to automate your investing?")
                  .start();
              }}
            />
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={"center"}
        mt="30px"
        mb="100px"
      >
        <Button
          size="large"
          onClick={() => navigate("/dashboard")}
          sx={{
            backgroundColor: colors.redAccent[500],
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px 20px",
            ":hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Start your journey
        </Button>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent={"start"}>
        <IconButton
          sx={{
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent",
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: "transparent !important",
              opacity: 0,
            },
          }}
        >
          <img src={logowhite} width="170px" height="38px" alt="logo" />
        </IconButton>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent={"end"}>
        <Button onClick={openPrivacyDialog}>
          <Typography
            variant="h6"
            color={colors.grey[100]}
            fontWeight="bold"

            // sx={{ m: "0 0 5px 0" }}
          >
            Terms and Conditions <br /> Privacy Policy
          </Typography>
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={"center"}
        mb={{ xl: "", xs: "20px" }}
      >
        <Typography
          variant="h6"
          color={colors.grey[100]}
          fontWeight="bold"
          //sx={{ m: "0 0 5px 0" }}
        >
          ©2022 CLONE AI
        </Typography>
      </Grid>
    </Grid>
  );
}
