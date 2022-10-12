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
import WorkIcon from "@mui/icons-material/Work";

const WorkExperience = () => {
  const CustomTypography = styled(Typography)({
    color: "#3C3E41",
    fontWeight: "bold",
    textAlign: "center"
  });
  const CustomTimeline = styled(Timeline)({
    paddingLeft: "12em",
    paddingRight: "12em"
  });

  const CustomTypograph2 = styled(Typography)({
    fontWeight: "bold",
  });
  return (
    <div id="workExpSection">
      <CustomTypography variant="h5">WORK EXPERIENCE</CustomTypography>
      <CustomTimeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body1"
            color="text.secondary"
          >
            June 2021 - May 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <CustomTypograph2 variant="h6" component="span">
              Robert Half
            </CustomTypograph2>
            <Typography>Financial Operations Analyst</Typography>
            <ul>
              <li>
                <Typography>
                  Partnered with senior managers to create an invoice validation
                  tool that improved efficiency by reducing the processing time
                  to 3 hours per week.
                </Typography>
              </li>
              <li>
                <Typography>
                  Collaborated with software engineers to streamline the
                  deliverables process to 1-hour per week by automating
                  deliverable reports.
                </Typography>
              </li>
              <li>
                <Typography>
                  Managed relationships with internal and external teams and
                  collaborated to resolve invoice discrepancies.{" "}
                </Typography>
              </li>
              <li>
                <Typography>
                  Performed detailed quality assurance testing on 1000+
                  financial transactions in the Oracle database to ensure
                  compliance with procedures.
                </Typography>
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
            <CustomTypograph2 variant="h6" component="span">
              State Street Corporation
            </CustomTypograph2>
            <Typography>Investment Operations Analyst</Typography>
            <ul>
              <li>
                <Typography>
                  Resolved client issues and consistently achieved
                  high-performance benchmarks in all areas (speed, accuracy, and
                  volume).
                </Typography>
              </li>
              <li>
                <Typography>
                  Responded to client inquiries via email and ticketing system,
                  providing updated and accurate information.
                </Typography>
              </li>
              <li>
                <Typography>
                  Assisted with documentation and implementation of new workflow
                  rules and procedures.
                </Typography>
              </li>
              <li>
                <Typography>
                  Performed quantitative analysis of data including collecting,
                  cleaning, structuring, and validating for about 40 fund
                  portfolios.
                </Typography>
              </li>
            </ul>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent
            sx={{ m: "auto 0" }}
            variant="body1"
            color="text.secondary"
          >
            Nov 2018 - May 2021
          </TimelineContent>
        </TimelineItem>
      </CustomTimeline>
    </div>
  );
};

export default WorkExperience;
