import React from "react";
import { Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ContactMe = () => {
  // const CustomTypography = styled(Typography)({
  //   color: "#FF014F",
  //   fontWeight: "bold",
  // });
  const CustomTypography2 = styled(Typography)({
    paddingTop: "1em",
  });

  return (
    <div id="contactinfo">
      <Typography variant="h4">I'd Love To Connect With You.</Typography>
      <CustomTypography2 variant="body1">
        Let me get to know more about you.
      </CustomTypography2>
      <div id="contacts">
        <div className="contactIcon">
        <a href = "mailto: gichehakevin@gmail.com">

          <MailIcon sx={{ fontSize: 55, color: "#1876d1" }} />
        </a>
        </div>
        <div className="contactIcon">
          <a href="https://www.linkedin.com/in/kevin-gicheha/"  target="_blank">
            <LinkedInIcon sx={{ fontSize: 55, color: "#1876d1" }} />
          </a>
        </div>
      </div>
      <IconButton sx={{ p: 0 }} href="#about">
        <KeyboardArrowUpIcon sx={{ fontSize: 55 }} href="#about" />
      </IconButton>
    </div>
  );
};

export default ContactMe;
