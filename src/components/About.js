import React from "react";
import { Typography, Container, Grid, CardContent, Card } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { styled } from "@mui/material";
import MySkills from "./MySkills";

const About = () => {
  const CustomTypography = styled(Typography)({
    color: "#FF014F",
    fontWeight: "bold",
  });
  const CustomTypography2 = styled(Typography)({
    paddingTop: "3em",
    paddingRight: "3em",
    position: "relative",
  });

  return (
    <>
      <div id="about">
        <Typography variant="h5" id="introduce">Let me introduce myself.</Typography>
        <br />
        <Typography variant="h4">Hi, I'm Kevin Gicheha</Typography>
        <br />
        <div>
          <div id="a">
            <CustomTypography variant="h4">a</CustomTypography>
          </div>
          <div id="textAnimation">
            <TypeAnimation
              sequence={[
                "Full Stack Developer.",
                1000, // Waits 1s
                "Professional Coder.",
                1000, // Waits 2s
                "Full Stack Developer.",
                1000, // Waits 2s
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em" }}
            />
          </div>
        </div>
        <br />
        <div>
          <CustomTypography2 variant="body1">
            I bring 3+ years of analyst experience and strong collaboration and
            problem-solving skills by using innovative and creative ideas to
            accomplish robust projects. Proven experience providing client
            support in busy environments and an unwavering commitment to
            customer service, with the ability to build productive
            relationships, resolve complex issues and win customer loyalty.
          </CustomTypography2>
        </div>

        <div id="halfshot">
          <img
            src={require("../Assets/halfshot.jpeg")}
            height="650"
            width="550"
          />
        </div>
        <MySkills/>
      </div>
    </>
  );
};

export default About;
