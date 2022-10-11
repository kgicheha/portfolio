import React from "react";
import { Typography, Container, Grid, CardContent, Card } from "@mui/material";
import { styled } from "@mui/material";

const MySkills = () => {
  const CustomTypography = styled(Typography)({
    color: "#FF014F",
    fontWeight: "bold",
  });
  return (
    <div id="skillsSection">
      <CustomTypography variant="h5">SKILLS</CustomTypography>
    </div>
  );
};

export default MySkills;
