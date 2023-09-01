import React, { useState } from "react";
import "./App.css";
import { PriceFeatureContainer, PriceCardContainer } from "./app.styles";
import PriceToggle from "./components/price-toggle/price-toggle.component";
import PriceCard from "./components/price-card/price-card.component";
import { Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const plans = [
    {
        planType: "Starter",
        monthlyPrice: "489",
        annualPrice: "4890",
        maxStorage: "$25-60k ",
        maxUsers: "30 days ",
        maxSend: "Hands free software",
    },
    {
        planType: "Professional",
        monthlyPrice: "979",
        annualPrice: "9790",
        maxStorage: "$60-120k",
        maxUsers: "30 days",
        maxSend: "Hands free software",
    },
    {
        planType: "master",
        monthlyPrice: "1469",
        annualPrice: "14690",
        maxStorage: "From $120k",
        maxUsers: "30 days ",
        maxSend: "Hands free software",
    },
];

function PricingTemplate() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [option, setOption] = useState("monthly");

    const handleToggle = () => {
        if (option === "monthly") {
            setOption("annually");
        } else {
            setOption("monthly");
        }
    };

    return (
        <Grid container spacing="2" justifyContent={"space-evenly"}>
        <Grid item xs={12} display="flex" justifyContent={"center"}>

            <Typography
                variant="h1"
                // width={"inherit"}
                justifyContent={"center"}
                align="center"
                display="flex"
                color={colors.grey[100]}
                //fontWeight="600"
                sx={{ m: "0 0 5px 0" }}
            >
                Pricing <br />
            </Typography>

        </Grid>

        <Grid item xs={12} display="flex" justifyContent={"center"}>

            <Typography
                variant="h31"
                // width={"inherit"}
                justifyContent={"center"}
                align="center"
                display="flex"
                color={colors.grey[100]}
                //fontWeight="600"
                sx={{ m: "0 0 5px 0" }}
            >
                Flat rate monthly subscription
                <br />
            </Typography>

        </Grid>

        <Grid item xs={12} display="flex" justifyContent={"center"}>
        <div className="App">


            <PriceFeatureContainer>
                {/*         <h1>Our Pricing</h1>
                <PriceToggle option={option} handleToggle={handleToggle} />
                 */}
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

        </Grid>
          </Grid>
    );
}

export default PricingTemplate;
