import { Typography, useTheme } from "@mui/material";
import React from "react";
import {
  ToggleContainer,
  ToggleOption,
  ToggleBack,
  ToggleFront,
} from "./price-toggle.styles";
import { tokens } from "../../../../../theme";

const PriceToggle = ({ option, handleToggle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ToggleContainer onClick={handleToggle}>
      <ToggleOption>
      <Typography
              variant="h5"
             // width={"inherit"}
              justifyContent={"center"}
              align="center"
              display="flex"
              color={colors.grey[100]}
              //fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              Annually
            </Typography>
        
        </ToggleOption>
      <ToggleBack>
        <ToggleFront option={option} />
      </ToggleBack>
      <ToggleOption>
      <Typography
              variant="h5"
             // width={"inherit"}
              justifyContent={"center"}
              align="center"
              display="flex"
              color={colors.grey[100]}
              //fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              Monthly
            </Typography>
        </ToggleOption>
    </ToggleContainer>
  );
};

export default PriceToggle;
