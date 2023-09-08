import { Box, CardMedia, Typography } from "@mui/material";
import SelectSettingsImage from "../../../../images/dashboard/select-settings.jpg";
import ChooseAccountImage from "../../../../images/dashboard/choose-linkaccount.jpg";
import LinkAccountImage from "../../../../images/dashboard/link-existing.jpg";
import PasteIdImage from "../../../../images/dashboard/paste.jpg";
import ContinueImage from "../../../../images/dashboard/continue.jpg";

const TabTwoContent = () => {
  return (
    <Box paddingTop="20px">
      <Typography
        fontSize="18px"
        fontWeight="500"
        lineHeight="18px"
        marginBottom="15px"
      >
        1. Go to Interactive Brokers and select 'Settings' in the top right
        corner.
      </Typography>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          maxWidth: "643.24px",
          borderRadius: "5px",
        }}
        image={SelectSettingsImage}
        alt="Select Settings Image"
      />

      <Typography
        fontSize="18px"
        fontWeight="500"
        lineHeight="18px"
        marginBottom="15px"
        marginTop="30px"
      >
        2. Under 'Trading,' choose 'Link Account to
        Advisor/Broker/Administrator'.
      </Typography>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          maxWidth: "321.68px",
          borderRadius: "5px",
        }}
        image={ChooseAccountImage}
        alt="Choose Account Image"
      />

      <Typography
        fontSize="18px"
        fontWeight="500"
        lineHeight="18px"
        marginBottom="15px"
        marginTop="30px"
      >
        3. Select 'Link my Existing Account to an Advisor/Broker'.
      </Typography>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          maxWidth: "684.69px",
          borderRadius: "5px",
        }}
        image={LinkAccountImage}
        alt="Link Account Image"
      />

      <Typography
        fontSize="18px"
        fontWeight="500"
        lineHeight="18px"
        marginBottom="15px"
        marginTop="30px"
      >
        4. In the 'Advisor/Broker Account ID' field, paste 'F10892242' and in
        the 'Advisor/Broker Account Title' field paste 'Clone AI Inc.'
      </Typography>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          maxWidth: "684.69px",
          borderRadius: "5px",
        }}
        image={PasteIdImage}
        alt="Link Account Image"
      />

      <Typography
        fontSize="18px"
        fontWeight="500"
        lineHeight="18px"
        marginBottom="15px"
        marginTop="30px"
      >
        5. Click 'Continue' and agree to the terms.
      </Typography>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          maxWidth: "581.29px",
          borderRadius: "5px",
        }}
        image={ContinueImage}
        alt="Continue Image"
      />
    </Box>
  );
};

export default TabTwoContent;
