import React, { useState } from "react";
import "./App.css";
import { PriceFeatureContainer, PriceCardContainer } from "./app.styles";
import PriceToggle from "./components/price-toggle/price-toggle.component";
import PriceCard from "./components/price-card/price-card.component";

const plans = [
  {
    planType: "Starter",
    monthlyPrice: "489",
    annualPrice: "4890",
    maxStorage: "$30-60k trading volume",
    maxUsers: "30 days Free",
    maxSend: "Hands free software",
  },
  {
    planType: "professional",
    monthlyPrice: "24.99",
    annualPrice: "249.99",
    maxStorage: "$60-120k trading volume",
    maxUsers: "30 days Free",
    maxSend: "Hands free software",
  },
  {
    planType: "master",
    monthlyPrice: "39.99",
    annualPrice: "399.99",
    maxStorage: "$120k-... trading volume",
    maxUsers: "30 days Free",
    maxSend: "Hands free software",
  },
];

function App() {
  const [option, setOption] = useState("monthly");

  const handleToggle = () => {
    if (option === "monthly") {
      setOption("annually");
    } else {
      setOption("monthly");
    }
  };

  return (
    <div 
    //className="App"
    >
      <PriceFeatureContainer>
        <h1>Our Pricing</h1>
        <PriceToggle option={option} handleToggle={handleToggle} />
        <PriceCardContainer>
          {plans.map((plan) => (
            <PriceCard
              key={plan.planType}
              option={option}
              productDetails={plan}
            />
          ))}
        </PriceCardContainer>
      </PriceFeatureContainer>
    </div>
  );
}

export default App;
