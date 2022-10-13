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

const ProjectDetails = () => {
  const projects = [
    {
      name: "Virtual Care",
      image: "",
      description:
        "Provides users the ability to schedule appointments with doctors anytime and from anywhere in the world.",
      languages: "",
    },
    {
      name: "Find, Fund, Foster Pets",
      image: "",
      description:
        "Enables animal shelters to find homes for pets, raising funds, and also allows users to sponsor pets digitally.",
      languages: "",
    },
    {
      name: "Recipe Finder",
      image: "",
      description:
        "Provides users access to 1000+ recipes and narrows down options based on their ingredient search.",
      languages: "",
    },
  ];


  return projects.map((project) => (
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Active Record"
          height="180"
          image={require("../Assets/active_record.jpeg")}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Languages Used:
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
};

export default ProjectDetails;
