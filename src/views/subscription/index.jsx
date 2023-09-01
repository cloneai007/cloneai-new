import { Box } from "@mui/material";

import SubscriptionTitle from "./SubscriptionTitle";
import SubscriptionPlan from "./SubscriptionPlan";

const Subscription = () => {
  return (
    <Box padding={{ xs: "10px", sm: "20px", md: "25px" }}>
      <SubscriptionTitle />

      <SubscriptionPlan />
    </Box>
  );
};

export default Subscription;
