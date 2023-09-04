import { Box } from "@mui/material";

import SubscriptionTitle from "./SubscriptionTitle";
import SubscriptionPlan from "./SubscriptionPlan";
import PricingSection from "../home/components/PricingSection"

const Subscription = () => {
  return (
    <Box padding={{ xs: "10px", sm: "20px", md: "25px" }}>
      <SubscriptionTitle />

      <SubscriptionPlan />
     
      <PricingSection />
  
    </Box>
  );
};

export default Subscription;
