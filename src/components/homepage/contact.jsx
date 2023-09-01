import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Grid } from "@mui/material";
import { tokens } from "../../theme";
import { Box } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import { Formik, Form } from "formik";
import EmailIcon from "@mui/icons-material/Email";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";


export default function Contact() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [verified, setVerified] = useState(false);
  const REACT_APP_SITE_KEY2 = "6LdiVAokAAAAAKHLhBdA2T23QC9Rk6_tiDDoANjM";

  const Sucessfullynotify = () =>
    toast.success("Your message has been sent successfully!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      style: {
        width: "400px",
      },
    });

  const Errornotify = () =>
    toast.error("Please fill in the form!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      style: {
        width: "400px",
      },
    });

  function sendEmail(url, body) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      toEmails: ["support@cloneai.io"],
      subject: "Contact Request from Cloneai.io",
      message: JSON.stringify(body),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://ra4uznuk3j.execute-api.us-east-2.amazonaws.com/Prod/send",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  function sendMessagetoAdmin(values) {
    //JSON.stringify(values, null, 2)
    console.log(values);
    //const api="https://0v73vhfs64.execute-api.us-east-2.amazonaws.com/Prod/send"
    const api = global.config.emailApiBaseUrl;

    if (!values.email && !values.firstName) {
      Errornotify();
    } else {
      Sucessfullynotify();
      sendEmail(api, values);
    }
  }

  function onVerifiedhandler() {
    setVerified(!verified);
  }

  return (
    <Grid container spacing="2" justifyContent={"space-evenly"}>
      <Grid item xs={12} display="flex" justifyContent={"center"}>
        <Typography
          variant="h11"
          justifyContent={"center"}
          align="center"
          display="flex"
          color={colors.grey[100]}
          sx={{ m: "0 0 5px 0" }}
        >
          Contact us? <br />
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        xl={4}
        display="flex"
        justifyContent={"center"}
        mt="30px"
        mb="20px"
      >
        <Box
          justifyContent={"start"}
          display="flex"
          alignItems={"center"}
          mr="10px"
          sx={{
            bgcolor: "transparent",
            minWidth: 300,
          }}
        >
          <Grid container spacing={2} justifyContent={"start"} display="flex">
            <Grid
              item
              xs={12}
              justifyContent={"center"}
              display="flex"
              alignItems={"center"}
            >
              <Typography
                variant="h2"
                justifyContent={"center"}
                align="center"
                display="flex"
                color={colors.grey[100]}
                sx={{ m: "0 0 5px 0" }}
              >
                Get in touch <br />
              </Typography>
            </Grid>

            <Grid item xs={12} justifyContent={"center"} display="flex">
              <PhoneIcon fontSize="small" />
              <Typography
                variant="h5"
                justifyContent={"center"}
                align="left"
                display="flex"
                color={colors.grey[100]}
                sx={{ m: "0 0 5px 20px" }}
              >
                561-490-4275 <br />
              </Typography>
            </Grid>

            <Grid item xs={12} justifyContent={"center"} display="flex">
              <EmailIcon fontSize="small" />
              <Typography
                ml="20px"
                variant="h5"
                justifyContent={"center"}
                align="left"
                display="flex"
                color={colors.grey[100]}
                sx={{ m: "0 0 5px 20px" }}
              >
                Support@cloneai.io <br />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        xl={8}
        display="flex"
        justifyContent={"center"}
        mt="30px"
        mb="20px"
      >
        <Box
          justifyContent={"start"}
          display="flex"
          alignItems={"center"}
          mr="10px"
        >
          <Grid container spacing={2} justifyContent={"start"} display="flex">
            <Grid
              item
              xs={12}
              justifyContent={"center"}
              display="flex"
              mt="30px"
            ></Grid>

            <Container component="main" maxWidth="md">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  message: "",
                }}
                onSubmit={(values) => {
                  sendMessagetoAdmin(values);
                }}
              >
                {({ errors, handleChange, touched }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          error={errors.firstName && touched.firstName}
                          autoComplete="fname"
                          name="firstName"
                          variant="filled"
                          fullWidth
                          onChange={handleChange}
                          id="firstName"
                          label="First Name"
                          helperText={
                            errors.firstName && touched.firstName
                              ? errors.firstName
                              : null
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          error={errors.lastName && touched.lastName}
                          variant="filled"
                          fullWidth
                          onChange={handleChange}
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lname"
                          helperText={
                            errors.lastName && touched.lastName
                              ? errors.lastName
                              : null
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={errors.email && touched.email}
                          variant="filled"
                          fullWidth
                          onChange={handleChange}
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          helperText={
                            errors.email && touched.email ? errors.email : null
                          }
                        />
                      </Grid>
                      <Grid item xs={12} mb="20px">
                        <TextField
                          id="filled-multiline-static"
                          error={errors.password && touched.password}
                          multiline
                          rows={4}
                          variant="filled"
                          fullWidth
                          mb="20px"
                          onChange={handleChange}
                          name="message"
                          label="message"
                          type="message"
                        />
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      disabled={!verified}
                      fullWidth
                      variant="contained"
                      sx={{
                        color: "black",
                        backgroundColor: "white",
                        ":hover": {
                          color: "black",
                          backgroundColor: "white",
                        },
                      }}
                    >
                      Message Us
                    </Button>

                    <Grid
                      item
                      xs={12}
                      mt="20px"
                      mb="20px"
                      display={"flex"}
                      justifyContent={"start"}
                    >
                      <ReCAPTCHA
                        theme="dark"
                        hl="en"
                        sitekey={REACT_APP_SITE_KEY2}
                        onChange={onVerifiedhandler}
                      />
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Container>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
