import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

import { Box, Button, OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Height, Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Slide from "react-reveal/Slide";
import { toast } from "react-hot-toast";

import Header from "../../components/header/index";
import Footer from "../../components/footer";
import "../auth/Auth.css";

const ForgotPassword = React.memo(() => {
  const [showPassword, setShowPassword] = useState(false);
  const [verificationLoading, setCodeVerificationLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [cooldown, setCooldown] = useState(20);
  const cooldownRef = useRef();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const startCountDown = () => {
    cooldownRef.current = setInterval(() => {
      setCooldown((t) => t - 1);
    }, 1000);
  };

  useEffect(() => {
    if (cooldown <= 0) {
      clearInterval(cooldownRef.current);
    }
  }, [cooldown]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const sendVerificationEmail = async () => {
    try {
      setCodeVerificationLoading(true);
      // Email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address.");
      }

      setCooldown(20);
      const data = await Auth.forgotPassword(email, {
        emailSubject: "Password Reset For CloneAI",
        emailMessage: "Your password reset code is {####}",
        emailFrom: "Support@cloneai.io",
      });
      startCountDown();
      console.log(data);
      return data;
    } catch (e) {
      throw e;
    } finally {
      setCodeVerificationLoading(false);
    }
  };

  const onSubmit = async (e) => {
    try {
      console.log(e);
      e.preventDefault();
      setLoading(true);
      const data = await sendVerificationEmail();
      console.log(data);
      setStep(2);
    } catch (e) {
      toast.error(e.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const forgotPasswordSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { email, password, code } = e.target;

      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?/]{8,}$/;
      if (!passwordRegex.test(password.value)) {
        throw new Error(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*()-_=+[]{}|;:'\",.<>?/)."
        );
      }

      const data = await Auth.forgotPasswordSubmit(
        email.value,
        code.value,
        password.value
      );
      console.log(data);
      toast.success("Password Changed Successfully!");
      navigate("/login");
    } catch (e) {
      console.log("forgotPasswordSubmit error", e);
      toast.error(e.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  console.log("cooldown > 0", cooldown > 0);

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
              sx={{
                width: "250px",
              }}
            />

            <form
              onSubmit={step === 1 ? onSubmit : forgotPasswordSubmit}
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
                  disabled={step === 2}
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  placeholder="Email address"
                  sx={{ marginBottom: step === 1 ? 2 : 1, borderRadius: 3 }}
                />

                {step === 2 ? (
                  <Slide top duration={300}>
                    <OutlinedInput
                      className="auth-input"
                      id="code"
                      name="code"
                      fullWidth
                      placeholder="Verification Code"
                      sx={{ marginBottom: 1, borderRadius: 3 }}
                    />

                    <OutlinedInput
                      className="auth-input"
                      fullWidth
                      id="password"
                      name="password"
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      sx={{ marginBottom: 3, borderRadius: 3 }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <Button
                      className="login-button"
                      fullWidth
                      variant="contained"
                      sx={{ marginBottom: 2 }}
                      onClick={sendVerificationEmail}
                      disabled={cooldown > 0}
                    >
                      {verificationLoading
                        ? "Loading..."
                        : `Resend ${cooldown > 0 ? `(${cooldown})` : ""}`}
                    </Button>
                  </Slide>
                ) : null}
                <Button
                  className="login-button"
                  fullWidth
                  disabled={loading}
                  type="submit"
                  variant="contained"
                  sx={{ marginBottom: 3 }}
                >
                  {loading
                    ? "Loading..."
                    : step === 2
                    ? "Change Password"
                    : "Send Verification Code"}
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

export default ForgotPassword;
