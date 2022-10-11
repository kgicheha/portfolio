import React from "react";
import { Typography, Container, Grid, CardContent, Card } from "@mui/material";
import { styled } from "@mui/material";
import { textAlign } from "@mui/system";

const MySkills = () => {
  const CustomTypography = styled(Typography)({
    color: "#FF014F",
    fontWeight: "bold",
  });
  const CustomTypography2 = styled(Typography)({
    color: "#FF014F",
    fontWeight: "bold",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    textAlign: "left"
  });
  return (
    <div id="skillsSection">
      <CustomTypography variant="h5">SKILLS</CustomTypography>
      <div id="languages">
        <CustomTypography2>Languages:</CustomTypography2>
        <Typography className="skillsList">
          Ruby, Rails, React, JavaScript, Python, SQL, Node, HTML/ CSS, REST
          APIs, Git, GitHub
        </Typography>
      </div>
      <div id="concepts">
        <CustomTypography2>Concepts:</CustomTypography2>
        <Typography className="skillsList">
          OOP, Algorithms & Data Structures, Agile SDLC, Cloud Computing
        </Typography>
      </div>
    </div>
  );
};

export default MySkills;
