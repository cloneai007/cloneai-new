import { Box, CardMedia, Typography } from "@mui/material";

const SubscriptionItem = ({ title, description, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "flex-start",
        marginBottom: "15px",
      }}
    >
      <Typography
        fontSize="16px"
        fontWeight="500"
        color="#9CA3AF"
        minWidth="160px"
        marginRight="15px"
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: "14px",
            marginTop: "5px",
          }}
          image={icon}
          alt="Subscription"
        />
        <Typography
          fontSize="16px"
          fontWeight="500"
          color="#FFFFFF"
          marginLeft="10px"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubscriptionItem;
