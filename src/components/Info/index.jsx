import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  Column1,
  Heading,
  Subtitle,
  InfoLink,
} from "./InfoElements";

const Info = () => {
  return (
    <>
      <InfoContainer lightBg={false} id="info">
        <InfoWrapper>
          <Column1>
            <Heading lightText={true}>
              <h3>Application Guidelines</h3>
            </Heading>
            <Subtitle darkText={false}>
              1. Please read and understand the job descriptions before you
              proceed.
            </Subtitle>
            <Subtitle darkText={false}>
              2. It is mandatory to answer all the questions and sections.
            </Subtitle>
            <Subtitle darkText={false}>
              3. Applications won’t be accepted after the deadline.
            </Subtitle>
            <Subtitle darkText={false}>
              4. Note that there will be assessment centers/ similar tasks for
              certain positions.
            </Subtitle>
            <Subtitle darkText={false}>
              <p style={{ color: "#F85A40" }}>
                <b>DDL:</b>
              </p>
              13th February 2022 - 11:59 pm
            </Subtitle>
            <Subtitle darkText={false} style={{ color: "#037EF3" }}>
              <InfoLink style={{ color: "#037EF3" }} to="/contact-us">
                <b>Contact Us</b>
              </InfoLink>
            </Subtitle>
          </Column1>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
