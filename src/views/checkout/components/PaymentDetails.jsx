import { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Button as ButtonMUI,
  TextField as TextFieldOriginal,
  Typography,
} from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useQuery from "../../../hooks/useQuery";
import { useStore } from "../../../context/AppProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const TextField = styled(TextFieldOriginal)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& input": {
      padding: "12px",
      color: "#000",
      zIndex: 1,
      fontSize: "15px",
      fontWeight: "500",
    },
    "& fieldset": {
      borderColor: "#E5E7EB !important",
      backgroundColor: "#FFF !important",
      borderRadius: "8px",
      top: 0,
    },
  },
  "& .MuiInputBase-root:has(> input:-webkit-autofill)": {
    backgroundColor: "transparent",
    "-webkit-box-shadow": "none !important",
  },
});

const Button = styled(ButtonMUI)({
  width: "100%",
  fontSize: "16px !important",
  fontWeight: "700 !important",
  backgroundColor: "#2570C9 !important",
  borderRadius: "8px !important",
});

const PaymentDetails = () => {
  const query = useQuery();
  const { state: { item } } = useLocation();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, createStripeSubscription } = useStore();


  const stripe = useStripe();
  const elements = useElements();

  if (!stripe || !elements) {
    return;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const payload = {
        planName: item?.product?.name,
        email: user?.email,
        priceId: query.get('priceId')
      }

      const cardElement = elements.getElement(CardElement);

      const result = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: fullName,
          email: payload.email
        },
      });
      console.log('result', result)
      if (result.error) {
        toast.error(result?.error?.message || 'Something Went Wrong.')
      } else {
        payload.paymentMethodId = result.paymentMethod.id;
        await createStripeSubscription(payload);
        toast.success('Subscription created successfully');
        navigate('/dashboard');
      }
    } catch (e) {
      toast.error(e?.message || 'Something Went Wrong.')
    } finally {
      setLoading(false);
    }
  };

  const getDateForNext30Days = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 30);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return ` ${currentDate.toLocaleDateString('en-US', options)}`;
  }

  return (
    <Box width="100%">
      <Typography
        fontSize="20px"
        lineHeight="20px"
        fontWeight="600"
        color="#111928"
        marginBottom="50px"
      >
        Enter payment details
      </Typography>

      <Typography
        fontSize="14px"
        lineHeight="14px"
        fontWeight="500"
        color="#4B5563"
        marginBottom="15px"
      >
        Card information
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box marginBottom="30px" border="1px solid #E5E7EB" padding="12px" borderRadius="8px">
          <CardElement
            options={{
              style: {
                base: {
                  color: "#050709",
                  fontSize: "14px",
                },
              },
            }}
          />
        </Box>

        <Typography
          fontSize="14px"
          lineHeight="14px"
          fontWeight="500"
          color="#4B5563"
          marginBottom="5px"
        >
          Name on card
        </Typography>

        <TextField
          id="account-holder-name"
          value={fullName}
          placeholder="ex: Jhon Doe"
          required
          onChange={(e) => setFullName(e.target.value)}
          variant="outlined"
          sx={{ marginBottom: "10px" }}
        />

        <Button disabled={loading} type="submit" variant="contained" sx={{ marginY: "20px" }}>
          {loading ? 'Startig Trial Please Wait...' : 'Start Trial'}
        </Button>

        <Typography
          fontSize="16px"
          fontWeight="400"
          color="#4B5563"
          marginTop="10px"
          textAlign="center"
        >
          After your trial ends, you will be charged ${(item.unit_amount / 100).toFixed(2)} per month starting
          {getDateForNext30Days()}. You can always cancel before then.
        </Typography>
      </form>
    </Box>
  );
};

export default PaymentDetails;
