import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import tempImage3 from '../../images/newHome/50x50.png'
import tempImage1 from '../../images/newHome/whatweOffer_1.png'
import tempImage11 from '../../images/newHome/whatweOffer_1_2.png'
import tempImage2 from '../../images/newHome/whatweOffer_2.png'
import tempImage31 from '../../images/newHome/whatweOffer_3.png'
import interactiveBroker from '../../images/interactiveBrokers.webp'
import { Grid, Tooltip } from "@mui/material";
import { tokens } from "../../theme";
import InteractiveBroker from '../../images/InteractiveBrokerSVG';
import InteractiveBrokerSVG from '../../images/InteractiveBrokerSVG';


export default function SupportBrokers() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container spacing="2" justifyContent={"space-evenly"} mt="20px">
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
              Supported brokerages. <br/>
            </Typography>
            </Grid>
 


      <Grid item xs={12} xl={12} display="flex" justifyContent={"center"} mt="30px" mb="20px">
        <Box justifyContent={"center"} display="content">
          {/* <InteractiveBrokerSVG/> */}

          <IconButton  width={{xl:"100%", xs:"60%"}}
          disabled="true"
          sx={{
            width: "100%",
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent"
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: 'transparent !important',
              opacity: 0,
            },
          }}>
            <img src={interactiveBroker} alt="interactiveBroker" type="image/webp" width={{xl:"100%", xs:"60%"}} 
            loading="lazy" 
            style={{
              width:"inherit",
              opacity:1,
              transition: "opacity 0.2s ease-in-out",            

            }}
            />
          </IconButton>

        
        </Box>
      </Grid>


    </Grid>
  )
}
