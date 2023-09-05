import React from "react";
import { Box, Button as ButtonMUI } from "@mui/material";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader";

const Button = styled(ButtonMUI)({
  fontSize: "16px !important",
  borderRadius: "10px !important",
});

const GroupButton = ({ loading, isEditing, onPressEdit, onPressCancel }) => {
  return (
    <React.Fragment>
      {!isEditing ? (
        <>
          <Button
            variant="contained"
            onClick={onPressEdit}
            sx={{
              fontSize: { xs: "10px !important", sm: "16px !important" },
              marginTop: { xs: "20px", sm: "0" },
              backgroundColor: "#d22418 !important",
              // borderRadius: "100% !important",
              padding: "10px",
            }}
          >
            <EditIcon fontSize="medium" />
            {/* Edit */}
          </Button>
        </>
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
              // padding: "10px",
            }}
          >
            {/* <CancelOutlinedIcon fontSize="medium" /> */}
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
              padding: "8px 20px",
            }}
          >
            {loading ? (
              <>
                {
                  <PulseLoader
                    color={"white"}
                    loading={loading}
                    size={8}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                }
                {/* Saving */}
              </>
            ) : (
              <>
                {/* {<SaveIcon fontSize="medium" />}  */}
                Save
              </>
            )}
          </Button>
        </Box>
      )}
    </React.Fragment>
  );
};

export default GroupButton;
