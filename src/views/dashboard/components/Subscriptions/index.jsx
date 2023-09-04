import { Box, Grid } from "@mui/material";

import SubscriptionCard from "./SubscriptionCard";
import { useStore } from "../../../../context/AppProvider";


const Subscriptions = () => {
  const { plans } = useStore();
  return (
    <Box>
      <Grid container columnSpacing={3} justifyContent="center">
        {plans.map((item, key) =>
          <Grid key={key} item xs={12} sm={6} md={3.8}>
            <SubscriptionCard  name={item.product.name} price={`$${item.unit_amount / 100}`} item={item} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Subscriptions;
