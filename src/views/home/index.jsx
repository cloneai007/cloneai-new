import { useState } from "react";
import { Box } from "@mui/material";

import Header from "../../components/header/index";
import Footer from "../../components/footer";
import MainSection from "./components/MainSection";
import ChartSection from "./components/ChartSection";
import SupportSection from "./components/SupportSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OfferSection from "./components/OfferSection";
import ContactUs from "./components/ContactUs";
import Calendly from "../../components/calendly";

const Homepage = () => {
  const [openCalendly, setOpenCalendly] = useState(false);

  const onCalenderOpen = () => {
    setOpenCalendly(true);
  };

  const onCalenderClose = () => {
    setOpenCalendly(false);
  };

  return (
    <Box>
      <Calendly
        onCalenderOpen={openCalendly}
        onCalenderClose={onCalenderClose}
      />

      <Header />

      <Box sx={{ mx: { xs: "20px", sm: "50px", md: "100px", lg: "206px" } }}>
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
  );
};

export default Homepage;
