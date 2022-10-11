import React from 'react'
import { Typography, Container, Grid, CardContent, Card } from "@mui/material";
import { styled } from "@mui/material";

const Education = () => {
    const CustomTypography = styled(Typography)({
        color: "#FF014F",
        fontWeight: "bold",
      });
  return (
    <div id="educationSection">
        <CustomTypography variant="h5">Education</CustomTypography>
      </div>
  )
}

export default Education