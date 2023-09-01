import { Box, Typography, CardMedia } from "@mui/material";
import Fade from "react-reveal/Fade";

import interactiveBroker from "../../../images/interactiveBrokers-white.png";

const SupportSection = () => {
  return (
    <Fade bottom>
      <Box
        sx={{
          marginTop: "111px",
          backgroundColor: "#1F2A37",
          borderRadius: "12px",
          padding: "25px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          fontSize="24px"
          fontWeight="500"
          color="#9CA3AF"
          textAlign={{ xs: "center", md: "start" }}
        >
          Supported brokerages.
        </Typography>

        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: "100%",
            maxWidth: "380px",
            height: "auto",
            marginLeft: { xs: 0, md: "82px" },
            marginBottom: "10px",
          }}
          image={interactiveBroker}
          alt="Interactive Broker"
        />
      </Box>
    </Fade>
  );
};

export default SupportSection;
