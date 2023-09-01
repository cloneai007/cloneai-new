import React from "react";
import { Typography, Box } from "@mui/material";
import GroupButton from "./GroupButton";

const ProfileTitle = ({
  loading,
  isEditing,
  onPressEdit,
  onPressCancel,
}) => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        className="dashboard-title"
        sx={{ textAlign: { xs: "center", sm: "start" } }}
      >
        <Typography
          variant="h1"
          fontSize={{ xs: "25px", sm: "40px" }}
          lineHeight="40px"
          color="#fff"
          fontWeight="600"
        >
          Profile
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", sm: "20px" }}
          lineHeight="20px"
          color="#F30000"
          fontWeight="500"
          marginTop="10px"
        >
          Setup your profile
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <GroupButton
          loading={loading}
          isEditing={isEditing}
          onPressEdit={onPressEdit}
          onPressCancel={onPressCancel} />
      </Box>
    </Box>
  );
};

export default ProfileTitle;
