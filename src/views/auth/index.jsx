import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import CardMedia from "@mui/material/CardMedia";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LoginForm from "./forms/LoginForm";
import SignUpForm from "./forms/SignUpForm";
import { Box } from "@mui/material";
import Header from "../../components/header/index";
import Footer from "../../components/footer";
import Privacy from "../../components/privacy";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MuiTab = styled(Tab)({
  "&.Mui-selected": {
    color: "white !important",
  },
});

const Login = React.memo(() => {
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openPrivacyDialog = () => {
    setOpen(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      // User is logged in, navigate to the dashboard
      navigate("/dashboard");
    } catch (error) {
      // User is not logged in
    }
  };

  return (
    <>
      <Privacy open={open} onClose={() => setOpen(false)} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Header />
        <Box
          sx={{
            paddingY: "20px",
            paddingX: "10px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card className="auth-card">
            <CardContent className="auth-card-content">
              <CardMedia
                className="logo-banner"
                component="img"
                image="/logo_banner.png"
                alt="logo_banner"
              />

              <TabContext value={value}>
                <TabList
                  TabIndicatorProps={{
                    className: "auth-tab-indicator",
                  }}
                  className="auth-tab-list"
                  onChange={handleChange}
                  aria-label="auth-tabs"
                >
                  <MuiTab className="auth-tab" label="Sign in" value="1" />
                  <MuiTab
                    className="auth-tab"
                    label="Create Account"
                    value="2"
                  />
                </TabList>
                <TabPanel
                  value="1"
                  sx={{ width: "100%", padding: "20px 0", maxWidth: "400px" }}
                >
                  <LoginForm openPrivacyDialog={openPrivacyDialog} />
                </TabPanel>
                <TabPanel
                  value="2"
                  sx={{ width: "100%", padding: "20px 0", maxWidth: "400px" }}
                >
                  <SignUpForm openPrivacyDialog={openPrivacyDialog} />
                </TabPanel>
              </TabContext>
            </CardContent>
          </Card>
        </Box>
        <Footer />
      </Box>
    </>
  );
});

export default Login;
