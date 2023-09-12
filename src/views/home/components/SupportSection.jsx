import { Box, Typography, CardMedia } from "@mui/material";
import Fade from "react-reveal/Fade";

import interactiveBroker from "../../../images/interactiveBrokers-white.png";
import ameriTrade from "../../../images/td_ameritradelogo.svg";
import Grid from "@mui/material/Grid";

const SupportSection = () => {
  return (
    <Fade bottom>
      {/* <Box
        sx={{
          marginTop: "111px",
          backgroundColor: "#1F2A37",
          borderRadius: "12px",
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          fontSize="18px"
          fontWeight="500"
          color="#9CA3AF"
          textAlign={{ xs: "center", md: "start" }}
          sx={{}}
        >
          Supported brokerages.
        </Typography>

        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: "100%",
            maxWidth: "245px",
            height: "auto",
            marginLeft: { xs: 0, md: "82px" },
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
          }}
          image={interactiveBroker}
          alt="Interactive Broker"
        />

        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: "100%",
            maxWidth: "245px",
            height: "auto",
            marginLeft: { xs: 0, md: "82px" },
            marginBottom: "10px",
            alignItems: "center",
          }}
          image={ameriTrade}
          alt="Interactive Broker"
        />
      </Box> */}
      {/* <br/> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          // spacing={2}
          sx={{
            marginTop: "111px",
            backgroundColor: "#1F2A37",
            borderRadius: "12px",
            padding: "20px",
            // display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              fontSize="25px"
              fontWeight="500"
              color="#9CA3AF"
              textAlign={{ xs: "center", md: "center" }}
              gap={4}
            >
              Supported brokerages.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            alignItems="center"
            sx={{ marginLeft: { xs: "0", sm: "12%" } }}
          >
            <CardMedia
              component="img"
              sx={{
                objectFit: "contain",
                // width: "100%",
                // maxWidth: "245px",
                height: "auto",
                // marginLeft: { xs: 0, md: "82px" },
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
              }}
              image={interactiveBroker}
              alt="Interactive Broker"
            />
          </Grid>
          <Grid item xs={12} md={3} alignItems="center">
            <CardMedia
              component="img"
              sx={{
                objectFit: "contain",
                // width: "100%",
                // maxWidth: "245px",
                height: "auto",
                // marginLeft: { xs: 0, md: "82px" },
                // marginBottom: "10px",
                alignItems: "center",
              }}
              image={ameriTrade}
              alt="Interactive Broker"
            />
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default SupportSection;
