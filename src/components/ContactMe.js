import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ContactMe = () => {
  const CustomTypography = styled(Typography)({
    color: "#FF014F",
    fontWeight: "bold",
  });
  const CustomTypography2 = styled(Typography)({
    paddingTop: "1em",
  });

  return (
    <div id="contactMeSection">
      <CustomTypography variant="h6">Contact</CustomTypography>
      <Typography variant="h4">I'd Love To Connect With You.</Typography>
      <CustomTypography2 variant="body1">
        Let me get to know more about you.
      </CustomTypography2>
      <div id="contacts">
        <div id="email">
          <MailIcon fontSize="large" />
          <CustomTypography variant="body1">Email Me At</CustomTypography>
          <Typography variant="body1">gichehakevin@gmail.com</Typography>
        </div>
        <div id="linkedIn">
          <LinkedInIcon fontSize="large" />
          <CustomTypography variant="body1">Let's Connect</CustomTypography>
          <Typography variant="body1">
            <a href="https://www.linkedin.com/in/kevin-gicheha/">
              LinkedIn Profile
            </a>
          </Typography>
        </div>
      </div>
      <div id="returnToTop">
        <KeyboardArrowUpIcon fontSize="large" />
      </div>
    </div>
  );
};

export default ContactMe;
