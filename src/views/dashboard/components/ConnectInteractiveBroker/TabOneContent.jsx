import { Box, CardMedia, Link, Typography } from "@mui/material";
import LoginImage from "../../../../images/dashboard/login-interactive.jpg";
import LocateImage from "../../../../images/dashboard/locate-account.jpg";

const TabOneContent = () => {
  return (
    <Box paddingTop="20px">
      <Typography
        fontSize="18px"
        fontWeight="500"
        lineHeight="18px"
        marginBottom="15px"
      >
        1. Log in to your account at{" "}
        <Link
          href="https://www.interactivebrokers.co.in/sso/Login?RL=1"
          target="_blank"
          color="#F30000"
        >
          www.interactivebokers.com
        </Link>
      </Typography>

      <CardMedia
        component="img"
        sx={{
          width: "100%",
          maxWidth: "852px",
          borderRadius: "5px",
        }}
        image={LoginImage}
        alt="Login Interactive Image"
      />

      <Typography
        fontSize="18px"
        fontWeight="500"
        lineHeight="18px"
        marginBottom="15px"
        marginTop="30px"
      >
        2. Locate the full account number you wish to link, including the letter
        prefix (e.g. 'U1234567890')
      </Typography>

      <CardMedia
        component="img"
        sx={{
          width: "100%",
          maxWidth: "852px",
          borderRadius: "5px",
        }}
        image={LocateImage}
        alt="Locate Image"
      />

      <Typography
        fontSize="18px"
        fontWeight="500"
        lineHeight="18px"
        marginBottom="15px"
        marginTop="30px"
      >
        3. Copy the full account number.
      </Typography>

      <Typography
        fontSize="18px"
        fontWeight="500"
        lineHeight="18px"
        marginBottom="15px"
      >
        4. Return to Clone AI and paste the number in the field bellow.
      </Typography>
    </Box>
  );
};

export default TabOneContent;
