import { Box, Typography, Button, styled } from "@mui/material";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

const Title = styled(Typography)({
  "& span": {
    "& span": {
      color: "#F30000",
    },
  },
});

const MainSection = ({ onCalenderOpen }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt="50px"
    >
      <Title
        variant="h1"
        fontSize="48px"
        fontWeight="800"
        textAlign="center"
        color="#FFFFFF"
        marginTop="104px"
        marginBottom="28px"
      >
        <Typewriter
          loop="true"
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Say Hello to <span>Clone A.I.</span> auto-trading tool."
              )
              .pauseFor(1500)
              .start();
          }}
        />
      </Title>

      <Fade bottom>
        <Typography
          variant="h3"
          fontSize="20px"
          fontWeight="500"
          textAlign="center"
          color="#D1D5DB"
          marginBottom="28px"
        >
          Fully automate your stock trades with A.I. & machine learning. Remove
          human biases, emotions and errors to achieve better performance.
          Connect Clone Ai auto trader to your brokerage account today.
        </Typography>
      </Fade>

      <Fade bottom>
        <Button
          // className="login-button"
          variant="contained"
          onClick={onCalenderOpen}
          sx={{
            padding:"10px",
            backgroundColor: "#d22418",
            color: "white",
            fontSize:"14px",
            fontFamily: "Varela Round,sans-serif",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Schedule a Demonstration
        </Button>
      </Fade>
    </Box>
  );
};

export default MainSection;
