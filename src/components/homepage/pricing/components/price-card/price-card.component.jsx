import React from "react";
import { useNavigate } from "react-router-dom";

import {
  PriceCardContainer,
  PlanType,
  Price,
  Divider,
  Currency,
  SellingPoint,
  LearnMoreButton,
} from "./price-card.styles.jsx";

const PriceCard = ({ option, productDetails }) => {
  let navigate = useNavigate();
  const {
    planType,
    monthlyPrice,
    annualPrice,
    maxStorage,
    maxUsers,
    maxSend,
  } = productDetails;

  return (
    <PriceCardContainer planType={planType}>
      <PlanType>{planType}</PlanType>
      <Price plan={planType}>
        <Currency>$</Currency>
        {option === "monthly" ? monthlyPrice : annualPrice}
      </Price>
      <Divider plan={planType} />
      <SellingPoint>{maxStorage} Account size</SellingPoint>
      <Divider plan={planType} />
      <SellingPoint>{maxUsers} Free trail</SellingPoint>
      <Divider plan={planType} />
      <SellingPoint>{maxSend} </SellingPoint>
      <Divider plan={planType} />
      <LearnMoreButton onClick={()=>{navigate("/dashboard")}} plan={planType}>Start today</LearnMoreButton>
    </PriceCardContainer>
  );
};

export default PriceCard;
