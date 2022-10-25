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
  const pages = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Blogs", link: "#blogs" },
    { name: "Experience", link: "#workexperience" },
    { name: "Contact", link: "#contactinfo" },
  ];

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
    <div id="navBar">
      <CustomAppBar >
        <Container >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip>
                <IconButton sx={{ p: 0 }} href="#about">
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
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <a id="menuListItems" href={page.link}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </a>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Container
            // sx={{ justifyItems: "center",  display: "flex" }}
            >
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <CustomMenuButton
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2 }}
                    href={page.link}
                  >
                    {page.name}
                  </CustomMenuButton>
                ))}
              </Box>
            </Container>
            <CustomButton
              variant="outlined"
              href={require("../Assets/Kevin_Gicheha_Resume.pdf")}
              target="_blank"
              rel="noreferrer"
              id="resumeLink"
            >
              Resume
            </CustomButton>
          </Toolbar>
        </Container>
      </CustomAppBar>
      </div>
    </>
  );
};

export default NavBar;
