import React, { useState } from "react";
import {
  DetailsContainer,
  DetailsH1,
  DetailsWrapper,
  DetailsCard,
  DetailsH2,
  DetailsP,
  DetailsTitle,
  ArrowLeft,
  DetailsLink,
  DetailsButton,
} from "./DetailsElements";
import {
  igv_ir_m,
  igv_b2b_vd,
  ogx,
  igt_ir_m,
  igt_b2b_vd,
  fnl_im,
  mkt,
  dxp,
  pd,
  ewa_innovation,
} from "./Data";
import ScrollToTop from "./../ScrollToTop";

const Details = (props) => {
  const func = props.match.params.id;
  const arrayCopy = [];
  if (func === "igv_ir_m") {
    arrayCopy.push(...igv_ir_m);
  } else if (func === "igv_b2b_vd") {
    arrayCopy.push(...igv_b2b_vd);
  } else if (func === "ogx") {
    arrayCopy.push(...ogx);
  } else if (func === "igt_ir_m") {
    arrayCopy.push(...igt_ir_m);
  } else if (func === "igt_b2b_vd") {
    arrayCopy.push(...igt_b2b_vd);
  } else if (func === "fnl_im") {
    arrayCopy.push(...fnl_im);
  } else if (func === "mkt") {
    arrayCopy.push(...mkt);
  } else if (func === "dxp") {
    arrayCopy.push(...dxp);
  } else if (func === "pd") {
    arrayCopy.push(...pd);
  } else if (func === "ewa_innovation") {
    arrayCopy.push(...ewa_innovation);
  }

  const [arr] = useState([...arrayCopy]);
  const applicationLink = arr[0].application.applicationLink;

  return (
    <DetailsContainer>
      <ScrollToTop />
      <DetailsLink to="/lb2324Winter">
        <ArrowLeft />
      </DetailsLink>
      <DetailsWrapper>
        <DetailsH1 color={arr[0].color}>
          {arr[0].function.functionName}
        </DetailsH1>
        {arr[0].function.functionIntro !== null && (
          <DetailsH2>Function Introduction</DetailsH2>
        )}
        {arr[0].function.functionIntro !== null && (
          <DetailsP>{arr[0].function.functionIntro}</DetailsP>
        )}
        <br />
        <DetailsH2>Team Structure</DetailsH2>
        {func !== "fnl_im" &&
          arr[0].application.teamStructure.map((item) => {
            return <DetailsP>{item}</DetailsP>;
          })}
        {func === "fnl_im" && (
          <div>
            <DetailsH2>
              <h5>{arr[0].application.subFunctions.func1}</h5>
            </DetailsH2>
            <DetailsP>{arr[0].application.teamStructure[0]}</DetailsP>
            <DetailsP>{arr[0].application.teamStructure[1]}</DetailsP>
            <br />
            <DetailsH2>
              <h5>{arr[0].application.subFunctions.func2}</h5>
            </DetailsH2>
            <DetailsP>{arr[0].application.teamStructure[2]}</DetailsP>
          </div>
        )}
        <br />
        {arr[0].application.specialInfo && <DetailsH2>Keep in Mind </DetailsH2>}
        {arr[0].application.specialInfo &&
          arr[0].application.specialInfo.map((item) => {
            return <DetailsP>{item}</DetailsP>;
          })}
        <br />
        {arr.map((item) => {
          return (
            <div>
              <DetailsCard borderColor={arr[0].color}>
                <DetailsH2>
                  <center>{item.title}</center>
                </DetailsH2>
                <br />
                <DetailsTitle color={arr[0].color}>
                  {item.subTitile01}
                </DetailsTitle>
                <br />
                {item.jobDescription.map((item, index) => {
                  return <DetailsP key={index}>•{item}</DetailsP>;
                })}
                <br />
                <DetailsTitle color={arr[0].color}>
                  {item.subTitile02}
                </DetailsTitle>
                <br />
                {item.KPIs.map((item, index) => {
                  return <DetailsP key={index}>• {item}</DetailsP>;
                })}
                <br />
                {item.subTitile03 && (
                  <DetailsTitle color={arr[0].color}>
                    {item.subTitile03}
                  </DetailsTitle>
                )}
                <br />
                {item.skills &&
                  item.skills.map((item, index) => {
                    return <DetailsP key={index}>• {item}</DetailsP>;
                  })}
                <br />
                {item.subTitile04 && (
                  <DetailsTitle color={arr[0].color}>
                    {item.subTitile04}
                  </DetailsTitle>
                )}
                <br />
                {item.conditions &&
                  item.conditions.map((item, index) => {
                    return <DetailsP key={index}>• {item}</DetailsP>;
                  })}
              </DetailsCard>
            </div>
          );
        })}
        <br />
        <DetailsP style={{ color: "#037EF3" }}>
          <DetailsLink style={{ color: "#037EF3" }} to="/contact-us">
            <b>Contact Us For More Information</b>
          </DetailsLink>
        </DetailsP>
        {applicationLink !== null && (
          <DetailsButton
            href={applicationLink}
            target="_blank"
            rel="noreferrer"
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <b>Apply</b>
          </DetailsButton>
        )}
        {applicationLink === null && (
          <DetailsP style={{ color: "#fff" }}>
            <b>Coming Soon..</b>
          </DetailsP>
        )}
      </DetailsWrapper>
    </DetailsContainer>
  );
};

export default Details;
