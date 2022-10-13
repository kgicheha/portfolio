import React from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material";
import ProjectDetails from "./ProjectDetails";
import ProjectContainer from "./ProjectContainer";

const Projects = () => {
  const CustomTypography = styled(Typography)({
    color: "#3C3E41",
    fontWeight: "bold",
  });
  const CustomContainer = styled(Container)({
    paddingTop: "2em",
    paddingLeft: "12em",
    paddingRight: "12em",
  });

  // on click you'll flip the card and have access to the demo and explanation of the project
  return (
    <>
      <div id="projects">
        <CustomTypography variant="h5">PROJECTS</CustomTypography>
        <CustomContainer>
          <Grid container spacing={2}>
            <ProjectContainer />
          </Grid>
        </CustomContainer>
      </div>
    </>
  );
};

export default Projects;
