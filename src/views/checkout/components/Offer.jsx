import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const Offer = () => {
  const { state: { item } } = useLocation();
  console.log('state', item);
  return (
    <Box marginTop="40px" textAlign={{ xs: "center", md: "start" }}>
      <Typography
        fontSize="20px"
        lineHeight="20px"
        fontWeight="600"
        color="#9CA3AF"
        marginBottom="20px"
      >
        Try { item.product.name }
      </Typography>

      <Typography
        fontSize="40px"
        lineHeight="40px"
        fontWeight="600"
        color="#FFF"
        marginBottom="20px"
      >
        7 days free
      </Typography>

      <Typography
        fontSize="14px"
        lineHeight="14px"
        fontWeight="500"
        color="#9CA3AF"
        marginBottom="8px"
      >
        Then ${(item.unit_amount / 100).toFixed(2)} per month
      </Typography>
      <Typography
        fontSize="14px"
        lineHeight="14px"
        fontWeight="500"
        color="#9CA3AF"
        marginBottom="20px"
      >
        {item.product.description}
      </Typography>
    </Box>
  );
};

export default Offer;
