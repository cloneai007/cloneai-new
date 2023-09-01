import { Box, Grid, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

import PricingCard from "./PricingCard";

import Icon1 from "../../../images/pricing/union-brown.png";
import Icon2 from "../../../images/pricing/union-white.png";
import Icon3 from "../../../images/pricing/union-yellow.png";

const PricingSection = () => {
  return (
    <Box sx={{ px: { xs: "20px", sm: "50px", md: "100px", lg: "206px" } }}>
      <Grid container columnSpacing={3} sx={{ paddingY: "120px" }}>
        <Grid item xs={12}>
          <Fade bottom>
            <Typography
              variant="h5"
              fontSize="40px"
              fontWeight="700"
              color="#FFFFFF"
              marginBottom="21px"
              textAlign="center"
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
              textAlign="center"
            >
              Flat rate monthly subscription
            </Typography>
          </Fade>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <PricingCard icon={Icon1} name="Starter" price="$489" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PricingCard icon={Icon2} name="Professional" price="$979" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PricingCard icon={Icon3} name="Master" price="$1469" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingSection;
