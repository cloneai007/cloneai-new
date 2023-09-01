import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Grow,
  useTheme,
} from "@mui/material";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
import Fade from "react-reveal/Fade";

import StockChart from "../../../components/charts/linechart";
import { tokens } from "../../../theme";
import styled from "styled-components";
import { getLandingVideoPosterUrl, getLandingVideoUrl } from "../../../utils";

const ChartContainer = styled(Box)({
  width: "100%",

  "& .react-reveal": {
    width: "100%",
  },
});

const ChartSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Grid container marginTop="119px" columnSpacing={3} rowSpacing={3}>
      <Grid item xs={12} md={12} display="flex" justifyContent="center">
        <ChartContainer>
          <Fade bottom>
            <Box
              width={"100%"}
              height="280px"
              display="flex"
              justifyContent="center"
              alignItems="center"
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
                <Grow {...{ timeout: 1000 }}>
                  <StockChart width={"100%"} height={"100%"} />
                </Grow>
              )}
            </Box>
          </Fade>
        </ChartContainer>
      </Grid>

      {/* <Grid
        item
        xs={12}
        md={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Fade bottom>
          <Box
            sx={{
              borderRadius: "6.93939px",
            }}
          >
            <video
              src={getLandingVideoUrl()}
              poster={getLandingVideoPosterUrl()}
              alt="Video"
              controls
              style={{ width: "100%" }}
              playsInline
            />
          </Box>
        </Fade>
      </Grid> */}

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Fade bottom>
          <Typography
            variant="h6"
            fontSize="12px"
            fontWeight="500"
            textAlign="center"
            color="#9CA3AF"
            marginTop="29px"
            marginX="25px"
            maxWidth="920px"
          >
            *All results on Clone Ai are hypothetical. Trading is risky, and you
            can lose money. Clone Ai is not appropriate for everyone. If you
            can’t afford to lose money, Clone Ai probably isn’t right for you.
            Please see important warnings and disclosures at the bottom of this
            page.
          </Typography>
        </Fade>
      </Grid>
      <Box
        sx={{
          borderRadius: "6.93939px",
          marginTop: "25px",
        }}
      >
        <video
          src={getLandingVideoUrl()}
          poster={getLandingVideoPosterUrl()}
          alt="Video"
          controls
          style={{ width: "100%" }}
          playsInline
          autoPlay
          muted
        />
      </Box>
    </Grid>
  );
};

export default ChartSection;
