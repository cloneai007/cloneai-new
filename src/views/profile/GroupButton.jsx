import React from "react";
import { Box, Button as ButtonMUI } from "@mui/material";
import styled from "styled-components";

const Button = styled(ButtonMUI)({
  fontSize: "16px !important",
  borderRadius: "10px !important",
});

const GroupButton = ({ loading, isEditing, onPressEdit, onPressCancel }) => {
  return (
    <React.Fragment>
      {!isEditing ? (
        <Button
          variant="contained"
          onClick={onPressEdit}
          sx={{
            fontSize: { xs: "10px !important", sm: "16px !important" },
            marginTop: { xs: "20px", sm: "0" },
            backgroundColor: "#d22418 !important",
          }}
        >
          Edit
        </Button>
      ) : (
        <Box>
          <Button
            variant="contained"
            onClick={onPressCancel}
            sx={{
              backgroundColor: "#fff !important",
              color: "#000 !important",
              marginRight: "20px !important",
              fontSize: { xs: "10px !important", sm: "16px !important" },
              marginTop: { xs: "20px", sm: "0" },
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              fontSize: { xs: "10px !important", sm: "16px !important" },
              marginTop: { xs: "20px", sm: "0" },
              backgroundColor: "#d22418 !important",
            }}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </Box>
      )}
    </React.Fragment>
  );
};

export default GroupButton;
