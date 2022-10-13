import React from "react";
import { Typography, Container, Grid, CardContent, Card } from "@mui/material";
import { styled } from "@mui/material";

const Projects = () => {
  const CustomTypography = styled(Typography)({
    color: "#3C3E41",
    fontWeight: "bold",
  });

  // on click you'll flip the card and have access to the demo and explanation of the project
  return (
    <>
      <div id="projectsSection">
        <CustomTypography variant="h5">PROJECTS</CustomTypography>
      </div>
    </>
  );
};

export default Projects;
