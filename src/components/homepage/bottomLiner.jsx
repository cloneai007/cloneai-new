import { Typography, Box, useTheme, Grid, IconButton, Button, Tooltip, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import logoWht from '../../images/newHome/logo-wht.png'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Privacy from "./privacy";

const BottomLiner = ({ title, subtitle }) => {
  let navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  function openTermsAndConditions(){

  }


  return (


    <Box mb="30px" display="flex" width={"inherit"} >


      <Grid container spacing={2} alignItems="center"  >
        <Grid item xl={6}  xs={6} justifyContent="start" display="flex">
          <IconButton sx={{
            backgroundColor: "transparent",

            ":hover": {
              backgroundColor: "transparent"
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: 'transparent !important',
              opacity: 0,
            },
          }}>
            <img src={logoWht} width="170px" height="38px" alt="logo" />
          </IconButton>
        </Grid>

        <Grid item xl={6}  xs={6} justifyContent="end" display={"flex"}>
          <Button onClick={()=>(navigate("/privacy"))}>
            <Typography
              variant="h6"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              Terms and Conditions <br/> Privacy Policy
            </Typography>
          </Button>

{/*           <Button onClick={()=>(navigate("/privacy"))}>
            <Typography
              variant="h6"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              
            </Typography>
          </Button> */}

        </Grid>

        <Grid item xl={12} xs={12} justifyContent="center" display="flex">

          <Typography
            variant="h6"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            ©2022 CLONE AI
          </Typography>
        </Grid>
      </Grid>

    </Box>
  );
};

export default BottomLiner;
