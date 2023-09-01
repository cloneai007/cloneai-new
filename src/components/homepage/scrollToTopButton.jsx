import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { IconButton, Tooltip } from "@mui/material";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <Tooltip title="Go up">
          <IconButton
            onClick={scrollTop}
            size="large"
            sx={{
              position: "fixed",
              bottom: "15px",
              right: "20px",
            }}
          >
            <KeyboardDoubleArrowUpIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default ScrollToTop;
