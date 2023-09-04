import React from "react";
import { Box, CardMedia, Typography, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CheckIcon from "../../../../images/pricing/check-icon.png";
import { useStore } from "../../../../context/AppProvider";

const SubscriptionCard = ({ item }) => {
  const navigate = useNavigate();
  const { user } = useStore();

  const isSubscriptionActive = user?.subscription?.id && !['canceled'].includes(user?.subscription?.status);

  return (
    <Box
      sx={{
        backgroundColor: "#1F2A37",
        borderRadius: "10px",
        padding: "30px",
        marginBottom: { xs: "20px", md: 0 },
        transition: "transform 250ms linear",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Typography
        variant="h6"
        fontSize="24px"
        fontWeight="700"
        color="#FFFFFF"
        marginBottom="10px"
      >
        {item?.product?.name}
      </Typography>

      <Typography
        variant="h1"
        fontSize="16px"
        fontWeight="500"
        color="#FFFFFF"
        marginBottom="30px"
      >
        {item?.product?.description}
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
          ${(item.unit_amount / 100).toFixed(2)}
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
        sx={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}
      >
        <Button
          disabled={isSubscriptionActive}
          variant="contained"
          onClick={() =>
            navigate(`/checkout?priceId=${item.id}`, { state: { item } })
          }
          sx={{
            width: "100%",
          }}
          className="login-button"
        >
          Start trial
        </Button>
      </Box>

      {item.features.map((feature, key) => (
        <Box
          key={key}
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
          <Typography fontSize="16px" fontWeight="500" color="#FFFFFF">
            {feature}
          </Typography>
        </Box>
      ))}

      <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
    </Box>
  );
};

export default SubscriptionCard;
