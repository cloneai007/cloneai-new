import { Box, CardMedia, Typography, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

import CheckIcon from "../../../images/pricing/check-icon.png";

const PricingCard = ({ icon, name, price }) => {
  const navigate = useNavigate();

  return (
    <Fade>
      <Box
        sx={{
          backgroundColor: "#1F2A37",
          borderRadius: "10px",
          padding: "30px",
          marginBottom: { xs: "20px", md: 0 },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: "40px",
            height: "40px",
            marginBottom: "18px",
          }}
          image={icon}
          alt="Category Image"
        />

        <Typography
          variant="h6"
          fontSize="24px"
          fontWeight="700"
          color="#FFFFFF"
          marginBottom="20px"
        >
          {name}
        </Typography>

        <Typography
          variant="h4"
          fontSize="40px"
          lineHeight="40px"
          fontWeight="700"
          color="#FFFFFF"
        >
          {price}
        </Typography>

        <Typography
          variant="p"
          fontSize="14px"
          fontWeight="500"
          color="#9CA3AF"
        >
          /month
        </Typography>

        <Divider sx={{ marginY: "20px" }} />

        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
        >
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              width: "18px",
              height: "18px",
              marginRight: "14px",
            }}
            image={CheckIcon}
            alt="Check Icon"
          />
          <Typography
            variant="p"
            fontSize="16px"
            fontWeight="500"
            color="#FFFFFF"
          >
            $60-120k Account size
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
        >
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              width: "18px",
              height: "18px",
              marginRight: "14px",
            }}
            image={CheckIcon}
            alt="Check Icon"
          />
          <Typography
            variant="p"
            fontSize="16px"
            fontWeight="500"
            color="#FFFFFF"
          >
            30 days Free trail
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
        >
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              width: "18px",
              height: "18px",
              marginRight: "14px",
            }}
            image={CheckIcon}
            alt="Check Icon"
          />
          <Typography
            variant="p"
            fontSize="16px"
            fontWeight="500"
            color="#FFFFFF"
          >
            Hands free software
          </Typography>
        </Box>

        <Divider sx={{ marginY: "20px" }} />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            className="login-button"
            variant="contained"
            onClick={() => navigate("/login")}
          >
            Talk to our team
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

export default PricingCard;
