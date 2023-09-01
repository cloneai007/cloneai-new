import React from 'react'
import { Button, IconButton, Typography, useTheme } from "@mui/material";
import tempImage4 from '../../images/newHome/30x30.png'
import transparency from '../../images/newHome/transparency.PNG'
import flatrate from '../../images/newHome/flatrate.png'
import minInvestment from '../../images/newHome/whatweOffer_1.png'



import { Grid, Tooltip } from "@mui/material";
import { tokens } from "../../theme";
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});


export default function Foryou() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container spacing="2" justifyContent={"space-evenly"}  width={"80%"} mb="40px">
      <Grid item xs={12} display="flex" justifyContent={"center"} mt="40px" mb="40px">

            <Typography
              variant="h11"
             // width={"inherit"}
              justifyContent={"center"}
              align="center"
              display="flex"
              color={colors.grey[100]}
              //fontWeight="600"
              sx={{ m: "0 0 5px 0" }}
            >
              Is Clone AI for you? <br/>
            </Typography>
           

 </Grid>
      


 


      <Grid item xs={12} xl={6} display="flex" justifyContent={"center"} mt="30px" mb="20px" >
        <Box justifyContent={"start"} display="flex"  alignItems={"center"} mr="10px"
        sx={{
          border: '1px solid white',
          bgcolor: 'transparent',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          height:"300px"
        }}
        >

          <Grid container spacing={2} justifyContent={"start"} display="flex">
          <Grid item xs={12}>
          <IconButton width="inherit" sx={{
           
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent"
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: 'transparent !important',
              opacity: 0,
            },
          }}>
            <img src={tempImage4} alt="tempImg"  width="50px" height="50px" />
          </IconButton>
          </Grid>

          <Grid item xs={12} justifyContent={"start"} display="flex">
          <Typography
              variant="h4"
             // width={"inherit"}
              justifyContent={"center"}
              align="center"
              display="flex"
              color={colors.grey[100]}
              //fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              Money always with you <br/>
            </Typography>
            </Grid>

            <Grid item xs={12}  justifyContent={"start"} display="flex">
            <Typography
              variant="h6"
             
              display="flex"
              justifyContent={"left"}
              align="left"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
             Another thing we dislike about hedge funds: it’s difficult to get in them if you even can find one, reserved for the wealthy and your money is typically locked up for 2 years or 24 months. At Clone Ai, we never ask for your money. That’s because it always stays inside your brokerage account. <br />
              
            </Typography>
            </Grid>
            </Grid>
        </Box>
      </Grid>
      



      <Grid item xs={12} xl={6} display="flex" justifyContent={"center"} mt="30px" mb="20px">
        <Box justifyContent={"start"} display="flex"  alignItems={"center"}
        sx={{
          border: '1px solid white',
          bgcolor: 'transparent',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          height:"300px"
        }}
        >

          <Grid container spacing={2} justifyContent={"start"} display="flex">
          <Grid item xs={12}>
          <IconButton width="inherit" sx={{
           
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent"
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: 'transparent !important',
              opacity: 0,
            },
          }}>
            <img src={transparency} alt="tempImg" width="50px" height="50px"/>
          </IconButton>
          </Grid>

          <Grid item xs={12} justifyContent={"start"} display="flex">
          <Typography
              variant="h4"
             // width={"inherit"}
              justifyContent={"center"}
              align="center"
              display="flex"
              color={colors.grey[100]}
              //fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              Full transparency
 <br/>
            </Typography>
            </Grid>

            <Grid item xs={12}  justifyContent={"start"} display="flex">
            <Typography
              variant="h6"
             
              display="flex"
              justifyContent={"left"}
              align="left"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
We show you all the results of trades tracked by Clone Ai. Some are good. Some are not.              
            </Typography>
            </Grid>
            </Grid>
        </Box>
      </Grid>
      


      <Grid item xs={12} xl={6} display="flex" justifyContent={"center"} mt="30px" mb="20px" >
        <Box justifyContent={"start"} display="flex"  alignItems={"center"} mr="10px"
        sx={{
          border: '1px solid white',
          bgcolor: 'transparent',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          height:"300px"
        }}
        >

          <Grid container spacing={2} justifyContent={"start"} display="flex">
          <Grid item xs={12}>
          <IconButton width="inherit" sx={{
           
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent"
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: 'transparent !important',
              opacity: 0,
            },
          }}>
            <img src={minInvestment} width="50px" height="50px" alt="tempImg" />
          </IconButton>
          </Grid>

          <Grid item xs={12} justifyContent={"start"} display="flex">
          <Typography
              variant="h4"
             // width={"inherit"}
              justifyContent={"center"}
              align="center"
              display="flex"
              color={colors.grey[100]}
              //fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              Minimum investment
 <br/>
            </Typography>
            </Grid>

            <Grid item xs={12}  justifyContent={"start"} display="flex">
            <Typography
              variant="h6"
             
              display="flex"
              justifyContent={"left"}
              align="left"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
To be eligible for Clone Ai Algorithmic strategies you will need to have a margin account enabled requiring minimum $25,000 If you don’t have this amount you will not be eligible for the service.              
            </Typography>
            </Grid>
            </Grid>
        </Box>
      </Grid>
      

      <Grid item xs={12} xl={6} display="flex" justifyContent={"center"} mt="30px" mb="20px" >
        <Box justifyContent={"start"} display="flex"  alignItems={"center"} mr="10px"
        sx={{
          border: '1px solid white',
          bgcolor: 'transparent',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          height:"300px"
        }}
        >

          <Grid container spacing={2} justifyContent={"start"} display="flex">
          <Grid item xs={12}>
          <IconButton width="inherit" sx={{
           
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent"
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: 'transparent !important',
              opacity: 0,
            },
          }}>
            <img src={flatrate} alt="tempImg" width="50px" height="50px"/>
          </IconButton>
          </Grid>

          <Grid item xs={12} justifyContent={"start"} display="flex">
          <Typography
              variant="h4"
             // width={"inherit"}
              justifyContent={"center"}
              align="center"
              display="flex"
              color={colors.grey[100]}
              //fontWeight="400"
              sx={{ m: "0 0 5px 0" }}
            >
              Flat monthly fees <br/>
            </Typography>
            </Grid>

            <Grid item xs={12}  justifyContent={"start"} display="flex">
            <Typography
              variant="h6"
             
              display="flex"
              justifyContent={"left"}
              align="left"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
Another thing about hedge funds: they charge a percentage of any profits they generate, its called a performance fee and also a management fee.
Typically its 2% management and 20% performance fee: or 20% of profits. We don’t. Our Algorithmic strategies can be rented for a flat monthly fee. If a strategy generates profits, you pay $0 extra.              
            </Typography>
            </Grid>
            </Grid>
        </Box>
      </Grid>
      



    </Grid>

    
  )
}
