import { Box, Typography } from "@mui/material";

const Tab = ({ number, title, active, onPressTab }) => {
  return (
    <Box
      onClick={onPressTab}
      sx={{
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        cursor: "default",
        position: "relative",
        marginBottom: { xs: "10px", sm: "0" },
      }}
    >
      <Box
        sx={{
          width: { xs: "18px", sm: "29.06px" },
          height: { xs: "18px", sm: "29.06px" },
          borderRadius: "25px",
          backgroundColor: active ? "#9A170E" : "#363e4d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: { xs: "12px", sm: "14px" },
          position: "absolute",
          left: "0",
        }}
      >
        {number}
      </Box>
      <Typography
        fontSize={{ xs: "12px", sm: "14px" }}
        lineHeight="15.4px"
        fontWeight="500"
        maxWidth="220px"
        paddingRight={{ xs: "0", sm: "10px" }}
        marginLeft={{ xs: "30px", sm: "45px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Tab;
