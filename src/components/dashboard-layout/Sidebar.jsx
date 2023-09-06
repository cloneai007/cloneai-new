import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppBar, Box, CardMedia, Typography } from "@mui/material";

import Logo from "../../images/logowhite.png";

const ListIcon = styled(Typography)({
  "& svg": {
    fontSize: "24px",
    marginBottom: "-2px",
  },
});

const ListItem = ({ title, icon, active, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      backgroundColor: active ? "#1F2A37" : "#111928",
      marginBottom: "10px",
      width: "100%",
      height: "44px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <ListIcon marginLeft="10px">{icon}</ListIcon>
    <Typography
      fontSize="14px"
      lineHeight="14px"
      fontWeight={active ? "600" : "500"}
      marginLeft="10px"
    >
      {title}
    </Typography>
  </Box>
);

const Sidebar = ({ tabs, sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const onPressTab = (pathname) => {
    setActiveTab(pathname);
    setSidebarOpen(false);
    navigate(pathname);
  };

  return (
    <Box
      className="dashboard-sidebar"
      sx={{
        height: "100%",
        width: { xs: !sidebarOpen ? "0px" : "255  px", md: "210px" },
        backgroundColor: "#111928",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: !sidebarOpen ? "20px 0" : "20px", md: "20px" },
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 10,
        transition: "width 0.5s, padding-left 0.5s, padding-right 0.5s",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          objectFit: "contain",
          width: "123.44px",
          marginTop: "10px",
          marginBottom: "40px",
          cursor: "pointer",
        }}
        image={Logo}
        alt="Logo"
        onClick={() => navigate("/dashboard")}
      />

      {tabs &&
        tabs.map((item, key) => {
          return (
            <ListItem
              key={key}
              active={activeTab === item.path}
              title={item.name}
              icon={item.icon}
              onClick={() =>
                item?.onClick ? item?.onClick() : onPressTab(item.path)
              }
            />
          );
        })}
    </Box>
  );
};

export default Sidebar;
