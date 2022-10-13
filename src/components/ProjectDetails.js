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
    // color: "#3C3E41",
    fontWeight: "bold",
  });
  return (
    <Grid item xs={12} sm={4} md={4} lg={4}>
      {showdetails ? (
        <Card
          sx={{ maxWidth: 345, cursor: "pointer" }}
          //   onMouseEnter={handleClick}
          //   onMouseLeave={handleClick}
          onClick={handleClick}
        >
          <CardContent>
            <CustomTypography gutterBottom variant="body1" component="div">
              {project.name}
            </CustomTypography>
            <Typography gutterBottom variant="body2" component="div">
              {project.description}
            </Typography>
            <div id="languages">
              <Typography variant="body2" color="text.secondary">
                Languages Used:
              </Typography>
              <CustomTypography2 variant="body2" color="text.secondary">
                {project.languages}
              </CustomTypography2>
            </div>
          </CardContent>
          <div id="showcase">
            <CardActions id="github">
              <CustomButton
                size="medium"
                href="https://medium.com/@gichehakevin/object-oriented-programming-c4f5d88172cd"
              >
                Github
              </CustomButton>
            </CardActions>
            <CardActions id="demo">
              <CustomButton
                size="medium"
                href="https://medium.com/@gichehakevin/object-oriented-programming-c4f5d88172cd"
              >
                DEMO
              </CustomButton>
            </CardActions>
          </div>
        </Card>
      ) : (
        <Card
          sx={{ maxWidth: 345, cursor: "pointer" }}
          //   onMouseEnter={handleClick}
          //   onMouseLeave={handleClick}
          onClick={handleClick}
        >
          <CardMedia
            component="img"
            alt="Active Record"
            height="235"
            width="200"
            image={require("../Assets/active_record.jpeg")}
          />
        </Card>
      )}
    </Grid>
  );
};

export default ProjectDetails;
