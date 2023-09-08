import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Box, Button, Link, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = React.memo(({ openPrivacyDialog }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const createAccount = async (formValues) => {
    try {
      setLoading(true);
      const { firstName, lastName, email, password } = formValues;
      const user = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name: firstName,
          family_name: lastName,
        },
      });
      // const user = await Auth.signIn(email, password);
      console.log("user createAccount", user);
      navigate("/verification", { state: { username: email } });
    } catch (error) {
      console.log("error createAccount", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(createAccount)}>
      <Box className="auth-form">
        <Box className="names-input" sx={{ marginBottom: 3 }}>
          <OutlinedInput
            fullWidth
            className="auth-input"
            {...register("firstName")}
            placeholder="First name"
            sx={{ marginRight: 1, borderRadius: 3 }}
          />
          <OutlinedInput
            fullWidth
            className="auth-input"
            {...register("lastName")}
            placeholder="Last name"
            sx={{ marginLeft: 1, borderRadius: 3 }}
          />
        </Box>
        <OutlinedInput
          className="auth-input"
          fullWidth
          {...register("email")}
          placeholder="Email address"
          sx={{ marginBottom: 3, borderRadius: 3 }}
        />
        <OutlinedInput
          className="auth-input"
          sx={{ marginBottom: 3, borderRadius: 3 }}
          fullWidth
          {...register("password")}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <OutlinedInput
          className="auth-input"
          fullWidth
          sx={{ marginBottom: 3, borderRadius: 3 }}
          placeholder="Confirm password"
          {...register("confirmPassword")}
          type={showConfirmPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
          type="submit"
        >
          {loading ? "Loading..." : "Create account"}
        </Button>
        <Typography className="agreement" variant="body1">
          By Signing in, Your Agree on Both the{" "}
          <Link
            className="terms-link"
            href="#"
            // onClick={openPrivacyDialog}
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

export default SignUpForm;
