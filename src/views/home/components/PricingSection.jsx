import { Box, Grid, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <Box >
      <Grid container columnSpacing={3} justifyContent="center" sx={{ paddingY: "120px" }}>
        <Grid item xs={12}>
          <Fade bottom>
            <Typography
              variant="h5"
              fontSize="40px"
              fontWeight="700"
              color="#FFFFFF"
              marginBottom="21px"
            >
              Pricing
            </Typography>
          </Fade>

          <Fade bottom>
            <Typography
              variant="h6"
              fontSize="17px"
              fontWeight="500"
              color="#D1D5DB"
              marginBottom="63px"
            >
              Flat rate monthly subscription
            </Typography>
          </Fade>
        </Grid>

        <Grid item xs={12} sm={6} md={3.8}>
          <PricingCard description="Start trading now with budget limit between 30 and 60k." name="Starter" price="$489" />
        </Grid>
        <Grid item xs={12} sm={6} md={3.8}>
          <PricingCard description="Start trading now with budget limit between 30 and 60k." name="Professional" price="$979" />
        </Grid>
        <Grid item xs={12} sm={6} md={3.8}>
          <PricingCard description="Start trading now with budget limit between 30 and 60k." name="Master" price="$1469" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingSection;
