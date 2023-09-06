import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";

import Sidebar from "./Sidebar";
import ProfileDropdown from "./ProfileDropdown";
import { useState } from "react";
import styled from "styled-components";

const MenuIconContainer = styled(Box)({
  position: "absolute",
  left: "25px",
  top: "35px",

  "& svg": {
    fontSize: "20px",
    cursor: "pointer",
  },
});

const SidebarOverlay = styled(Box)({
  width: "100vw",
  height: "100vh",
  position: "absolute",
  left: "0",
  top: "0",
  backgroundColor: "rgba(0,0,0, 0)",
  transition: "background-color ease-in-out 0.75s",
  display: "none",

  "&.active": {
    zIndex: "9",
    display: "block",
    backgroundColor: "rgba(0,0,0, 0.4)",
  },
});

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Tabs = [
    { name: "Dashboard", path: "/dashboard", icon: <HomeIcon /> },
    {
      name: "Subscription",
      path: "/subscription",
      icon: <MonetizationOnIcon />,
    },
  ];

  return (
    <Box
      className="layout-container"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        position: "relative",
      }}
    >
      <SidebarOverlay
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></SidebarOverlay>

      <Sidebar
        tabs={Tabs}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Box
        className="content"
        width="100%"
        sx={{ marginLeft: { xs: "0px", md: "210px" } }}
      >
        <Box
          className="header"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "25px",
            position: "relative",
          }}
        >
          <MenuIconContainer
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuIcon onClick={() => setSidebarOpen(true)} />
          </MenuIconContainer>
          {/* maybe remove this to remove profile dropdown */}
          <ProfileDropdown />
          {/* till here */}
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
