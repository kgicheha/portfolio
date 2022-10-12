import React from "react";
import { Typography } from "@mui/material";
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
    <div id="contactMeSection">
      <Typography variant="h4">I'd Love To Connect With You.</Typography>
      <CustomTypography2 variant="body1">
        Let me get to know more about you.
      </CustomTypography2>
      <div id="contacts">
        <div className="contactIcon">
          <MailIcon  sx={{ fontSize: 55, color: '#3c3e41' }} />
        </div>
        <div className="contactIcon">
          <a href="https://www.linkedin.com/in/kevin-gicheha/">
            <LinkedInIcon sx={{ fontSize: 55, color: '#FF014F' }} />
          </a>
        </div>
      </div>
      {/* <div id="returnToTop">
      </div> */}
        <KeyboardArrowUpIcon  sx={{ fontSize: 55 }} />
    </div>
  );
};

export default ContactMe;
