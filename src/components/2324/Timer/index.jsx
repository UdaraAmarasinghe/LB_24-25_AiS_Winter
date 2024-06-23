import React from "react";
import Countdown from "./Countdown";
import { TimerContainer, TimeSubtitle } from "./TimerElements";

const Timer = () => {
  return (
    <div style={{ background: "#000000" }}>
      <br />
      <center>
        <TimeSubtitle darkText={false}>
          <b style={{ color: "#ffffff",fontSize: 38 }}>Time Remaining </b>
        </TimeSubtitle>
      </center>
      <br />
      <br />
      <TimerContainer>
        <Countdown />
      </TimerContainer>
    </div>
  );
};

export default Timer;
