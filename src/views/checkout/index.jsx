import { Box } from "@mui/material";

import CheckoutHeader from "./components/CheckoutHeader";
import Offer from "./components/Offer";
import CheckoutDetails from "./components/CheckoutDetails";
import PaymentDetails from "./components/PaymentDetails";
import { Navigate, useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const { state } = useLocation();

  if (!state?.item) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box
      padding={{ xs: "0", md: "25px" }}
      display="flex"
      justifyContent={{ md: "center" }}
      alignItems={{ md: "center" }}
      width="100%"
      minHeight="100%"
    >
      <Box
        display="flex"
        width="100%"
        maxWidth="1252px"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          padding={{xs: "15px", md: "30px"}}
          sx={{
            backgroundColor: "#111928",
            width: { xs: "100%", md: "50%" },
            borderRadius: { xs: "0", md: "15px 0 0 15px" },
          }}
        >
          <CheckoutHeader
            headerContentMd={
              <CheckoutDetails
                sx={{
                  display: { xs: "block", md: "none" },
                  backgroundColor: "#111928",
                  marginTop: 0,
                  paddingTop: "80px",
                  paddingBottom: "20px",
                  paddingX: "20px",
                }}
              />
            }
          />
          <Offer />
          <CheckoutDetails sx={{ display: { xs: "none", md: "block" } }} />
        </Box>

        <Box
          padding="30px"
          sx={{
            backgroundColor: "#fff",
            width: { xs: "100%", md: "50%" },
            borderRadius: { xs: "0", md: "0 15px 15px 0" },
            height: { xs: "100%", md: "auto" },
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <PaymentDetails />
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
