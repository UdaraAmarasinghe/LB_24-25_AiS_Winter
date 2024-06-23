import React, { useState, useEffect } from "react";
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
  //igv_cxp,
  ogx_b2b_ed,
  ogt,
  ogv,
  igt_ir_m,
  igt_b2b_vd,
  fnl_im,
  mkt,
  dxp,
  pd,
  ewa_innovation,
  pm,
} from "./Data";
import ScrollToTop from "../../ScrollToTop";

const Details = (props) => {
  const func = props.match.params.id;
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let arrayCopy = [];
    if (func === "igv_ir_m") {
      arrayCopy = igv_ir_m;
    } else if (func === "igv_b2b_vd") {
      arrayCopy = igv_b2b_vd;
    // } else if (func === "igv_cxp") {
    //   arrayCopy = igv_cxp;
    } else if (func === "ogx_b2b_ed") {
      arrayCopy = ogx_b2b_ed;
    } else if (func === "ogv") {
      arrayCopy = ogv;
    } else if (func === "ogt") {
      arrayCopy = ogt;
    } else if (func === "pm") {
      arrayCopy = pm;
    } else if (func === "igt_ir_m") {
      arrayCopy = igt_ir_m;
    } else if (func === "igt_b2b_vd") {
      arrayCopy = igt_b2b_vd;
    } else if (func === "fnl_im") {
      arrayCopy = fnl_im;
    } else if (func === "mkt") {
      arrayCopy = mkt;
    } else if (func === "dxp") {
      arrayCopy = dxp;
    } else if (func === "pd") {
      arrayCopy = pd;
    } else if (func === "ewa_innovation") {
      arrayCopy = ewa_innovation;
    }
    setArr(arrayCopy);
  }, [func]);

  const applicationLink = arr.length > 0 && arr[0].application.applicationLink;

  return (
    <DetailsContainer>
      <ScrollToTop />
      <DetailsLink to="/lb2425Winter">
        <ArrowLeft />
      </DetailsLink>
      <DetailsWrapper>
        {arr.length > 0 && (
          <>
            <DetailsH1 color={arr[0].color}>
              {arr[0].function.functionName}
            </DetailsH1>

            {arr[0].function.functionIntro && (
              <>
                <DetailsH2>Function Introduction</DetailsH2>
                <DetailsP>{arr[0].function.functionIntro}</DetailsP>
              </>
            )}
            <br />
            <DetailsH2>Team Structure</DetailsH2>
            {func !== "fnl_im" ? (
              (arr[0].application.teamStructure || []).map((item, index) => (
                <DetailsP key={index}>{item}</DetailsP>
              ))
            ) : (
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
            {arr[0].application.specialInfo && (
              <>
                <DetailsH2>Keep in Mind</DetailsH2>
                {(arr[0].application.specialInfo || []).map((item, index) => (
                  <DetailsP key={index}>{item}</DetailsP>
                ))}
              </>
            )}
            <br />
            {arr.map((item, index) => (
              <DetailsCard key={index} borderColor={arr[0].color}>
                <DetailsH2>
                  <center>{item.title}</center>
                </DetailsH2>
                <br />
                <DetailsTitle color={arr[0].color}>
                  {item.subTitile01}
                </DetailsTitle>
                <br />
                {(item.jobDescription || []).map((desc, index) => (
                  <DetailsP key={index}>• {desc}</DetailsP>
                ))}
                <br />
                <DetailsTitle color={arr[0].color}>
                  {item.subTitile02}
                </DetailsTitle>
                <br />
                {(item.KPIs || []).map((kpi, index) => (
                  <DetailsP key={index}>• {kpi}</DetailsP>
                ))}
                <br />
                {item.subTitile03 && (
                  <>
                    <DetailsTitle color={arr[0].color}>
                      {item.subTitile03}
                    </DetailsTitle>
                    <br />
                  </>
                )}
                {(item.skills || []).map((skill, index) => (
                  <DetailsP key={index}>• {skill}</DetailsP>
                ))}
                <br />
                {item.subTitile04 && (
                  <>
                    <DetailsTitle color={arr[0].color}>
                      {item.subTitile04}
                    </DetailsTitle>
                    <br />
                  </>
                )}
                {(item.conditions || []).map((condition, index) => (
                  <DetailsP key={index}>• {condition}</DetailsP>
                ))}
              </DetailsCard>
            ))}
            <br />
            <DetailsP style={{ color: "#037EF3" }}>
              <DetailsLink style={{ color: "#037EF3" }} to="/contact-us">
                <b>Contact Us For More Information</b>
              </DetailsLink>
            </DetailsP>
            {applicationLink ? (
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
            ) : (
              <DetailsP style={{ color: "#fff" }}>
                <b>Coming Soon..</b>
              </DetailsP>
            )}
          </>
        )}
      </DetailsWrapper>
    </DetailsContainer>
  );
};

export default Details;
