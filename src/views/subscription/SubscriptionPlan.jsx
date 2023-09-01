import React, { useState } from "react";
import { Box, Button as ButtonMUI, Divider, Typography } from "@mui/material";
import styled from "styled-components";

import SubscriptionItem from "./SubscriptionItem";

import UnionSubscriptionIcon from "../../images/pricing/union-brown.png";
import ClockIcon from "../../images/dashboard/time.png";
import PaperIcon from "../../images/dashboard/paper.png";
import { useStore } from "../../context/AppProvider";
import moment from "moment";
import { toast } from "react-hot-toast";

const Button = styled(ButtonMUI)({
  fontSize: "16px !important",
  fontWeight: "700 !important",
  borderRadius: "10px !important",
  backgroundColor: "#fff !important",
  color: "#000 !important",
});

const SubscriptionPlan = () => {
  const { user, cancelSubscription } = useStore();
  const [loading, setLoading] = useState(false);

  const onCancelSubscription = async () => {
    try {
      setLoading(true);
      await cancelSubscription();
    } catch (e) {
      toast.error(e.message || 'Something went wrong!')
    } finally {
      setLoading(false);
    }
  }

  const formatDate = () => {
    const current_period_end = user?.subscription?.current_period_end;
    if (current_period_end) {
      const date = moment.unix(current_period_end);
      return date.format('MMMM D, YYYY - h:mmA');
    }
    return null;
  }

  const getDescription = () => {
    const status = user?.subscription?.status;
    const current_period_end = user?.subscription?.current_period_end;
    const trial_end = user?.subscription?.trial_end;
    if (status === 'trialing') {
      return `Your trial will expire on ${formatDate(trial_end)}.
      Your subscription will renew automatically. You can cancel anytime.`;
    } else if (status === 'active') {
      return `Your subscription will renew automatically on ${formatDate(current_period_end)}. You can cancel anytime.`;
    } else if (status === 'past_due') {
      return `Your subscription is past due. Please update your payment information to continue accessing the service.`;
    } else if (status === 'canceled') {
      return `Your subscription is canceled. Your access will end on ${formatDate(current_period_end)}. You can reactivate your subscription before this date.`;
    } else if (status === 'incomplete') {
      return `Your subscription is incomplete. Please update your payment information to complete the subscription process.`;
    } else if (status === 'incomplete_expired') {
      return `Your subscription payment was not completed. Please start the subscription process again.`;
    } else {
      return `No active subscription found. Subscribe now to access our premium content.`;
    }
  };

  const isSubscriptionActive = user?.subscription?.id && !['canceled'].includes(user?.subscription?.status);

  return (
    <Box
      sx={{
        backgroundColor: "#111928",
        borderRadius: "15px",
        padding: "25px",
        marginTop: "30px",
      }}
    >
      {isSubscriptionActive === false ?
        <React.Fragment>
          <Typography fontSize="20px" lineHeight="20px" fontWeight="600">
            Current Plan
          </Typography>

          <Divider sx={{ marginTop: "25px", marginBottom: "25px" }} />

          <SubscriptionItem
            title="Plan"
            description={user?.subscription?.plan?.name}
            icon={UnionSubscriptionIcon}
          />
          <SubscriptionItem
            title="Next Payment"
            description={formatDate()}
            icon={ClockIcon}
          />
          <SubscriptionItem
            title="Note"
            description={getDescription()}
            icon={PaperIcon}
          />

          <Divider sx={{ marginTop: "25px", marginBottom: "25px" }} />

          <Button
            variant="contained"
            disabled={loading}
            onClick={onCancelSubscription}
            sx={{
              fontSize: { xs: "13px !important", sm: "16px !important" },
              padding: {
                xs: "7px 16px 7px 16px !important",
                sm: "10px 24px 10px 24px !important",
              },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            {loading ? 'Loading...' : 'Cancel Subscription'}
          </Button>
        </React.Fragment> :
        <Typography fontSize="20px" lineHeight="20px" fontWeight="600" sx={{ color: "#838080", textAlign: { xs: "center", sm: "left" } }}>
          No Subscriptions
        </Typography>
      }
    </Box>
  );
};

export default SubscriptionPlan;
