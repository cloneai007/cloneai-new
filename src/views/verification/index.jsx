import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

import { Box, Button, OutlinedInput } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Header from "../../components/header/index";
import Footer from "../../components/footer";
import "../auth/Auth.css";
import { toast } from "react-hot-toast";

const Verification = React.memo(() => {
  const { state } = useLocation()
  const [resendLoading, setResendLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [cooldown, setCooldown] = useState(20);
  const cooldownRef = useRef();

  const startCountDown = () => {
    cooldownRef.current = setInterval(() => {
      setCooldown((t) => t - 1);
    }, 1000);
  }

  useEffect(() => {
    if (cooldown <= 0) {
      clearInterval(cooldownRef.current);
    }
  }, [cooldown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const username = state.username;
      await Auth.confirmSignUp(username, e.target.code.value);
      toast.success('Email verified successfully');
      navigate("/login");
    } catch (e) {
      toast.error(e.message || 'Something went wrong!')
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async (mount = false) => {
    try {
      setResendLoading(true);
      const username = state.username; // Get the username from the location state
      setCooldown(20);
      await Auth.resendSignUp(username);
      startCountDown();
      if (!mount) {
        toast.success('Verification code sent successfully!')
      }
    } catch (e) {
      console.log('error resending verification code', e);
      toast.error(e.message || 'Something went wrong!')
    } finally {
      setResendLoading(false);
    }
  };

  useEffect(() => {
    if (state.code === 'UserNotConfirmedException') {
      handleResendCode(true)
    } else {
      startCountDown();
    }
    return () => clearInterval(cooldownRef.current);
  }, []);

  return (
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

            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                className="auth-form"
                sx={{ width: "100%", maxWidth: "400px" }}
              >
                <OutlinedInput
                  className="auth-input"
                  id="code"
                  name="code"
                  fullWidth
                  placeholder="Verification Code"
                  sx={{ marginBottom: 3, borderRadius: 3 }}
                />

                <Button
                  className="login-button"
                  fullWidth
                  variant="contained"
                  sx={{ marginBottom: 2 }}
                  onClick={handleResendCode}
                  disabled={cooldown > 0 ? true : resendLoading}
                >
                   {resendLoading
                      ? "Loading..."
                      : `Resend ${cooldown > 0 ? `(${cooldown})` : ""
                      }`}
                </Button>

                <Button
                  className="login-button"
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ marginBottom: 3 }}
                >
                  {loading ? "Loading..." : "Confirm"}
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>

      <Footer />
    </Box>
  );
});

export default Verification;
