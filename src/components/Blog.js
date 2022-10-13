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
    paddingTop: "1em",
    paddingBottom: "1em",
    paddingLeft: "12em",
    paddingRight: "12em",
  });
  const CustomButton = styled(Button)({
    color: "#1876d1",
    borderColor: "#1876d1",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#1876d1",
      color: "#ffffff",
      textDecoration: "underline",
      borderColor: "#1876d1",
    },
  });
  return (
    <div id="blogs">
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
                <Typography gutterBottom variant="body1" component="div">
                  Ruby: Active Record Associations
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Record Association Features
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">
                  <a
                    href="https://medium.com/@gichehakevin/ruby-active-record-associations-79bc0bfb972f"
                    target="_blank"
                  >
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
                <Typography gutterBottom variant="body1" component="div">
                  Object Oriented Programming
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  What Is Object Oriented Programming?
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">
                  <a
                    href="https://medium.com/@gichehakevin/object-oriented-programming-c4f5d88172cd"
                    target="_blank"
                  >
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
                <Typography gutterBottom variant="body1" component="div">
                  Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Improve User Interface With Material UI
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">
                  <a
                    href="https://medium.com/@gichehakevin/object-oriented-programming-c4f5d88172cd"
                    target="_blank"
                  >
                    Read More
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </CustomContainer>
      <CustomButton
        href="https://medium.com/@gichehakevin"
        target="_blank"
        variant="outlined"
      >
        Check Out My Other Blogs
      </CustomButton>
    </div>
  );
};

export default Blog;
