import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
  const CustomTypography = styled(Typography)({
    color: "#FF014F",
    fontWeight: "bold",
  });
  const CustomTypograph2 = styled(Typography)({
    fontWeight: "bold",
  });
  return (
    <div id="educationSection">
      <CustomTypography variant="h5">Education</CustomTypography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body1"
            color="text.secondary"
          >
            June 2022 - Current
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <CustomTypograph2 variant="h6" component="span">
              Flatiron School - Full Stack Software Engineer
            </CustomTypograph2>
            <Typography>
              Learn and build original code and showcase expertise through
              comprehensive portfolio projects utilizing CRUD functionalities,
              Object Oriented Design, and test-driven programming
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
            <CustomTypograph2 variant="h6" component="span">
              University of Delaware - Alfred Lerner College of Business and
              Economics
            </CustomTypograph2>
            <Typography>
              Bachelor of Science in Management Information Systems and Finance
            </Typography>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body1"
            color="text.secondary"
          >
            July 2018
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
