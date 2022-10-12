import React from "react";
import { Typography, Container, Grid, CardContent, Card } from "@mui/material";
import { styled } from "@mui/material";

const Projects = () => {
  const CustomTypography = styled(Typography)({
    color: "#3C3E41",
    fontWeight: "bold",
  });
  return (
    <>
      <div id="projectsSection">
        <CustomTypography variant="h5">PROJECTS</CustomTypography>

      </div>
    </>
  );
};

export default Projects;
