import styled from "styled-components";
import {
  Avatar,
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Auth, Storage } from "aws-amplify";
import { MuiTelInput } from "mui-tel-input";
import Stack from "@mui/material/Stack";

import { toast } from "react-hot-toast";
import { useStore } from "../../../context/AppProvider";
import ProfileImage from "../../../images/dashboard/profile-img.jpg";
import { useEffect, useState } from "react";
import GroupButton from "../GroupButton";
import EditIcon from "@mui/icons-material/Edit";
import { S3_BUCKET_BASE_URL } from "../../../configuration";
import { getAvatarUrl } from "../../../utils";
import ImageCropper from "../ImageCropper";
import ProfilePopup from "./ProfilePopup";

const InputText = styled(TextField)({
  width: "100%",
  marginBottom: "5px !important",

  "& label": {
    fontSize: "12px",

    "&.Mui-focused": {
      color: "#9CA3AF",
      zIndex: 2,
      fontSize: "12px",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      padding: "12px",
      color: "#FFFFFF",
      zIndex: 1,
      fontSize: "14px",
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
      backgroundColor: "#111928 !important",
      borderRadius: "8px !important",
      top: 0,
    },
  },
  "& .MuiInputBase-root:has(> input:-webkit-autofill)": {
    backgroundColor: "transparent",
    "-webkit-box-shadow": "none !important",
  },
});

const MuiInputText = styled(MuiTelInput)({
  width: "100%",
  marginBottom: "5px !important",

  "& label": {
    fontSize: "12px",

    "&.Mui-focused": {
      color: "#9CA3AF",
      zIndex: 2,
      fontSize: "12px",
    },
  },
  "& .MuiIconButton-root": {
    padding: 0,
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      padding: "12px",
      color: "#FFFFFF",
      zIndex: 1,
      fontSize: "14px",
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
      borderRadius: "8px !important",
      top: 0,
    },
  },
  "& .MuiInputBase-root:has(> input:-webkit-autofill)": {
    backgroundColor: "transparent",
    "-webkit-box-shadow": "none !important",
  },
});

const InputLabel = styled(Typography)({
  color: "#9CA3AF",
  fontSize: "14px !important",
  lineHeight: "14px !important",
  fontWeight: "500 !important",
  marginBottom: "5px !important",
});

const InfoText = styled(Typography)({
  color: "#FFF",
  fontSize: "16px !important",
  lineHeight: "16px !important",
  fontWeight: "500 !important",
  marginBottom: "5px !important",
  minHeight: "44.13px",
});

const UserProfile = ({
  user,
  isEditing,
  loading,
  onPressEdit,
  onPressCancel,
}) => {
  const { setUser } = useStore();
  const [value, setValue] = useState("");
  const [image,setImage]= useState(false)
  const [uploadProgress, setUploadProgress] = useState(0);
  const [profilePopup,setProfilePopup]=useState(false)

  console.log(
    "img",
    user?.picture ? `${S3_BUCKET_BASE_URL}/${user.picture}` : ProfileImage
  );

  useEffect(() => {
    if (user?.phone_number) {
      setValue(user?.phone_number);
    }
  }, [user?.phone_number]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };


  const uploadProfileImage = async (e) => {
 const file=e
    try {
      setUploadProgress(0);
      const result = await Storage.put(file.name, file, {
        contentType: "image/png",
        progressCallback: (progress) => {
          setUploadProgress((progress.loaded / progress.total) * 100 - 10);
        },
      });
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { picture: result.key });
      setUser((prevUser) => ({ ...prevUser, picture: result.key }));
      toast.success("Profile image updated successfully");
      setUploadProgress(100);
    } catch (error) {
      toast.error(error?.message || "Somewent wrong!");
    }
  };

  const closePopup=()=>{
    setProfilePopup(false)
  }

  return (
    <Box
      sx={{
        backgroundColor: "#111928",
        position: "relative",
        padding: "25px",
        marginTop: "30px",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        borderRadius: "15px",
      }}
    >
      {profilePopup ? (
        <Box
          sx={{
            display: "flex",
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            zIndex: "99",
            overflow: "scroll",
            backgroundColor:
              "rgba(0, 0, 0, 0.5)" /* Transparent background color */,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProfilePopup
            user={user}
            setProfilePopup={closePopup}
            uploadProfileImage={uploadProfileImage}
          />
        </Box>
      ) : null}
      <Stack
        sx={{
          width: { xs: "50%", lg: "15%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "40px",
          }}
        >
          <div style={{ position: "relative" }}>
            <Avatar
              src={getAvatarUrl(user)}
              alt="Avatar"
              sx={{ width: "134.62px", height: "134.62px" }}
            />
            <CircularProgress
              style={{
                position: "absolute",
                color: "#d22417",
                top: "-2.8%",
                left: "-2.8%",
              }}
              variant="determinate"
              value={uploadProgress}
              size={142}
              thickness={1}
            />
          </div>

          <label htmlFor="imageInput">
            <IconButton
              style={{
                position: "absolute",
                bottom: "5px",
                right: "5px",
                background: "#d22417",
              }}
              component="span"
              onClick={() => setProfilePopup(true)}
            >
              <EditIcon sx={{ fontSize: "17px" }} />
            </IconButton>
          </label>
        </div>
      </Stack>

      <Box
        sx={{
          width: "1px",
          height: "100%",
          minHeight: "135px",
          backgroundColor: "#474B53",
          marginLeft: "30px",
          marginRight: "30px",
          display: { xs: "none", lg: "block" },
        }}
      ></Box>

      <Grid container columnSpacing={3} rowSpacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <InputLabel>First Name</InputLabel>
          {isEditing ? (
            <InputText
              id="firstname"
              name="name"
              variant="outlined"
              defaultValue={user.name}
              autoComplete="off"
            />
          ) : (
            <InfoText>{user.name}</InfoText>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <InputLabel>Last Name</InputLabel>
          {isEditing ? (
            <InputText
              id="lastname"
              name="family_name"
              variant="outlined"
              defaultValue={user.family_name}
            />
          ) : (
            <InfoText>{user.family_name}</InfoText>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <InputLabel>Email</InputLabel>
          {isEditing ? (
            <InputText
              id="email"
              name="email"
              variant="outlined"
              disabled
              defaultValue={user.email}
            />
          ) : (
            <InfoText>{user.email}</InfoText>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <InputLabel>Phone Number</InputLabel>
          {isEditing ? (
            <MuiInputText
              id="phone"
              name="phone_number"
              variant="outlined"
              value={value}
              onChange={handleChange}
            />
          ) : (
            <InfoText>{user.phone_number}</InfoText>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <InputLabel>Address</InputLabel>
          {isEditing ? (
            <InputText
              id="address"
              name="address"
              variant="outlined"
              defaultValue={user.address}
            />
          ) : (
            <InfoText>{user.address}</InfoText>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
