import React from "react";
import { Box, CardMedia, Typography, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CheckIcon from "../../../../images/pricing/check-icon.png";
import { useStore } from "../../../../context/AppProvider";

const SubscriptionCard = ({ icon, item }) => {
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
        marginBottom="10px"
      >
        {item?.product?.name}
      </Typography>
      <Typography variant="p" fontSize="14px" fontWeight="500" color="#D1D5DB">
        {item.description}
      </Typography>

      <Typography
        variant="h4"
        fontSize="40px"
        lineHeight="40px"
        fontWeight="700"
        color="#FFFFFF"
        marginTop="20px"
      >
        ${(item.unit_amount / 100).toFixed(2)}
      </Typography>

      <Typography fontSize="14px" fontWeight="500" color="#9CA3AF">
        /month
      </Typography>

      <Divider sx={{ marginY: "20px" }} />

      {item.features.map((feature, key) => (
        <Box key={key} sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
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

      <Divider sx={{ marginY: "20px" }} />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={isSubscriptionActive}
          variant="contained"
          onClick={() => navigate(`/checkout?priceId=${item.id}`, { state: { item } })}
          sx={{
            width: "100%",
            fontSize: "16px",
            background: "#d22418",
            borderRadius: "10px",
            "&:hover": {
              background: "white",
              color: "#888",
            },
          }}
        >
          Start trial
        </Button>
      </Box>
    </Box>
  );
};

export default SubscriptionCard;
