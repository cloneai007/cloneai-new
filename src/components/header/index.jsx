import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CardMedia } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import LoginIcon from "@mui/icons-material/Login";

const pages = [
  { name: "How it works", link: "/#howItWorks" },
  { name: "Pricing", link: "/#pricing" },
  { name: "Contact Us", link: "/#contact" },
];

const Header = React.memo(({ handleLogin }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" style={{ top: 0 }}>
      <Toolbar sx={{ backgroundColor: "#050709" }} disableGutters>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" }, minWidth: "83px" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ fontSize: 25 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& a": { textDecoration: "none", color: "#fff" },
              }}
            >
              {pages.map((page, key) => (
                <HashLink key={key} to={page.link} smooth>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" fontSize={18}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                </HashLink>
              ))}
            </Menu>
          </Box>

          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              // width: "123.44px",
              width: { xs: "122.45px", md: "160px" },
              display: "flex",
              cursor: "pointer",
            }}
            image="/logo_banner.png"
            alt="logo_banner"
            onClick={() => navigate("/")}
          />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              "& a": { textDecoration: "none" },
              marginLeft: "auto",
            }}
          >
            {pages.map((page, key) => (
              <HashLink key={key} to={page.link} smooth>
                <Button
                  key={page.name}
                  sx={{
                    my: 2,
                    display: "block",
                    fontSize: "16px",
                    color: "#FFFFFF",
                    textTransform: "capitalize",
                    "&:hover": { color: "red" },
                  }}
                >
                  {page.name}
                </Button>
              </HashLink>
            ))}
          </Box>

          <Box>
            <Button
              className="login-button"
              variant="contained"
              onClick={() => handleLogin("2")}
              // onClick={handelSignupVal}
              sx={{
                marginLeft: "20px",
              }}
            >
              Sign Up
            </Button>
            <Button
              className="login-button"
              variant="contained"
              onClick={() => handleLogin("1")}
              // onClick={handleLoginVal}
              sx={{
                marginLeft: "20px",
              }}
            >
              Login
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
