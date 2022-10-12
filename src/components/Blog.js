import React from 'react'
import { Typography, Container, Grid, CardContent, Card } from "@mui/material";
import { styled } from "@mui/material";

const Blog = () => {
    const CustomTypography = styled(Typography)({
        color: "#3C3E41",
        fontWeight: "bold",
      });
  return (
    <div id="blogSection">
    <CustomTypography variant="h5">BLOGS</CustomTypography>
    <Container>

    </Container>
    <div>

    </div>
  </div>
  )
}

export default Blog