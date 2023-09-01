import React from 'react'
import { Button, IconButton, Typography, useTheme } from "@mui/material";
import tempImage4 from '../../images/newHome/30x30.png'
import { Grid, Tooltip } from "@mui/material";
import { tokens } from "../../theme";
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { useNavigate } from "react-router-dom";

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


const pricing=[
  {
    tier:"Tier 1 30-60k",
    price:"$489",
    save:"$800",
    advantage_1:"30 days Free",
    advantage_2:"Hands free software" 
  },
  {
    tier:"Tier 2 60-120k",
    price:"$979",
    save:"$1000",
    advantage_1:"30 days Free",
    advantage_2:"Hands free software" 
  },
  {
    tier:"Tier 3 120k",
    price:"$1469",
    save:"$1200",
    advantage_1:"30 days Free",
    advantage_2:"Hands free software" 
  },

]

export default function Pricing() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let navigate = useNavigate();


  return (
    <Grid container spacing="2" justifyContent={"space-evenly"}>
      <Grid item xs={12} display="flex" justifyContent={"center"}>

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
              Pricing <br/>
            </Typography>          

 </Grid>

 <Grid item xs={12} display="flex" justifyContent={"center"}>

<Typography
  variant="h5"
 // width={"inherit"}
  justifyContent={"center"}
  align="center"
  display="flex"
  color={colors.grey[100]}
  //fontWeight="600"
  sx={{ m: "0 0 5px 0" }}
>
  No hidden fees. Monthly flat rate subscription.
 <br/>
</Typography>          

</Grid>
      

    {
      pricing.map((tier,index)=>(
        <Grid item xs={12} xl={3} display="flex" justifyContent={"center"} mt="30px" mb="20px" >
        
        <Box justifyContent={"start"} display="flex"  alignItems={"center"} mr="10px"
        key={tier.index}
        
        sx={{
          border: '1px solid white',
          bgcolor: 'transparent',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          height:"400px"
        }}
        >


          <Grid container spacing={2} justifyContent={"start"} display="flex" key={tier.index}>
          

          <Grid item xs={12} justifyContent={"center"} display="flex">
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
             {tier.tier} <br/>
            </Typography>
            </Grid>

            <Grid item xs={12}  justifyContent={"center"} display="flex" alignItems={"center"}>
            <Typography
              variant="h12"
             
              display="flex"
              justifyContent={"left"}
              align="center"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
                {tier.price}
              
            </Typography>
            <Typography
              variant="h21"
             
              //display="flex"
              justifyContent={"bottom"}
              //align="end"
              color={colors.cloneai[600]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
                /p.m.
              
            </Typography>
            </Grid>

            <Grid item xs={12}  justifyContent={"center"} display="flex">
            <Typography
              variant="h5"
             
              display="flex"
              justifyContent={"left"}
              align="center"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
                save {tier.save}
              
            </Typography>
            </Grid>

            <Grid item xs={12}  justifyContent={"center"} display="flex" mt="30px">
            <Typography
              variant="h5"
             
              display="flex"
              justifyContent={"left"}
              align="left"
              color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 5px 0" }}
            >
                30 days Free <br/>
                Hands free software
              
            </Typography>
            </Grid>


            <Grid item xs={12}  justifyContent={"center"} display="flex" mt="30px">
            <Button variant="outlined" 
            //onClick={()=>(console.log("plan",tier.tier))}
            size="large"
            onClick={()=>navigate("/dashboard")}
            sx={{
              border:'1px solid white',
              width:"80%",
              color: colors.grey[100],
              ":hover":{
                backgroundColor:"white",
                color:"black"
              }

            }}>
              <Typography
              variant="h5"
             
              display="flex"
              justifyContent={"left"}
              align="left"
             // color={colors.grey[100]}
              fontWeight="300"
              sx={{ m: "0 0 0px 0" }}
            >
                Start your free trail
              
            </Typography>
              </Button>
            </Grid>


            </Grid>


        </Box>
      </Grid>
      ))
    }


      






    </Grid>

    
  )
}
