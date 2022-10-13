import React from "react";
import {
  Typography,
  Container,
  Grid,

} from "@mui/material";
import { styled } from "@mui/material";
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

return(
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
