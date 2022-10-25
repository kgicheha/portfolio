import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";

const MySkills = () => {
  const CustomTypography = styled(Typography)({
    color: "#3C3E41",
    fontWeight: "bold",
  });
  const CustomTypography2 = styled(Typography)({
    // color: "#3C3E41",
    fontWeight: "bold",
    // paddingTop: "0.5em",
    // paddingBottom: "0.5em",
    textAlign: "left"
  });
  return (
    <div id="skillsSection">
      <CustomTypography variant="h5" id="sectionHeader">SKILLS</CustomTypography>
      <div id="languages">
        <CustomTypography2 id="languageHeader">Languages:</CustomTypography2>
        <Typography id="skillsList">
          Ruby, Rails, React, JavaScript, Python, SQL, Node, HTML/ CSS, REST
          APIs, Git, GitHub
        </Typography>
      </div>
      <div id="concepts">
        <CustomTypography2 id="conceptHeader">Concepts:</CustomTypography2>
        <Typography id="skillsList">
          OOP, Algorithms & Data Structures, Agile SDLC, Cloud Computing
        </Typography>
      </div>
    </div>
  );
};

export default MySkills;
