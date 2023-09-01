import { Box, Grid } from "@mui/material";

import Icon1 from "../../../../images/pricing/union-brown.png";
import Icon2 from "../../../../images/pricing/union-white.png";
import Icon3 from "../../../../images/pricing/union-yellow.png";
import SubscriptionCard from "./SubscriptionCard";
import { useStore } from "../../../../context/AppProvider";

const icons = {
  Master: Icon3,
  Starter: Icon1,
  Premium: Icon2
}

const Subscriptions = () => {
  const { plans } = useStore();
  return (
    <Box>
      <Grid container columnSpacing={3}>
        {plans.map((item, key) =>
          <Grid key={key} item xs={12} sm={6} md={4}>
            <SubscriptionCard icon={icons[item.product.name]} name={item.product.name} price={`$${item.unit_amount / 100}`} item={item} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Subscriptions;
