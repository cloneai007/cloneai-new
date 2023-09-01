import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import tempImage1 from "../../images/newHome/stocks2.png";

import { Grid, Tooltip } from "@mui/material";
import { tokens } from "../../theme";
import StockChart from "../charts/linechart";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
import Grow from "@mui/material/Grow";
import Typewriter from "typewriter-effect";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function Main({ onCalenderOpen }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
  }, []);

  var app = document.getElementById("app");
  var typewriter = new Typewriter(app, {
    loop: true,
  });

  return (
    <Grid container spacing="2">
      <Grid item xs={12} display="flex" justifyContent={"center"}>
        {/* 

        <Typography
          variant="h1"
          width={"100%"}
          display="flex"
          justifyContent={"center"}
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          Say Hello to Clone A.I. auto-trading tool.
        </Typography> */}
        <Box width={"inherit"} display="flex" justifyContent={"center"}>
          <Typography
            variant="h1"
            width={"100%"}
            display="flex"
            align={"center"}
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            <Typewriter
              loop="true"
              onInit={(typewriter) => {
                typewriter
                  .typeString("Say Hello to Clone A.I. auto-trading tool.")
                  .pauseFor(1500)
                  //.deleteAll()
                  /*         .callFunction(() => {
                        setLoading(false)
                      //   console.log('All strings were deleted');
                       }) */
                  /*  typewriter.typeString('Maximize your trading today!')
                      .pauseFor(1500)
                      .deleteChars(6)
                      typewriter.typeString('by 10x!')
                      .pauseFor(1500)
                      
                      typewriter.typeString(' with <strong> CLONE AI models...</strong> ')
                      .pauseFor(1500)
                      typewriter.typeString('   Join <strong>US!</strong> ') */
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
        mb="20px"
      >
        <Typography
          variant="h31"
          width={"80%"}
          justifyContent={"center"}
          align="center"
          color={colors.grey[100]}
          fontWeight="300"
          sx={{ m: "0 0 5px 0" }}
        >
          Fully automate your stock trades with A.I. & machine learning. Remove
          human biases, emotions and errors to achieve better performance.
          Connect Clone Ai auto trader to your brokerage account today.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={"center"}
        mt="20px"
        mb="20px"
      >
        <Button
          onClick={() => onCalenderOpen()}
          sx={{
            backgroundColor: colors.redAccent[500],
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px 20px",
            ":hover": {
              backgroundColor: colors.redAccent[500],
            },
          }}
        >
          Schedule a demonstration
        </Button>
      </Grid>

      <Grid item xs={12} display="flex" justifyContent={"center"}>
        <Box
          backgroundColor={
            loading ? "" : colors.grey[100]
            //  ""
          }
          width={"100%"}
          height="600px"
          mt="20px"
          justifyContent={"center"}
          alignItems={"center"}
          display="flex"
          sx={{
            borderRadius: "20px",
          }}
        >
          {loading ? (
            <UseAnimations
              animation={infinity}
              fillColor={colors.redAccent[500]}
              strokeColor={colors.redAccent[500]}
              size={56 * 2}
              loop={true}
            />
          ) : (
            <Grow
              //in={true}
              timeout={5000}
              {...{ timeout: 3000 }}
            >
              <StockChart width={"85%"} height={"100%"} />
            </Grow>
          )}
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        justifyContent={"center"}
        display="flex"
        mt="20px"
        mb="20px"
      >
        <Typography
          variant="h7"
          color={colors.grey[100]}
          fontWeight="300"
          sx={{ m: "0 0 5px 0" }}
        >
          *All results on Clone Ai are hypothetical. Trading is risky, and you
          can lose money. Clone Ai is not appropriate for everyone. If you can’t
          afford to lose money, Clone Ai probably isn’t right for you. Please
          see important warnings and disclosures at the bottom of this page.
        </Typography>
      </Grid>
    </Grid>
  );
}
