import React from "react";
import {
  BackofficeContainer,
  BackofficeH1,
  BackofficeWrapper,
  BackofficeCard,
  BackofficeH2,
  BackofficeLink,
  BackofficeAlignmentWrapper,
} from "./BackofficeElements";

const Backoffice = () => {
  return (
    <BackofficeContainer id="backoffice">
      <BackofficeH1>
        <h3>Back Office</h3>
      </BackofficeH1>
      <BackofficeWrapper>
        <BackofficeCard backgroundColor="#e64929">
          <BackofficeH2>
            <BackofficeLink to="/lb/dxp">
              <b>DXP</b>
            </BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#FFC845">
          <BackofficeH2>
            <BackofficeLink to="/lb/pd">BD</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#0A8EA0">
          <BackofficeH2>
            <BackofficeLink to="/lb/ewa_innovation">EM & IM</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
      </BackofficeWrapper>
      <br />

      <BackofficeWrapper>
        <BackofficeCard backgroundColor="#c44953">
          <BackofficeH2>
            <BackofficeLink to="/lb/mkt">
              <b>MKT & PR</b>
            </BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#47f567">
          <BackofficeH2>
            <BackofficeLink to="/lb/fnl_im">FnL</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#d448ca">
          <BackofficeH2>
            <BackofficeLink to="/lb/pm">PM</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
      </BackofficeWrapper>
      <p
        style={{
          textAlign: "center",
          marginTop: "15rem",
          color: "#56ACF3",
        }}
      >
        Powered by IM 24.25
      </p>
      
    </BackofficeContainer>
  );
};


export  default Backoffice;
