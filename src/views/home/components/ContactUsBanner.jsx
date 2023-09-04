import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Background from "../../../images/contact-banner.png";

const ContactUsBanner = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#9A170E",
        borderRadius: "15px",
        height: { xs: "150px", sm: "200px", md: "233px" },
        marginTop: "76px",
        py: { xs: "10px", sm: "17px", md: "34px" },
        px: { xs: "10px", sm: "17px", md: "45px" },
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        fontSize={{ xs: "20px", sm: "30px", md: "40px" }}
        fontWeight="700"
        color="#FFFFFF"
        style={{
          marginTop: "30px",
        }}
      >
        Ready to automate your investing?
      </Typography>
      <Button
        className="login-button"
        variant="contained"
        sx={{ backgroundColor: "#050709 !important", marginTop: "15px" }}
        onClick={() => navigate("/login")}
      >
        Start your journey
      </Button>
    </Box>
  );
};

export default ContactUsBanner;
