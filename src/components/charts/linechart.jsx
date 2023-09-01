import { useTheme, styled } from "@mui/material";
import React from "react";
import {
  YAxis,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import { tokens } from "../../theme";
import { data } from "./data";

const ResponsiveContainerStyled = styled(ResponsiveContainer)({
  "& .recharts-default-tooltip": {
    borderRadius: "5px",
    padding: "0 10px !important",
  },
});

function StockChart({ width, height }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveContainerStyled width={width} height={height}>
      <AreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="redAndBlack" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="rgba(210, 36, 24, 0.5625)"
              stopOpacity={1}
            />
            <stop
              offset="95%"
              stopColor="rgba(210, 36, 24, 0) 86.99%)"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <YAxis
          label={{ value: "Returns [%]", angle: -90, position: "insideLeft" }}
          type="number"
          domain={[0, 1000]}
          axisLine={{ stroke: "black" }}
          tick={{ fill: colors.redAccent[500] }}
          tickLine={{ stroke: colors.redAccent[500] }}
        />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="CloneAi"
          stroke={"#F30000"}
          dot={false}
          animationDuration={3000}
          fill="url(#redAndBlack)"
        />
        <Area
          type="monotone"
          dataKey="NASDAQ"
          stroke="#2559CA"
          dot={false}
          animationDuration={3000}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="S&P500"
          stroke="#82ca9d"
          dot={false}
          animationDuration={3000}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainerStyled>
  );
}

export default StockChart;
