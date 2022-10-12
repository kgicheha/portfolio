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

const Blog = () => {
  const CustomTypography = styled(Typography)({
    color: "#3C3E41",
    fontWeight: "bold",
  });
  const CustomTypography2 = styled(Typography)({
    color: "#3C3E41",
    paddingTop: "1em",
  });

  const CustomContainer = styled(Container)({
    paddingTop: "2em",
    paddingBottom: "2em",
    paddingLeft: "12em",
    paddingRight: "12em",
  });
  const CustomButton = styled(Button)({
    color: "#FF014F",
    borderColor: "#FF014F",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#FF0F59",
      color: "#ffffff",
      textDecoration: "underline",
      borderColor: "#FF014F",
    },
  });
  return (
    <div id="blogSection">
      <CustomTypography variant="h5">BLOGS</CustomTypography>
      <CustomTypography2 variant="body1">
        Here are some of my blogs
      </CustomTypography2>
      <CustomContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            {/* Card1 */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Active Record"
                height="180"
                image={require("../Assets/active_record.jpeg")}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Ruby: Active Record Associations
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Record Association features
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">
                  <a href="https://medium.com/@gichehakevin/ruby-active-record-associations-79bc0bfb972f">
                    Read More
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            {/* Card2 */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Object Oriented Programming"
                height="180"
                image={require("../Assets/oop.png")}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Object Oriented Programming
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  What is Object Oriented Programming?
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">
                  <a href="https://medium.com/@gichehakevin/object-oriented-programming-c4f5d88172cd">
                    Read More
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            {/* Card3 */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Material UI"
                height="180"
                image={require("../Assets/material_ui.png")}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Improve User Interface With Material UI
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">
                  <a href="https://medium.com/@gichehakevin/object-oriented-programming-c4f5d88172cd">
                    Read More
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </CustomContainer>
      <CustomButton variant="outlined">
        <a id="blogLink" href="https://medium.com/@gichehakevin">
          Check Out My Other Blogs
        </a>
      </CustomButton>
    </div>
  );
};

export default Blog;
