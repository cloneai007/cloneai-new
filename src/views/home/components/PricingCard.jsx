import { Box, CardMedia, Typography, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

import CheckIcon from "../../../images/pricing/check-icon.png";

const PricingCard = ({ description, name, price }) => {
  const navigate = useNavigate();

  return (
    <Fade>
      <Box
        sx={{
          backgroundColor: "#1F2A37",
          borderRadius: "10px",
          padding: "30px",
          marginBottom: { xs: "20px", md: "20px" },
          transition: "transform 250ms linear",
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#1F2A37",
          },
        }}
      >
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
          variant="h1"
          fontSize="16px"
          fontWeight="500"
          color="#FFFFFF"
          marginBottom="30px"
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", marginBottom: "20px" }}>
          <Typography
            variant="h4"
            fontSize="40px"
            lineHeight="40px"
            fontWeight="700"
            color="#FFFFFF"
            marginRight="5px"
          >
            {price}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="p"
              fontSize="14px"
              fontWeight="500"
              color="#9CA3AF"
            >
              per
            </Typography>
            <Typography
              variant="p"
              fontSize="14px"
              fontWeight="500"
              color="#9CA3AF"
            >
              month
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
            onClick={() => navigate("/login")}
            className="login-button"
          >
            Talk to our team
          </Button>
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
      </Box>
    </Fade>
  );
};

export default PricingCard;
