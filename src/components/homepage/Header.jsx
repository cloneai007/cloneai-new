import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  useTheme,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import { tokens } from "../../theme";
import logoWht from "../../images/logowhite.png";
import LoginIcon from "@mui/icons-material/Login";

const Header = ({ title, subtitle, scrollToSection }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let navigate = useNavigate();

  function goToSection() {
    scrollToSection("howItWorks");
  }

  return (
    <Box mb="30px" display="flex">
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xl={4}
          xm={12}
          xs={12}
          justifyContent={{ xl: "start", xs: "center" }}
          display="flex"
        >
          <IconButton
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "transparent",

              ":hover": {
                backgroundColor: "transparent",
              },
              "& .MuiTouchRipple-root span": {
                backgroundColor: "transparent !important",
                opacity: 0,
              },
            }}
          >
            <img src={logoWht} width="170px" height="38px" alt="logo" />
          </IconButton>
        </Grid>

        <Grid
          item
          xl={4}
          xm={12}
          xs={12}
          //justifyContent="space-between"
          justifyContent={{
            xl: "space-between",
            xm: "space-between",
            xs: "space-evenly",
          }}
          display="Flex"
        >
          <Button
            //sx={{ m: "0 20px 0px 20px" }}
            onClick={() => scrollToSection("howItWorks")}
          >
            <Typography
              variant="h5"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 10px 5px 10px" }}
            >
              How it works
            </Typography>
          </Button>

          <Button onClick={() => scrollToSection("Pricing")}>
            <Typography
              variant="h5"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              Pricing
            </Typography>
          </Button>

          <Button onClick={() => scrollToSection("Contact")}>
            <Typography
              variant="h5"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              Contact Us
            </Typography>
          </Button>
        </Grid>

        <Grid
          item
          xl={4}
          xm={4}
          xs={12}
          justifyContent={{ xl: "end", xm: "end", xs: "center" }}
          display="flex"
        >
          {/*           <Tooltip title="Login">
          <IconButton sx={{
            borderBlockColor:"white",

          }}>
            <PermIdentityOutlinedIcon  fontSize="large"/>
          </IconButton>
          </Tooltip>
           */}
          <Button
            onClick={() => navigate("/dashboard")}
            sx={{
              backgroundColor: colors.redAccent[500],
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px 20px",
              ":hover": {
                backgroundColor: colors.redAccent[500],
              },
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
