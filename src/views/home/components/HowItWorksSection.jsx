import { Button, CardMedia, Typography, Grid, Box } from "@mui/material";
import Fade from "react-reveal/Fade";

import Background from "../../../images/works-bg.png";
import PhoneOne from "../../../images/PhoneLogIn_edited.png";
import PhoneTwo from "../../../images/phoneConnectAccount_edited.png";
import PhoneThree from "../../../images/phoneStocks_edited.png";
import One from "../../../images/1.png";
import Two from "../../../images/2.png";
import Three from "../../../images/3.png";




const HowItWorksSection = ({ onCalenderOpen }) => {

  // const [uu,setuu]=useState(false);

  return (
    <Grid
      container
      columnSpacing={{ xs: 3, sm: 6, md: 12 }}
      sx={{
        backgroundImage: { xs: "none", md: `url(${Background})` },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "60%",
        backgroundSize: "60% auto",
      }}
    >
      <Grid item xs={12}>
        <Fade bottom>
          <Typography
            variant="h1"
            fontSize="48px"
            fontWeight="700"
            textAlign="center"
            color="#FFFFFF"
            marginTop="119px"
            marginBottom="83px"
          >
            How it works?
          </Typography>
        </Fade>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Fade>
          <Box position="relative" padding="20px">
            <CardMedia
              component="img"
              sx={{
                width: "53.67px",
                height: "53.67px",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              image={One}
              alt="Number"
            />
            <CardMedia
              component="img"
              sx={{
                objectFit: "contain",
                width: "100%",
                maxWidth: "246px",
                height: "auto",
              }}
              image={PhoneOne}
              alt="Image"
            />
          </Box>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="600"
            textAlign="center"
            color="#E5E7EB"
            marginTop={{ xs: "10px", md: "20px" }}
            marginBottom={{ xs: "40px", md: 0 }}
          >
            Start your account with CLONE Ai
          </Typography>
        </Fade>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Fade>
          <Box position="relative" padding="20px">
            <CardMedia
              component="img"
              sx={{
                width: "53.67px",
                height: "53.67px",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              image={Two}
              alt="Number"
            />
            <CardMedia
              component="img"
              sx={{
                objectFit: "contain",
                width: "100%",
                maxWidth: "246px",
                height: "auto",
              }}
              image={PhoneTwo}
              alt="Image"
            />
          </Box>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="600"
            textAlign="center"
            color="#E5E7EB"
            marginTop={{ xs: "10px", md: "20px" }}
            marginBottom={{ xs: "40px", md: 0 }}
          >
            Connect your Interactive Brokers account
          </Typography>
        </Fade>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Fade>
          <Box position="relative" padding="20px">
            <CardMedia
              component="img"
              sx={{
                width: "53.67px",
                height: "53.67px",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              image={Three}
              alt="Number"
            />
            <CardMedia
              component="img"
              sx={{
                objectFit: "contain",
                width: "100%",
                maxWidth: "246px",
                height: "auto",
              }}
              image={PhoneThree}
              alt="Image"
            />
          </Box>
          <Typography
            variant="h3"
            fontSize="20px"
            fontWeight="600"
            textAlign="center"
            color="#E5E7EB"
            marginTop={{ xs: "10px", md: "20px" }}
            marginBottom={{ xs: "40px", md: 0 }}
          >
            Sit back and relax
          </Typography>
        </Fade>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "65px",
          marginBottom: "115px",
        }}
      >
        <Fade bottom>
          <Button
            // className="login-button"
            variant="contained"
            onClick={onCalenderOpen}
            sx={{
              padding: "10px",
              backgroundColor: "#d22418",
              color: "white",
              fontSize: "14px",
              fontFamily: "Varela Round,sans-serif",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Talk to our team
          </Button>
          {/* <Button
            variant="outlined"
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "blue",
              },
            }}
          >
            Outlined
          </Button> */}
        </Fade>
      </Grid>
    </Grid>
  );
};

export default HowItWorksSection;
