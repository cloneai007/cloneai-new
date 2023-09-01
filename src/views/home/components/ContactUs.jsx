import { Box, Typography, Grid, TextField, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";
import { Formik, Form } from "formik";
import Fade from "react-reveal/Fade";

import ContactUsBanner from "./ContactUsBanner";
import { useState } from "react";

import MessageIcon from "../../../images/message-icon.png";
import PhoneIcon from "../../../images/phone-icon.png";
import { toast } from "react-hot-toast";
import { useStore } from "../../../context/AppProvider";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

const CustomTextField = styled(TextField)({
  width: "100%",

  "& label": {
    fontSize: "12px",

    "&.Mui-focused": {
      color: "#9CA3AF",
      zIndex: 2,
      fontSize: "12px",
    },
  },
  "& .MuiInputLabel-root": {
    marginBottom: "10px",
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      padding: "12px",
      color: "#FFFFFF",
      zIndex: 1,
      fontSize: "15px",
      fontWeight: "500",
    },
    "& textarea": {
      color: "#FFFFFF",
      zIndex: 1,
      fontSize: "15px",
      fontWeight: "500",
    },
    "& fieldset": {
      borderColor: "#474B53 !important",
      backgroundColor: "#1F2A37 !important",
      borderRadius: "8px",
      top: 0,
    },
  },
  "& .MuiInputBase-root:has(> input:-webkit-autofill)": {
    backgroundColor: "transparent",
    "-webkit-box-shadow": "none !important",
  },
});

// const openGmail = () => {
//   // Replace 'youremail@gmail.com' with the recipient's email address
//   const recipientEmail = "Support@cloneai.io";
//   const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;

//   window.open(gmailUrl, "_blank");
// };

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const { sendContactUsEmail } = useStore();

  const sendEmail = async (body) => {
    try {
      setLoading(true);
      const response = await sendContactUsEmail(body);
      console.log(response);
      toast.success(
        response.message || "Your message has been sent successfully!",
        {
          style: {
            fontSize: "18px", // You can adjust the font size as needed
            textAlign: "center",
          },
        }
      );
    } catch (e) {
      toast.error(e?.message || "Please fill in the form!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        px: { xs: "20px", sm: "50px", md: "100px", lg: "206px" },
        backgroundColor: "#1F2A37",
      }}
    >
      <Grid container columnSpacing={3} sx={{ paddingY: "100px" }}>
        <Grid item xs={12} md={5}>
          <Fade bottom>
            <Typography
              variant="h5"
              fontSize="40px"
              fontWeight="700"
              color="#FFFFFF"
              marginBottom="21px"
            >
              Contact us?
            </Typography>
          </Fade>

          <Fade bottom>
            <Typography
              variant="p"
              fontSize="18px"
              fontWeight="500"
              color="#D1D5DB"
            >
              Get in touch
            </Typography>
          </Fade>

          <Fade bottom>
            <Box display="flex" alignItems="center" marginTop="20px">
              <CardMedia
                component="img"
                sx={{
                  objectFit: "contain",
                  width: "32px",
                  height: "32px",
                }}
                image={PhoneIcon}
                alt="Icon"
              />

              <a href="tel:+15614904275" style={{ color: "white" }}>
                <Typography
                  variant="h6"
                  fontSize="20px"
                  fontWeight="500"
                  marginLeft="15px"
                >
                  561-490-4275
                </Typography>
              </a>
            </Box>
          </Fade>

          <Fade bottom>
            <Box
              display="flex"
              alignItems="center"
              marginTop="20px"
              marginBottom="20px"
            >
              <CardMedia
                component="img"
                sx={{
                  objectFit: "contain",
                  width: "32px",
                  height: "32px",
                }}
                image={MessageIcon}
                alt="Icon"
              />
              <a
                href="mailto:Support@cloneai.io"
                style={{ color: "white" }}
                // onClick={openGmail}
              >
                <Typography
                  variant="h6"
                  fontSize="20px"
                  fontWeight="500"
                  marginLeft="15px"
                >
                  Support@cloneai.io
                </Typography>
              </a>
            </Box>
          </Fade>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography
            variant="h5"
            fontSize="35px"
            fontWeight="700"
            marginLeft="5px"
            marginBottom="15px"
          >
            Subscribe To Our{" "}
            <span style={{ color: "#f30000ff" }}>NewsLetter</span>
          </Typography>
          <Fade>
            <Box
              sx={{
                backgroundColor: "#111928",
                borderRadius: "10px",
                border: "1px solid #4B5563",
                padding: { xs: "15px", sm: "20px", md: "40px" },
                boxShadow: "0px 2px 25px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  message: "",
                }}
                onSubmit={(values) => {
                  sendEmail(values);
                }}
              >
                {({ errors, handleChange, touched }) => (
                  <Form>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                      <Grid item xs={12} md={6}>
                        <CustomTextField
                          id="firstName"
                          autoComplete="off"
                          variant="outlined"
                          label="First Name"
                          required
                          type="text"
                          error={errors.firstName && touched.firstName}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <CustomTextField
                          id="lastName"
                          autoComplete="off"
                          variant="outlined"
                          label="Last Name"
                          required
                          type="text"
                          error={errors.lastName && touched.lastName}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <CustomTextField
                          autoComplete="off"
                          id="email"
                          variant="outlined"
                          label="Email Address"
                          required
                          type="email"
                          error={errors.email && touched.email}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <CustomTextField
                          autoComplete="off"
                          id="message"
                          variant="outlined"
                          label="Message"
                          required
                          multiline
                          rows={4}
                          maxRows={8}
                          type="text"
                          error={errors.message && touched.message}
                          onChange={handleChange}
                        />
                        {/* <FormControlLabel
                          required
                          control={<Checkbox sx={{
                            color: 'white',
                            '&.Mui-checked':{
                              color: 'red'
                            }
                          }}/>}
                          label="Terms & Conditions"
                        /> */}
                      </Grid>

                      <Grid item xs={12}>
                        <LoadingButton
                          type="submit"
                          className="login-button"
                          loading={loading}
                          variant="contained"
                          sx={{
                            width: "100%",
                            marginTop: "10px",
                          }}
                        >
                          Message us
                        </LoadingButton>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Fade>
        </Grid>

        <Grid item xs={12}>
          <Fade>
            <ContactUsBanner />
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
