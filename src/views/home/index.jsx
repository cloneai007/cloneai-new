import { useState } from "react";
import { Box } from "@mui/material";
import { Fragment } from "react";

import Header from "../../components/header/index";
import Footer from "../../components/footer";
import MainSection from "./components/MainSection";
import ChartSection from "./components/ChartSection";
import SupportSection from "./components/SupportSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OfferSection from "./components/OfferSection";
import ContactUs from "./components/ContactUs";
import Calendly from "../../components/calendly";
import Login from "../auth";

const Homepage = () => {
  const [openCalendly, setOpenCalendly] = useState(false);
  const [loginVal, setLoginVal] = useState();
  const [showPopup, setShowPopUp] = useState(false);

  const onCalenderOpen = () => {
    setOpenCalendly(true);
  };

  const onCalenderClose = () => {
    setOpenCalendly(false);
  };

  const handleLogin = (value) => {
    setShowPopUp(true);
    setLoginVal(value);
  };

  const close = () => {
    setShowPopUp(false);
  };

  return (
    <>
      <Box>
        <Calendly
          onCalenderOpen={openCalendly}
          onCalenderClose={onCalenderClose}
        />
        <Box>
          {showPopup ? <Login loginVal={loginVal} close={close} /> : ""}
        </Box>

        <Header handleLogin={handleLogin} />
        <Box
          sx={{ mx: { xs: "20px", sm: "50px", md: "100px", lg: "206px" } }}
          onClick={() => close()}
        >
          <MainSection onCalenderOpen={onCalenderOpen} />
          <ChartSection />
          <SupportSection />
          <div id="howItWorks">
            <HowItWorksSection onCalenderOpen={onCalenderOpen} />
          </div>
        </Box>
        <OfferSection />
        <div id="contact">
          <ContactUs />
        </div>
        <Footer showDisclaimer />
      </Box>
    </>
  );
};

export default Homepage;
