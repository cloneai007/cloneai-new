import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Grid } from "@mui/material";
import Contact from "../../components/homepage/contact";
import Faq from "../../components/homepage/faq";
import Closing from "../../components/homepage/bottom";

import ScrollToTop from "../../components/homepage/scrollToTopButton";
import logoWht from "../../images/logowhite.png";

const PrivacyPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let navigate = useNavigate();
  const ContactRef = useRef(null);

  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollBackToTop();
  }, []);

  const terms = [
    {
      title: "1. What This Privacy Policy Covers",
      content:
        "This policy covers how Clone Ai LLC treats personal information that Clone Ai LLC collects and receives. Personal information is information about you that is personally identifiable like your name, address, email address, IP address, or phone number, and that is not otherwise publicly available. This policy does not apply to the practices of companies that Clone Ai LLC does not own or control, or to people that Clone Ai LLC does not employ or manage.",
    },
    {
      title: "2. Information Collection and Use, General",
      content:
        " Clone Ai LLC collects personal information when you register with Clone Ai LLC, and when you use Clone Ai LLC products or services. When you register, we ask for information such as your name and email address. Once you register with Clone Ai LLC and sign into our services, you are not anonymous to us. Clone Ai LLC collects information about your transactions with us and with some of our business partners, including information about trading advice you subscribe to. Clone Ai LLC automatically receives and records information on our server logs from your browser, including your IP address, Clone Ai LLC cookie information, and the page you request. Clone Ai LLC uses this information to customize the content you see, fulfill your requests for products and services, improve our services, contact you, conduct research, and provide anonymous reporting for internal and external clients.",
    },
    {
      title: "3. Information Sharing and Disclosure",
      content:
        "Clone Ai LLC does not rent, sell, or share personal information about you with other people or nonaffiliated companies except to provide products or services you’ve requested, when we have your permission, or under the following circumstances: We provide the information to trusted partners who work on behalf of or with Clone Ai LLC under confidentiality agreements. However, these companies do not have any independent right to use or share this information. We respond to subpoenas, court orders, or legal process, or to establish or exercise our legal rights or defend against legal claims; We believe it is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Clone Ai LLC’s terms of use, or as otherwise required by law. We transfer information about you if Clone Ai LLC is acquired by or merged with another company. In this event, Clone Ai LLC will notify you before information about you is transferred and becomes subject to a different privacy policy.",
    },
    {
      title: "4. Cookies",
      content:
        "Clone Ai LLC may set and access Clone Ai LLC cookies on your computer. Advertisers or other companies do not have access to Clone Ai LLC’s cookies. Your data is not shared with any parties.",
    },
    {
      title: " 5. Your Ability to Edit Your Account Information",
      content:
        "You can edit your Clone Ai LLC Account Information, including your marketing preferences, at any time. Users can opt out of receiving future marketing communications or they can unsubscribe by following instructions contained in a message they receive. We reserve the right to send you certain communications relating to the Clone Ai LLC service, such as service announcements and administrative messages, that are considered part of your Clone Ai LLCaccount, without offering you the opportunity to opt-out of receiving them.",
    },
    {
      title: "Confidentiality and Security",
      content:
        "We limit access to personal information about you to employees who we believe reasonably need to come into contact with that information to provide products or services to you or in order to do their jobs. Your Clone Ai LLC Account Information is password-protected. Clone Ai LLC uses industry-standard SSL-encryption to protect data transmissions.",
    },
    {
      title: "Your Right To Be Forgotten",
      content:
        " If you really, really don’t like us, you can remove your account from our records entirely by going to https:// Cloneai.io/removeaccount. If you use our automated trading service, we may archive certain trading-related information, even after removing you from our main application and marketing databases, in order to comply with rules imposed on us by U.S. and international financial regulators. Data Protection Officer We have appointed a Data Protection Officer. You can contact the person by emailing privacy@Cloneai.io. Changes to this Privacy Policy Clone Ai LLC may update this policy. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your Clone Ai LLC account or by placing a prominent notice on our site.",
    },
  ];

  return (
    <Box
      m="20px"
      ml={{ xl: "100px", xs: "10px" }}
      mr={{ xl: "100px", xs: "10px" }}
      justifyContent={"center"}
      display="content"
      minWidth={"400px"}
    >
      <ScrollToTop />

      {/* HEADER */}
      <Box mb="30px" display="flex">
        <Grid container spacing={2} alignItems="center">
          <Grid item xl={4} xm={12} xs={12} justifyContent="start">
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
            justifyContent={{
              xl: "space-between",
              xm: "space-between",
              xs: "space-evenly",
            }}
            display="Flex"
          ></Grid>

          <Grid
            item
            xl={4}
            xm={4}
            xs={12}
            justifyContent={{ xl: "end", xm: "end", xs: "center" }}
            display="flex"
          >
            <Button
              onClick={() => navigate("/dashboard")}
              sx={{
                backgroundColor: "#d22418",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 20px",
                ":hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        spacing="2"
        justifyContent={"center"}
        mt="100px"
        display={"flex"}
      >
        <Grid item xs={12} display="flex" justifyContent={"center"} mb="50px">
          <Typography
            paragraph={"true"}
            variant="h1"
            width={"inherit"}
            color={colors.grey[100]}
            fontWeight="600"
            sx={{ m: "0 0 5px 0" }}
          >
            Terms and Conditions <br />
          </Typography>
        </Grid>

        {terms.map((term, index) => (
          <>
            <Grid item xs={12} display="flex" justifyContent={"start"}>
              <Typography
                paragraph={"true"}
                variant="h3"
                width={"inherit"}
                color={colors.grey[100]}
                fontWeight="400"
                sx={{ m: "0 0 5px 0" }}
              >
                {term.title} <br />
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent={"center"}
              mb="50px"
            >
              <Typography
                inline
                align="justify"
                variant="h4"
                color={colors.grey[100]}
                fontWeight="300"
                sx={{ m: "0 0 5px 0" }}
              >
                <br /> {term.content} <br />
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="100px"
        ref={ContactRef}
      >
        <Contact />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="100px"
        backgroundColor={colors.cloneai[400]}
        sx={{
          borderRadius: 10,
        }}
      >
        <Faq />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="100px"
      >
        <Closing />
      </Box>
    </Box>
  );
};

export default PrivacyPage;
