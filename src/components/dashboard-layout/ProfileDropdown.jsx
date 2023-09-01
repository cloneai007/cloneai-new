import * as React from "react";
import {
  Avatar,
  Box,
  CardMedia,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import ProfileImage from "../../images/dashboard/profile-img.jpg";
import { Person, Logout } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../context/AppProvider";
import { Auth } from "aws-amplify";
import { S3_BUCKET_BASE_URL } from "../../configuration";
import { getAvatarUrl } from "../../utils";

const StyledMenuItem = styled(MenuItem)({
  minWidth: "167px",
  padding: "10px 15px !important",

  "& .MuiListItemIcon-root": {
    minWidth: "auto !important",
    marginRight: "10px",
    "& svg": {
      fontSize: "24px",
    },
  },

  "& .MuiTypography-root": {
    fontSize: "14px",
    fontWeight: "600",
  },

  "&.MuiMenuItem-root": {
    backgroundColor: "#111928 !important",

    "&:hover": {
      "& .MuiListItemIcon-root": {
        color: "#F30000",
      },
      "& .MuiTypography-root": {
        color: "#F30000",
      },
    },
  },
});

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const { user } = useStore();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToProfile = () => {
    navigate("/profile");
    handleClose();
  };

  const logout = async () => {
    handleClose();
    await Auth.signOut();
    navigate("/");
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", cursor: "default" }}>
      <Typography fontSize="18px" fontWeight="700">
        {`${user?.name} ${user?.family_name}`}
      </Typography>
      <Box
        onClick={handleClick}
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            border: "2px solid #F30000",
            borderRadius: "20px",
            marginLeft: "10px",
            marginRight: "5px",
            overflow: "hidden",
          }}
        >
          <Avatar
            src={getAvatarUrl(user)}
            alt="Avatar"
            sx={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <KeyboardArrowDownIcon fontSize="large" />
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="profile-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            backgroundColor: "#111928 !important",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <StyledMenuItem onClick={navigateToProfile}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          <Typography>Profile</Typography>
        </StyledMenuItem>
        <StyledMenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography>Logout</Typography>
        </StyledMenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileDropdown;
