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
        <BackofficeCard backgroundColor="#037EF3">
          <BackofficeH2>
            <BackofficeLink to="/lb/fnl_im">
              <b>Fin & IM</b>
            </BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#FFC845">
          <BackofficeH2>
            <BackofficeLink to="/lb/pd">PD</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#0A8EA0">
          <BackofficeH2>
            <BackofficeLink to="/lb/ewa_innovation">EwA</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
      </BackofficeWrapper>
      <br />
      <BackofficeWrapper>
        <BackofficeAlignmentWrapper>
          <BackofficeCard backgroundColor="#F85A40">
            <BackofficeH2>
              <BackofficeLink to="/lb/mkt">MKT</BackofficeLink>
            </BackofficeH2>
          </BackofficeCard>
          <BackofficeCard backgroundColor="#F48924">
            <BackofficeH2>
              <BackofficeLink to="/lb/dxp">DXP</BackofficeLink>
            </BackofficeH2>
          </BackofficeCard>
        </BackofficeAlignmentWrapper>
      </BackofficeWrapper>
    </BackofficeContainer>
  );
};

export default Backoffice;
