import React, { useState } from "react";
import Video from "../../../videos/New2425Summer.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../../ButtonElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="lb2425Summer">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="New2425Summer/mp4"/>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <h3>LEADERSHIP BODY</h3>
          <h3 style={{ color: "#037Ef3" }} > APPLICATION PACKAGE 24.25 </h3>
        </HeroH1>
        <HeroP>AIESEC in SLIIT</HeroP>
        <HeroBtnWrapper  >
          <Button 
            to="info"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          
            
          >
            <b>APPLY NOW</b>
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
