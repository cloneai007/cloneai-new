import { useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import styled from "styled-components";

import Privacy from "../../../components/privacy";

const Link = styled(ReactRouterLink)({
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
  color: "#9CA3AF",
  marginRight: "40px",
});

const CheckoutDetails = ({ sx, lightmode }) => {
  const [open, setOpen] = useState(false);
  const { state: { item } } = useLocation();


  const openPrivacyDialog = () => {
    setOpen(true);
  };

  return (
    <Box marginTop="40px" sx={sx}>
      <Privacy open={open} onClose={() => setOpen(false)} />
      <Grid container columnSpacing={3} rowSpacing={1}>
        <Grid item xs={6}>
          <Typography
            fontSize="20px"
            lineHeight="20px"
            fontWeight="600"
            color={lightmode ? "#000" : "#fff"}
          >
            Try { item.product.name }
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            fontSize="20px"
            lineHeight="20px"
            fontWeight="600"
            color={lightmode ? "#000" : "#fff"}
            textAlign="end"
          >
            7 days free
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography
            fontSize="14px"
            lineHeight="16.8px"
            fontWeight="500"
            color="#9CA3AF"
          >
             {item.product.description}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            fontSize="14px"
            lineHeight="16.8px"
            fontWeight="500"
            color="#9CA3AF"
            marginBottom="40px"
            textAlign="end"
          >
            ${(item.unit_amount / 100).toFixed(2)} / month after
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography
            fontSize="20px"
            lineHeight="20px"
            fontWeight="600"
            color={lightmode ? "#000" : "#fff"}
          >
            Subtotal
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            fontSize="20px"
            lineHeight="20px"
            fontWeight="600"
            color={lightmode ? "#000" : "#fff"}
            textAlign="end"
          >
            ${(item.unit_amount / 100).toFixed(2)}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider
            color="#474B53"
            sx={{ marginTop: "25px", marginBottom: "25px" }}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography
            fontSize="16px"
            lineHeight="16px"
            fontWeight="600"
            color={lightmode ? "#000" : "#fff"}
          >
            Total after trial
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            fontSize="16px"
            lineHeight="16px"
            fontWeight="600"
            color={lightmode ? "#000" : "#fff"}
            marginBottom="30px"
            textAlign="end"
          >
            ${(item.unit_amount / 100).toFixed(2)}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography
            fontSize="20px"
            lineHeight="20px"
            fontWeight="600"
            color={lightmode ? "#000" : "#fff"}
          >
            Total due today
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            fontSize="20px"
            lineHeight="20px"
            fontWeight="600"
            color={lightmode ? "#000" : "#fff"}
            textAlign="end"
          >
            $0.00
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider
            color="#474B53"
            sx={{ marginTop: "25px", marginBottom: "25px" }}
          />
        </Grid>

        <Grid item xs={12}>
          <Link>Powered by Stripe</Link>
          <Link onClick={openPrivacyDialog}>Terms</Link>
          <Link onClick={openPrivacyDialog}>Privacy</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutDetails;
