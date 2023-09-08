import React, { useState } from "react";
import { Avatar, Box, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getAvatarUrl } from "../../../utils";

import "../Profile.css";
import ImageCropper from "../ImageCropper";

const ProfilePopup = ({ user, setProfilePopup, uploadProfileImage }) => {
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataURL = event.target.result;
        setImage(imageDataURL);
      };

      reader.readAsDataURL(file);
    }
  };

  const callToUpload = (actualfile) => {
    actualfile.name = `file.name ${Date.now()}`;
    actualfile.lastModified = file.lastModified;
    actualfile.lastModifiedDate = file.lastModifiedDate;
    setImage("");
    setProfilePopup(false);
    uploadProfileImage(actualfile);
  };

  const handle = () => {
    const file = document.getElementById("file");
    if (file) {
      file.click();
    }
  };

  const cancelHandler = () => {
    setImage("");
    setProfilePopup();
  };
  return (
    <Box
      sx={{
        backgroundColor: "#111928" /* Popup content background color */,
        padding: "20px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        position: "relative",
        paddingTop: {xs:"20", sm:"50px"},
        flexDirection: "column"
      }}
    >
      <CancelIcon
        sx={{
          position: "absolute",
          right: "10px",
          top: "10px",
          zIndex: "99",
          cursor: "pointer",
        }}
        onClick={() => cancelHandler()}
        fontSize="large"
      />
      {!image ? (
        <>
          {" "}
          <Avatar
            src={getAvatarUrl(user)}
            alt="Avatar"
            sx={{
              width: { xs: "150px", sm: "180px" },
              height: { xs: "150px", sm: "180px" },
              marginLeft: {xs:"30px", sm:"60px"},
              marginRight: {xs:"30px",sm:"60px"},
              marginTop:"17px"
            }}
          />
          <Box sx={{ marginTop: { xs: "20px", sm: "60px" } }}>
            <Button
              variant="contained"
              type="button"
              onClick={() => handle()}
              sx={{
                backgroundColor: "#d22418 ",
                color: "#fff",
                position: "relative",
                fontSize: { xs: "10px !important", sm: "16px !important" },
                marginTop: "10px",
                marginBottom: "20px",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
              }}
            ><CloudUploadIcon sx={{marginRight:"5px"}} />
              Upload
            </Button>
            <input
              id="file"
              type="file"
              className="image__uploader"
              onChange={(e) => handleImageUpload(e)}
            />
          </Box>
        </>
      ) : (
        <ImageCropper
          image={image}
          callToUpload={callToUpload}
          cancelHandler={cancelHandler}
        />
      )}
    </Box>
  );
};

export default ProfilePopup;
