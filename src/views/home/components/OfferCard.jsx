import { Box, Typography, CardMedia } from "@mui/material";
import Fade from "react-reveal/Fade";

const OfferCard = ({ icon, label }) => {
  return (
    <Fade bottom>
      <Box
        sx={{
          backgroundColor: "#111928",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(210, 36, 24, 0.25);",
            borderRadius: "12px",
            width: { xs: "50px", sm: "70px", md: "91px" },
            minWidth: { xs: "50px", sm: "70px", md: "91px" },
            height: { xs: "50px", sm: "70px", md: "91px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "24px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              width: "100%",
              maxWidth: { xs: "20px", sm: "30px", md: "40px" },
              height: "auto",
            }}
            image={icon}
            alt="Image"
          />
        </Box>
        <Box>
          <Typography
            variant="h6"
            fontSize={{ xs: "15px", md: "20px" }}
            fontWeight={{ xs: "300", md: "500" }}
            color="#FFFFFF"
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
};

export default OfferCard;
