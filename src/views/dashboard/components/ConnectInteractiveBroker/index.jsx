import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import Tab from "./Tab";
import TabOneContent from "./TabOneContent";
import TabTwoContent from "./TabTwoContent";
import TabThreeContent from "./TabThreeContent";
import styled from "styled-components";
import { useStore } from "../../../../context/AppProvider";
import { toast } from "react-hot-toast";

const CustomTextField = styled(TextField)({
  width: "100%",

  "& label": {
    fontSize: "12px",

    "&.Mui-focused": {
      color: "#9CA3AF",
      zIndex: 2,
      fontSize: "12px",
    },
  },
  "& .MuiInputLabel-root": {
    marginBottom: "10px",
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      padding: "12px",
      color: "#FFFFFF",
      zIndex: 1,
      fontSize: "15px",
      fontWeight: "500",
    },
    "& textarea": {
      color: "#FFFFFF",
      zIndex: 1,
      fontSize: "15px",
      fontWeight: "500",
    },
    "& fieldset": {
      borderColor: "#4B5563 !important",
      backgroundColor: "#050709 !important",
      borderRadius: "8px",
      top: 0,
    },
  },
  "& .MuiInputBase-root:has(> input:-webkit-autofill)": {
    backgroundColor: "transparent",
    "-webkit-box-shadow": "none !important",
  },
});

