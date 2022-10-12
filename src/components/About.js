import React from "react";
import { Typography, Container } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { styled } from "@mui/material";
import MySkills from "./MySkills";

const About = () => {
  const CustomTypography = styled(Typography)({
    color: "#FF014F",
    // fontWeight: "bold",
  });
  const CustomTypography2 = styled(Typography)({
    paddingTop: "5.5em",
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
          <br />
          <div>
            <div id="hi">
              <Typography variant="h4">Hi, I'm</Typography>
            </div>
            <div>
              <CustomTypograph3 id="name" variant="h4">
                Kevin Gicheha
              </CustomTypograph3>
            </div>
          </div>
          <br />
          <br />
          <div>
            <div id="a">
              <CustomTypography variant="h4">a</CustomTypography>
            </div>
            <div id="textAnimation">
              <TypeAnimation
                sequence={[
                  "Software Engineer.",
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
          <div>
            <CustomTypography2 variant="body1">
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

        {/* <div> */}
          <img
            id="halfshot"
            alt="profilepic"
            src={require("../Assets/halfshot.jpeg")}
            height="475"
            width="400"
          />
        {/* </div> */}
      </div>
    </>
  );
};

export default About;
