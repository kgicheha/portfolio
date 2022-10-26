import React from "react";
import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { styled } from "@mui/material";
import MySkills from "./MySkills";

const About = () => {
  const CustomTypography = styled(Typography)({
    color: "#FF014F",
    paddingTop: "0.08em",
  });
  const CustomTypography2 = styled(Typography)({
    paddingTop: "2.5em",
    paddingRight: "2em",
    // position: "relative",
  });
  const CustomTypograph3 = styled(Typography)({
    color: "#FF014F",
    // fontWeight: "bold",
  });

  return (
    <>
      <div id="about">
        <div id="leftSide">
          <Typography variant="h5" id="introduce">
            Let me introduce myself.
          </Typography>
          <div id="myNameDiv">
            <Typography variant="h4" id="hiImKev">
              Hi, I'm
              <span id="name"> Kevin Gicheha</span>
            </Typography>
          </div>
          <div id="myTitleDiv">
            <div id="a">
              <CustomTypography variant="h4" id="aLetter">
                a
              </CustomTypography>
            </div>
            <div id="textAnimation">
              <TypeAnimation
                id="textAnimationText"
                sequence={[
                  "Software Engineer.",
                  1000, // Waits 1s
                  "Professional Coder.",
                  1000, // Waits 2s
                  "Full Stack Developer.",
                  1000, // Waits 2s
                ]}
                // wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "2em" }}
              />
            </div>
          </div>
          <div id="summary">
            <CustomTypography2 variant="body1" id="summaryText">
              I also bring 3+ years of analyst experience and strong
              collaboration and problem-solving skills by using innovative and
              creative ideas to accomplish robust projects. Proven experience
              providing client support in busy environments and an unwavering
              commitment to customer service, with the ability to build
              productive relationships, resolve complex issues and win customer
              loyalty.
            </CustomTypography2>
          </div>
          <MySkills />
        </div>

        <div id="profilePicDiv">
          <img
            id="halfshot"
            alt="profilepic"
            src={require("../Assets/halfshot.jpeg")}
            height="475"
            width="400"
          />
        </div>
      </div>
    </>
  );
};

export default About;
