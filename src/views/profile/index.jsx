import { useState } from "react";
import { Box } from "@mui/material";

import ProfileTitle from "./ProfileTitle";
import UserProfile from "./UserProfile";
import { useStore } from "../../context/AppProvider";
import { Auth } from "aws-amplify";
import { toast } from "react-hot-toast";
import GroupButton from "./GroupButton";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useStore();

  const updateUserAttribute = async (payload) => {
    try {
      setLoading(true);
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, payload);
      setUser((prevUser) => ({ ...prevUser, ...payload }));
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setLoading(false);
      setIsEditing(false);
    }
  };

  const validateFormData = (formData) => {
    return formData.name.trim() && formData.family_name.trim();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      family_name: event.target.family_name.value,
      phone_number: event.target.phone_number.value,
      address: event.target.address.value,
    };

    if (formData?.phone_number) {
      formData.phone_number = formData.phone_number.replace(/\s/g, "");
    } else {
      delete formData.phone_number;
    }

    console.log("formData", formData);

    const isValid = validateFormData(formData);
    if (isValid) {
      console.log(formData);
      updateUserAttribute(formData);
    } else {
      console.log("Form data is invalid. Please check the inputs.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box padding={{ xs: "10px", sm: "20px", md: "25px" }}>
        <ProfileTitle
          loading={loading}
          isEditing={isEditing}
          onPressEdit={() => setIsEditing(true)}
          onPressCancel={() => setIsEditing(false)}
        />
        <UserProfile
          user={user}
          isEditing={isEditing}
          loading={loading}
          onPressEdit={() => setIsEditing(true)}
          onPressCancel={() => setIsEditing(false)}
        />
        {/* <Box sx={{ display: { xs: "block", sm: "block" }, paddingTop: "10px" , textAlign:'center'}}>
          <GroupButton
            loading={loading}
            isEditing={isEditing}
            onPressEdit={() => setIsEditing(true)}
            onPressCancel={() => setIsEditing(false)}
          />
        </Box> */}
      </Box>
    </form>
  );
};

export default Profile;
