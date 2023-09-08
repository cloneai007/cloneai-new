import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Alert, Box, Button, Link, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../../../context/AppProvider";
import { toast } from "react-hot-toast";

const MuiAlert = styled(Alert)({
  "& .MuiIconButton-root": {
    color: "#d22417",
    marginBottom: "2px",
  },
  "&.MuiPaper-root": {
    backgroundColor: "white",
    marginBottom: 15,
    alignItems: "center",
  },
  "& .MuiAlert-message": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    fontFamily: "Inter",
    color: "#d22417",
  },
});

const LoginForm = React.memo(({ openPrivacyDialog }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { fetchCustomer, getPlans } = useStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signIn = async (formValues) => {
    try {
      setLoading(true);
      const { email, password } = formValues;
      const user = await Auth.signIn(email, password);
      await fetchCustomer();
      await getPlans();
      navigate("/dashboard");
    } catch (e) {
      if (e?.code === "UserNotConfirmedException") {
        console.log("UserNotConfirmedException");
        navigate("/verification", {
          state: { username: formValues.email, code: e.code },
        });
      }
      toast.error(e.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <Box className="auth-form">
        <OutlinedInput
          className="auth-input"
          fullWidth
          placeholder="Email address"
          {...register("email")}
          sx={{ marginBottom: 3, borderRadius: 3 }}
        />
        <OutlinedInput
          className="auth-input"
          fullWidth
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          sx={{ borderRadius: 3 }}
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
        <Link
          className="forgot-password"
          href="/forgot-password"
          color="primary"
          style={{ textDecoration: "underline" }}
        >
          Forgot Password?
        </Link>
        <Button
          className="login-button"
          fullWidth
          variant="contained"
          type="submit"
        >
          {loading ? "Loading..." : "Sign in"}
        </Button>
        <Typography className="agreement" variant="body1">
          By Signing in, Your Agree on Both the{" "}
          <Link
            className="terms-link"
            href="#"
            // onClick={() => openPrivacyDialog(true)}
            onClick={() => navigate("/privacy")}
          >
            Term and Conditions, Privacy Policy
          </Link>{" "}
          of Clone AI
        </Typography>
      </Box>
    </form>
  );
});

export default LoginForm;
