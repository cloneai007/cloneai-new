import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import tempImage3 from '../../images/newHome/50x50.png'
import tempImage1 from '../../images/newHome/whatweOffer_1.png'
import tempImage11 from '../../images/newHome/whatweOffer_1_2.png'
import tempImage2 from '../../images/newHome/whatweOffer_2.png'
import tempImage31 from '../../images/newHome/whatweOffer_3.png'
import transparency from '../../images/newHome/transparency.PNG'
import flatrate from '../../images/newHome/flatrate.png'
import minInvestment from '../../images/newHome/whatweOffer_1.png'
import UseAnimations from "react-useanimations";
import activity from 'react-useanimations/lib/activity';
import archive from 'react-useanimations/lib/archive';
import loading2 from 'react-useanimations/lib/loading2';
import lock from 'react-useanimations/lib/lock';
import arrowUp from 'react-useanimations/lib/arrowUp';
import infinity from 'react-useanimations/lib/infinity';
import heart from 'react-useanimations/lib/heart';
import settings2 from 'react-useanimations/lib/settings2';
import GavelIcon from '@mui/icons-material/Gavel';
import Grow from '@mui/material/Grow';
import { Grid, Tooltip } from "@mui/material";
import { tokens } from "../../theme";







export default function Offer() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const offers=[
    {
      icon: <UseAnimations animation={lock}  fillColor='white'  strokeColor={colors.redAccent[500]} size={56*2} loop={true} />,
      text: "Money Never leaves your Brokerage Account"
    },
    {
      icon: <UseAnimations animation={loading2}  fillColor='black'  strokeColor={colors.redAccent[500]} size={56*2} loop={true} />,
      text: "30 days free trail"
    },
    {
      icon: <UseAnimations animation={arrowUp}  fillColor='white'  strokeColor={colors.redAccent[500]} size={56*2} loop={true} />,
      text: "Start with just $25,000"
    },
    {
      icon: <UseAnimations animation={heart} fillColor='red' strokeColor={colors.redAccent[500]} size={56*2} loop={true} />,
      text: "Flat monthly fee. No hidden costs"
    },
    {
      icon: <UseAnimations animation={activity}  fillColor='white'  strokeColor={colors.redAccent[500]} size={56*2} loop={true} />,
      text: "Detailed Dashboard"
    },
 /*    {
      icon: <GavelIcon fillColor='white' sx={{fontSize:"112px",  color: colors.redAccent[500] }}  />,
      text: "We are a U.S.-regulated company, based in Nashville TN"
    }, */
  ]
  
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
              //fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              What do we offer <br/>
            </Typography>
            </Grid>

            <Grid item xs={12} display="flex" justifyContent={"center"} mb="50px">
            <Typography
              variant="h41"
              width={"80%"}
              display="flex"
              justifyContent={"center"}
              align="center"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
             Clone Ai offers automated Algorithmic strategies for Stocks, and options <br />
              
            </Typography>
 </Grid>
      

    {
      offers.map((offer,index)=>(
        <Grid item xs={6} xm={4} xl={2} display="flex" justifyContent={"center"} mt="30px" mb="20px" key={index}>
        <Box justifyContent={"center"} >
            <Box width={"inherit"} justifyContent={"center"} display="flex">
              {offer.icon}
           </Box>
          <Typography
            variant="h41"
            width={"100%"}
            display="flex"
            justifyContent={"center"}
            align="center"
            color={colors.grey[100]}
            fontWeight="300"
            sx={{ m: "0 0 5px 0" }}
          >
            {offer.text}
          </Typography>
        </Box>
      </Grid>
      ))
    }

    </Grid>
  )
}
