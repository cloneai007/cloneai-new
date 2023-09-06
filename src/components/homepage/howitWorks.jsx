import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import tempImage1 from "../../images/home/how-it-works/1.png";
import tempImage2 from "../../images/home/how-it-works/2.png";
import tempImage3 from "../../images/home/how-it-works/3.png";
import { Grid, Tooltip } from "@mui/material";
import { tokens } from "../../theme";
import { useRef } from "react";

export default function HowitWorks({ onCalenderOpen }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const howItWorks = useRef(null);

  return (
    <Grid container spacing="2" width={"100%"}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={"center"}
        mt="40px"
        mb="60px"
      >
        <Typography
          variant="h1"
          justifyContent={"center"}
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          How it works?
        </Typography>
      </Grid>

      {/*       FIRST BLOCK */}

      <Grid item xs={12} display="flex" alignItems={"center"} mb="30px">
        <Grid item xs={6} display="flex" justifyContent={"center"}>
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
            <img src={tempImage1} alt="tempImg" />
          </IconButton>
        </Grid>

        <Grid
          item
          xs={6}
          display="flex"
          justifyContent={"center"}
          mt="30px"
          mb="20px"
        >
          <Box justifyContent={"center"}>
            <Typography
              variant="h2"
              width={"inherit"}
              justifyContent={"center"}
              align="left"
              display="contents"
              color={colors.grey[100]}
              fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              Free trial <br />
            </Typography>

            <Typography
              variant="h41"
              width={"80%"}
              display="contents"
              justifyContent={"center"}
              align="center"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
              Sign up for your free 30 day trial. <br />
              You’ll need an Interactive brokers account.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/*       SECOND BLOCK */}

      <Grid
        item
        xs={12}
        display="flex"
        alignItems={"center"}
        mb="30px"
        width={"80%"}
      >
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent={"center"}
          mt="30px"
          mb="20px"
        >
          <Box justifyContent={"center"} width="80%">
            <Typography
              variant="h2"
              width={"inherit"}
              justifyContent={"center"}
              align="left"
              display="contents"
              color={colors.grey[100]}
              fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              Money protection
              <br />
            </Typography>

            <Typography
              variant="h41"
              width={"80%"}
              display="contents"
              justifyContent={"center"}
              align="center"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
              Unlike hedge funds and other old-style “alternative” investments,
              you don’t hand over your money to anyone. Certainly not to us.
              Your money stays inside your brokerage account at all times. You
              “turn on” our strategy inside your brokerage account.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} display="flex" justifyContent={"center"}>
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
            <img src={tempImage2} alt="tempImg" />
          </IconButton>
        </Grid>
      </Grid>

      {/*       Third Block */}

      <Grid item xs={12} display="flex" alignItems={"center"} mb="30px">
        <Grid item xs={6} display="flex" justifyContent={"center"}>
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
            <img src={tempImage3} alt="tempImg" />
          </IconButton>
        </Grid>

        <Grid
          item
          xs={6}
          display="flex"
          justifyContent={"center"}
          mt="30px"
          mb="20px"
        >
          <Box justifyContent={"center"}>
            <Typography
              variant="h2"
              width={"inherit"}
              justifyContent={"center"}
              align="left"
              display="contents"
              color={colors.grey[100]}
              fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              Detailed dashboard <br />
            </Typography>

            <Typography
              variant="h41"
              width={"80%"}
              display="contents"
              justifyContent={"center"}
              align="center"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
              Watch from your dashboard as trades happen and <br />
              see daily results and activity.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={"center"}
        mt="60px"
        mb="40px"
      >
        <Button
          onClick={() => onCalenderOpen()}
          sx={{
            backgroundColor: colors.cloneai[100],
            color: colors.cloneai[200],
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px 20px",
            ":hover": {
              backgroundColor: colors.redAccent[500],
            },
          }}
        >
          Talk to our team
        </Button>
      </Grid>
    </Grid>
  );
}
