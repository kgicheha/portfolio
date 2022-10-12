import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Typography,
  Toolbar,
  IconButton,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const pages = ["About", "Projects", "Blogs", "Experience", "Contact"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const CustomAppBar = styled(AppBar)({
    backgroundColor: "#f6f6f6",
  });

  const CustomButton = styled(Button)({
    color: "#FF014F",
    borderColor: "#FF014F",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#FF0F59",
      color: "#ffffff",
      textDecoration: "underline",
      borderColor: "#FF014F",
    },
  });

  const CustomMenuButton = styled(Button)({
    color: "#3C3E41",
    display: "block",
    "&:hover": {
      textDecoration: "underline",
    },
  });

  return (
    <>
      <CustomAppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip>
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt="logo"
                    src={require("../Assets/logo.jpeg")}
                    sx={{ width: 50, height: 50 }}
                  />
                </IconButton>
              </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Container sx={{ textAlign: "center" }}>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <CustomMenuButton
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2 }}
                  >
                    {page}
                  </CustomMenuButton>
                ))}
              </Box>
            </Container>
            <CustomButton variant="outlined">Resume</CustomButton>
          </Toolbar>
        </Container>
      </CustomAppBar>
    </>
  );
};

export default NavBar;
