import { Box, CardMedia, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Logo from "../../../images/logowhite.png";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const ExpandIconContainer = styled(Box)({
  "& svg": {
    fontSize: "22px",
  },
});

const CheckoutHeader = ({ headerContentMd }) => {
  const [viewDetails, setViewDetails] = useState(false);
  const boxRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState(500);
  const { state: { item } } = useLocation();

  useEffect(() => {
    const updateBoxHeight = () => {
      if (boxRef.current) {
        const height = boxRef.current.clientHeight;
        setBoxHeight(height);
      }
    };
    updateBoxHeight();
    window.addEventListener("resize", updateBoxHeight);
    return () => {
      window.removeEventListener("resize", updateBoxHeight);
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" zIndex={10}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: { xs: "100px", md: "168px" },
          }}
          image={Logo}
          alt="Profile Image"
        />

        <Box
          padding={{ xs: "2px 4px", md: "4px 8px" }}
          borderRadius={{ xs: "4px", md: "8px" }}
          marginLeft={{ xs: "10px", md: "20px" }}
          sx={{ backgroundColor: "#474B53" }}
        >
          <Typography
            textTransform="uppercase"
            fontSize={{ xs: "10px", md: "16px" }}
            fontWeight="600"
            color="#D1D5DB"
          >
             {item.livemode ? 'Live Mode' : 'Test Mode'}
          </Typography>
        </Box>
      </Box>

      {headerContentMd && (
        <Box
          sx={{
            cursor: "pointer",
            alignItems: "center",
            display: { xs: "flex", md: "none" },
            zIndex: 10,
          }}
          onClick={() => setViewDetails(!viewDetails)}
        >
          <Typography
            sx={{
              textDecoration: "underline",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            Details
          </Typography>
          <ExpandIconContainer>
            <ExpandMoreIcon sx={{ color: "#9CA3AF" }} />
          </ExpandIconContainer>
        </Box>
      )}

      {headerContentMd && (
        <Box
          ref={boxRef}
          sx={{
            marginTop: viewDetails ? 0 : `-${boxHeight + 60}px`,
            transition: 'margin-top 0.2s',
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            boxShadow: "2px 2px 30px #686868",
            zIndex: 9,
          }}
        >
          {headerContentMd}
        </Box>
      )}
    </Box>
  );
};

export default CheckoutHeader;
