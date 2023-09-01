import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, Typography, useTheme } from "@mui/material";
import tempImage4 from '../../images/newHome/30x30.png'
import { Grid, Tooltip } from "@mui/material";
import { tokens } from "../../theme";
import { Box, ThemeProvider, createTheme } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <Grid container spacing="2" justifyContent={"space-evenly"} width={"100%"} mb="100px">
      <Grid item xs={12} display="flex" justifyContent={"center"} mt="40px" mb="40px">

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
          Warnings and disclosures
          <br />
        </Typography>


      </Grid>


{/*       <Grid item xs={12} xl={12} display="flex" justifyContent={"center"} mt="30px" mb="20px"  >

 */}      
        <Grid container spacing={2} display="flex" justifyContent={"center"} mt="30px" mb="20px">

{/*         <Box justifyContent={"center"} display="flex" alignItems={"center"} mr="10px" width={"100%"}> */}

{/*           <Grid container spacing={2} display="flex" justifyContent={"center"}>
 */}
            <Grid item xs={12} xl={12} display="flex" justifyContent={"center"}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
              sx={{ backgroundColor: colors.cloneai[300] }}
            >

              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
                <Typography
                  color="white"
                  variant="h5">
                  General Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color={"white"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            </Grid>
            
            <Grid item xs={12} xl={12} display="flex" justifyContent={"center"}>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
              sx={{ backgroundColor: colors.cloneai[300] }}
            >

              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
                <Typography color="white" variant="h5">
                  Terms and conditions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color={"white"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            </Grid>
            
            <Grid item xs={12} xl={12} display="flex" justifyContent={"center"}>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
              sx={{ backgroundColor: colors.cloneai[300] }}
            >

              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
                <Typography color="white" variant="h5">
                  Disclosures
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color={"white"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            </Grid>
            
        {/*   </Grid> */}

        {/* </Box> */}
      </Grid>



    </Grid>


  )
}
