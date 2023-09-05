import { Box, Grid, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

import OfferCard from "./OfferCard";

import Lock from "../../../images/offers/lock.png";
import Block from "../../../images/offers/block.png";
import Forward from "../../../images/offers/forward.png";
import Heart from "../../../images/offers/heart.png";
import Block2 from "../../../images/offers/block-2.png";

const OfferSection = () => {
  return (
    <>
      {/* <Box
        sx={{
          px: { xs: "20px", sm: "50px", md: "100px", lg: "206px" },
          backgroundColor: "#1F2A37",
        }}
      >
        <Grid container columnSpacing={3} sx={{ paddingY: "100px" }}>
          <Grid item xs={12} md={6}>
            <Fade bottom>
              <Typography
                variant="h5"
                fontSize="40px"
                fontWeight="700"
                color="#FFFFFF"
                marginBottom="21px"
              >
                What do we offer
              </Typography>
            </Fade>

            <Fade bottom>
              <Typography
                variant="p"
                fontSize="18px"
                fontWeight="500"
                color="#D1D5DB"
              >
                Clone Ai offers automated Algorithmic strategies for Stocks, and
                options
              </Typography>
            </Fade>
          </Grid>

          <Grid item xs={12} md={6} marginTop={{ xs: "20px", md: 0 }}>
            <OfferCard
              icon={Lock}
              label="Money Never leaves your Brokerage Account"
            />
            <OfferCard icon={Block} label="30 days free trail" />
            <OfferCard icon={Forward} label="Start with just $25,000" />
            <OfferCard icon={Heart} label="Flat monthly fee. No hidden costs" />
            <OfferCard icon={Block2} label="Detailed Dashboard" />
          </Grid>
        </Grid>
      </Box> */}
      <Box
        sx={{
          px: { xs: "20px", sm: "50px", md: "100px", lg: "206px" },
          backgroundColor: "#1F2A37",
        }}
      >
        <Box textAlign={'center'}>
          <Fade bottom>
            <Typography
              variant="h5"
              fontSize="40px"
              fontWeight="700"
              color="#FFFFFF"
              marginBottom="21px"
              paddingTop={'30px'}
              // textAlign={"center"}
            >
              What do we offer
            </Typography>
          </Fade>
          <Fade bottom>
            <Typography
              variant="p"
              fontSize="18px"
              fontWeight="500"
              color="#D1D5DB"
              textAlign={"center"}
            >
              Clone Ai offers automated Algorithmic strategies for Stocks, and
              options
            </Typography>
          </Fade>
        </Box>
        <Grid container columnSpacing={3} sx={{ paddingY: "50px" }}>
          <Grid item xs={12} md={6} textAlign={"center"}>
            {/* <Fade bottom>
              <Typography
                variant="h5"
                fontSize="40px"
                fontWeight="700"
                color="#FFFFFF"
                marginBottom="21px"
              >
                What do we offer
              </Typography>
            </Fade>

            <Fade bottom>
              <Typography
                variant="p"
                fontSize="18px"
                fontWeight="500"
                color="#D1D5DB"
              >
                Clone Ai offers automated Algorithmic strategies for Stocks, and
                options
              </Typography>
            </Fade> */}
          </Grid>

          <Grid
            item
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <OfferCard
                icon={Lock}
                label="Money Never leaves your Brokerage Account"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <OfferCard icon={Block} label="30 days free trail" />
            </Grid>
            <Grid item xs={12} md={6}>
              <OfferCard icon={Forward} label="Start with just $25,000" />
            </Grid>
            <Grid item xs={12} md={6}>
              <OfferCard
                icon={Heart}
                label="Flat monthly fee. No hidden costs"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <OfferCard icon={Block2} label="Detailed Dashboard" />
            </Grid>

            {/* <OfferCard
              icon={Lock}
              label="Money Never leaves your Brokerage Account"
            />
            <OfferCard icon={Block} label="30 days free trail" />
            <OfferCard icon={Forward} label="Start with just $25,000" />
            <OfferCard icon={Heart} label="Flat monthly fee. No hidden costs" />
            <OfferCard icon={Block2} label="Detailed Dashboard" /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OfferSection;
