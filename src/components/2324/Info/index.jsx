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
              <p style={{ color: "#F85A40" , fontSize: 38 }}>
                <h3 style={{ padding: "0px 10px 25px 0px"}} >Deadline : </h3>
                
               
              </p>
              
              <b> 14 th January 2024 - 11:59 pm</b>
            </Subtitle>
            <Subtitle darkText={false} style={{ color: "#037EF3",fontSize: 38 }}>
              <InfoLink style={{ color: "#037EF3" }} to="/contact-us">
                <b>Questions?  Click here to Contact Us</b>
                
              </InfoLink>
            </Subtitle>
          </Column1>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
