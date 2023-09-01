import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import tempImage3 from '../../images/newHome/50x50.png'
import tempImage1 from '../../images/newHome/whatweOffer_1.png'
import tempImage11 from '../../images/newHome/whatweOffer_1_2.png'
import tempImage2 from '../../images/newHome/whatweOffer_2.png'
import tempImage31 from '../../images/newHome/whatweOffer_3.png'
import step1 from '../../images/PhoneLogIn_edited.png'
import step2 from '../../images/phoneConnectAccount_edited.png'
import step3 from '../../images/phoneStocks_edited.png'

import UseAnimations from "react-useanimations";
import infinity from 'react-useanimations/lib/infinity';
import Grow from '@mui/material/Grow';

import { Grid, Tooltip } from "@mui/material";
import { tokens } from "../../theme";


export default function HowItWorksWithImages({onCalenderOpen}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container spacing="2" justifyContent={"space-evenly"}>
      <Grid item xs={12}  display="flex" justifyContent={"center"} mt="40px" mb="40px">

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
              How it works? <br/>
            </Typography>
            </Grid>
 


      <Grid item xs={12} md={3} xl={2} display="flex" justifyContent={"center"} mt="30px" mb="20px">
        <Box justifyContent={"center"} display="content">
        <img src={step1} alt="tempImg" style={{
                width:"200px",
                height:"420px"
            }}/>

        {/*  <IconButton 
          //width="inherit" 
          disabled="true"
          sx={{
            //width: "100%",
            //scale:"50%",
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent"
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: 'transparent !important',
              opacity: 0,
            },
          }}>
            
          </IconButton> */}

          <Typography
            variant="h41"
            width={"200px"}
            display="flex"
            justifyContent={"center"}
            align="center"
            color={colors.grey[100]}
            fontWeight="300"
            sx={{ m: "0 0 5px 0" }}
          >
            Start your account with CLONE Ai
          </Typography>
        </Box>
      </Grid>



      <Grid item xs={12} md={3} xl={2} display="flex" justifyContent={"center"} mt="30px" mb="20px">
        <Box justifyContent={"center"} display="content">
        <img src={step2} alt="tempImg" style={{
                width:"200px",
                height:"420px"
            }}/>


          <Typography
            variant="h41"
            width={"200px"}
            display="flex"
            justifyContent={"center"}
            align="center"
            color={colors.grey[100]}
            fontWeight="300"
            sx={{ m: "0 0 5px 0" }}
          >
            Connect your InteractiveBrokers account
          </Typography>
        </Box>
      </Grid>



      <Grid item xs={12} md={3} xl={2} display="flex" justifyContent={"center"} mt="30px" mb="20px">
        <Box justifyContent={"center"} display="content">
        <img src={step3} alt="tempImg" style={{
                width:"200px",
                height:"420px"
            }}/>

         {/*  <IconButton 
          //width="inherit" 
          disabled="true"
          sx={{
            //width: "100%",
            //scale:"50%",
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent"
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: 'transparent !important',
              opacity: 0,
            },
          }}>
            
          </IconButton> */}

          <Typography
            variant="h41"
            width={"200px"}
            display="flex"
            justifyContent={"center"}
            align="center"
            color={colors.grey[100]}
            fontWeight="300"
            sx={{ m: "0 0 5px 0" }}
          >
            Sit back and relax
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} display="flex" justifyContent={"center"} mt="40px" >
        <Button
          onClick={() => (onCalenderOpen())}
          sx={{
            backgroundColor: colors.redAccent[500] ,
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px 20px",
            ":hover": {
              backgroundColor: colors.redAccent[500] 
            }
          }}
        >
          Talk to our team
        </Button>
      </Grid>
     



    </Grid>
  )
}
