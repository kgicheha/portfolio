import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { styled } from "@mui/material";

const ProjectDetails = ({ project }) => {
  const [showdetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(!showdetails);
  };

  const CustomTypography = styled(Typography)({
    color: "#3C3E41",
    fontWeight: "bold",
    textDecoration: "underline",
  });
  const CustomTypography2 = styled(Typography)({
    color: "#3C3E41",
    fontWeight: "bold",
  });
  const CustomButton = styled(Button)({
    fontWeight: "bold",
  });

  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      {showdetails ? (
        <Card
          sx={{ maxWidth: 345, cursor: "pointer" }}
          //   onMouseEnter={handleClick}
          //   onMouseLeave={handleClick}
          onClick={handleClick}
        >
          <CardContent >
            <CustomTypography gutterBottom variant="body1" component="div" id="cardContent">
              {project.name}
            </CustomTypography>
            <Typography gutterBottom variant="body2" component="div" id="cardContent">
              {project.description}
            </Typography>
            <div id="languages">
              <Typography variant="body2" color="text.secondary" id="cardContent">
                Languages Used:
              </Typography>
              <CustomTypography2 variant="body2" color="text.secondary" id="cardContent">
                {project.languages}
              </CustomTypography2>
            </div>
          </CardContent>
          <div id="showcase">
            <CardActions id="github">
              <CustomButton size="medium" href={project.github} target="_blank" id="linkButton">
                Github
              </CustomButton>
            </CardActions>
            <CardActions id="demo">
              <CustomButton
                size="medium"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                id="linkButton"
              >
                DEMO
              </CustomButton>
            </CardActions>
          </div>
        </Card>
      ) : (
        <Card
          sx={{ maxWidth: 345, cursor: "pointer", height: "235", width: "200" }}
          //   onMouseEnter={handleClick}
          //   onMouseLeave={handleClick}
          onClick={handleClick}
        >
          <CardMedia
            sx={{ maxHeight: "14.7em", objectFit: "contain" }}
            component="img"
            alt={project.name}
            src={project.image}
          />
        </Card>
      )}
    </Grid>
  );
};

export default ProjectDetails;
