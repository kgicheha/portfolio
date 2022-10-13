import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material";

const ProjectDetails = ({ project }) => {
  const [showdetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(!showdetails);
  };

  return (
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Card
        sx={{ maxWidth: 345, cursor: "pointer" }}
        //   onMouseEnter={handleClick}
        //   onMouseLeave={handleClick}
        onClick={handleClick}
      >
        {showdetails ? (
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Languages Used:
            </Typography>
          </CardContent>
        ) : (
          <CardMedia
            component="img"
            alt="Active Record"
            height="180"
            width="200"
            image={require("../Assets/active_record.jpeg")}
          />
        )}
      </Card>
    </Grid>
  );
};

export default ProjectDetails;