const ConnectInteractiveBroker = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [brokerAccountNumber, setBrokerAccountNumber] = useState("");
  const { addBrokerAccount } = useStore();

  const steps = [
    `To obtain your account number for Interactive Brokers`,
    "To link your Interactive Brokers account with Clone AI",
    "Allow for processing time",
  ];

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      try {
        setLoading(true);
        await addBrokerAccount(brokerAccountNumber);
      } catch (e) {
        console.log("error??????", e);
        toast.error(e?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index} completed={index < activeStep}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && <TabOneContent />}
      {activeStep === 1 && <TabTwoContent />}
      {activeStep === 2 && <TabThreeContent />}

      <Box
        className="tabs-navigation-buttons"
        marginTop="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {activeStep !== 0 && (
          <Button
            sx={{
              backgroundColor: "#fff !important",
              fontSize: { xs: "13px !important", sm: "16px !important" },
              fontWeight: "700",
              marginLeft: "10px",
              marginRight: "10px",
              padding: {
                xs: "7px 16px 7px 16px !important",
                sm: "10px 24px 10px 24px !important",
              },
            }}
            onClick={handleBack}
          >
            Back
          </Button>
        )}
        <Button
          sx={{
            backgroundColor: "#fff !important",
            fontSize: { xs: "13px !important", sm: "16px !important" },
            fontWeight: "700",
            marginLeft: "10px",
            marginRight: "10px",
            padding: {
              xs: "7px 16px 7px 16px !important",
              sm: "10px 24px 10px 24px !important",
            },
          }}
          onClick={handleNext}
        >
          {activeStep === steps.length - 1
            ? loading
              ? "Loading..."
              : "Confirm your account number"
            : "Next"}
        </Button>
      </Box>

      <Box marginTop="20px">
        <Box
          className="section-divider"
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "#474B53",
            marginBottom: "25px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
          }}
        >
          <CustomTextField
            id="confirm-account-number"
            placeholder="Enter Your Broker Account Number"
            onChange={(e) => setBrokerAccountNumber(e.target.value)}
            variant="outlined"
            sx={{ marginBottom: { xs: "20px", sm: "0" } }}
          />
          <Button
            className="login-button"
            variant="contained"
            onClick={handleNext}
            disabled={loading}
            sx={{
              fontSize: { xs: "10px !important", sm: "16px !important" },
              marginLeft: { xs: "0", sm: "20px" },
              minWidth: { xs: "100%", sm: "332px" },
            }}
          >
            {activeStep === steps.length - 1
              ? loading
                ? "Loading..."
                : "Confirm your account number"
              : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectInteractiveBroker;

// =======================================================================================
// import { useState } from "react";
// import { Box, Button, TextField } from "@mui/material";

// import Tab from "./Tab";
// import TabOneContent from "./TabOneContent";
// import TabTwoContent from "./TabTwoContent";
// import TabThreeContent from "./TabThreeContent";
// import styled from "styled-components";
// import { useStore } from "../../../../context/AppProvider";
// import { toast } from "react-hot-toast";

// const CustomTextField = styled(TextField)({
//   width: "100%",

//   "& label": {
//     fontSize: "12px",

//     "&.Mui-focused": {
//       color: "#9CA3AF",
//       zIndex: 2,
//       fontSize: "12px",
//     },
//   },
//   "& .MuiInputLabel-root": {
//     marginBottom: "10px",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& input": {
//       padding: "12px",
//       color: "#FFFFFF",
//       zIndex: 1,
//       fontSize: "15px",
//       fontWeight: "500",
//     },
//     "& textarea": {
//       color: "#FFFFFF",
//       zIndex: 1,
//       fontSize: "15px",
//       fontWeight: "500",
//     },
//     "& fieldset": {
//       borderColor: "#4B5563 !important",
//       backgroundColor: "#050709 !important",
//       borderRadius: "8px",
//       top: 0,
//     },
//   },
//   "& .MuiInputBase-root:has(> input:-webkit-autofill)": {
//     backgroundColor: "transparent",
//     "-webkit-box-shadow": "none !important",
//   },
// });

// const ConnectInteractiveBroker = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [brokerAccountNumber, setBrokerAccountNumber] = useState('');
//   const { addBrokerAccount } = useStore();

//   const onSubmit = async () => {
//     try {
//       setLoading(true);
//       await addBrokerAccount(brokerAccountNumber);
//     } catch (e) {
//       console.log('error??????', e);
//       toast.error(e?.message || 'Something went wrong!')
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <Box>
//       <Box className="interactive-tabs">
//         <Box
//           className="tabs-container"
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" },
//             alignItems: { xs: "flex-start", sm: "center" },
//             justifyContent: { xs: "flex-start", sm: "space-between" },
//             marginBottom: "10px",
//           }}
//         >
//           <Tab
//             active={activeTab === 0 ? true : false}
//             number={1}
//             title="To obtain your account number for Interactive Brokers"
//           />
//           <Tab
//             active={activeTab === 1 ? true : false}
//             number={2}
//             title="To link your Interactive Brokers account with Clone AI"
//           />
//           <Tab
//             active={activeTab === 2 ? true : false}
//             number={3}
//             title="Allow for processing time"
//           />
//         </Box>

//         {activeTab === 0 && <TabOneContent />}
//         {activeTab === 1 && <TabTwoContent />}
//         {activeTab === 2 && <TabThreeContent />}
//       </Box>

//       <Box
//         className="tabs-navigation-buttons"
//         marginTop="50px"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         {activeTab >= 1 ? (
//           <Button
//             sx={{
//               backgroundColor: "#fff !important",
//               fontSize: { xs: "13px !important", sm: "16px !important" },
//               fontWeight: "700",
//               marginLeft: "10px",
//               marginRight: "10px",
//               padding: {
//                 xs: "7px 16px 7px 16px !important",
//                 sm: "10px 24px 10px 24px !important",
//               },
//             }}
//             onClick={() => setActiveTab(activeTab - 1)}
//           >
//             Back
//           </Button>
//         ) : null}
//         {activeTab <= 1 ? (
//           <Button
//             sx={{
//               backgroundColor: "#fff !important",
//               fontSize: { xs: "13px !important", sm: "16px !important" },
//               fontWeight: "700",
//               marginLeft: "10px",
//               marginRight: "10px",
//               padding: {
//                 xs: "7px 16px 7px 16px !important",
//                 sm: "10px 24px 10px 24px !important",
//               },
//             }}
//             onClick={() => setActiveTab(activeTab + 1)}
//           >
//             Next
//           </Button>
//         ) : null}
//       </Box>

//       <Box marginTop="20px">
//         <Box
//           className="section-divider"
//           sx={{
//             width: "100%",
//             height: "2px",
//             backgroundColor: "#474B53",
//             marginBottom: "25px",
//           }}
//         ></Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             flexDirection: { xs: "column", sm: "row" },
//             justifyContent: "space-between",
//           }}
//         >
//           <CustomTextField
//             id="confirm-account-number"
//             placeholder="Enter Your Broker Account Number"
//             onChange={(e) => setBrokerAccountNumber(e.target.value)}
//             variant="outlined"
//             sx={{ marginBottom: { xs: "20px", sm: "0" } }}
//           />
//           <Button
//             className="login-button"
//             variant="contained"
//             onClick={onSubmit}
//             disabled={loading}
//             sx={{
//               fontSize: { xs: "10px !important", sm: "16px !important" },
//               marginLeft: { xs: "0", sm: "20px" },
//               minWidth: { xs: "100%", sm: "332px" },
//             }}
//           >
//             {loading ? 'Loading...' : 'Confirm your account number'}
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ConnectInteractiveBroker;

// ===================================================================================================
