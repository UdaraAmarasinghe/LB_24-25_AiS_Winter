import React from "react";
import {
  FrontofficeContainer,
  FrontofficeH1,
  FrontofficeWrapper,
  FrontofficeCard,
  FrontofficeH2,
  FrontofficeLink,
  FrontofficeAlignmentWrapper,
} from "./FrontofficeElements";

const Frontoffice = () => {
  return (
    <FrontofficeContainer id="frontoffice">
      <FrontofficeH1>
        <h3>Front Office</h3>
      </FrontofficeH1>
      <FrontofficeWrapper>
        <FrontofficeCard backgroundColor="#F85A40">
          <FrontofficeH2>
            <FrontofficeLink to="/lb/igv_ir_m">iGV IR & M</FrontofficeLink>
          </FrontofficeH2>
        </FrontofficeCard>
        <FrontofficeCard backgroundColor="#F85A40">
          <FrontofficeH2>
            <FrontofficeLink to="/lb/igv_b2b_vd">iGV B2B & VD</FrontofficeLink>
          </FrontofficeH2>
        </FrontofficeCard>
        <FrontofficeCard backgroundColor="#FFC845">
          <FrontofficeH2>
            <FrontofficeLink to="/lb/ogx">oGX</FrontofficeLink>
          </FrontofficeH2>
        </FrontofficeCard>
      </FrontofficeWrapper>
      <br />
      <FrontofficeWrapper>
        <FrontofficeAlignmentWrapper>
          <FrontofficeCard backgroundColor="#0A8EA0">
            <FrontofficeH2>
              <FrontofficeLink to="/lb/igt_ir_m">iGT IR & M </FrontofficeLink>
            </FrontofficeH2>
          </FrontofficeCard>
          <FrontofficeCard backgroundColor="#0A8EA0">
            <FrontofficeH2>
              <FrontofficeLink to="/lb/igt_b2b_vd">
                iGT B2B & VD
              </FrontofficeLink>
            </FrontofficeH2>
          </FrontofficeCard>
        </FrontofficeAlignmentWrapper>
      </FrontofficeWrapper>
    </FrontofficeContainer>
  );
};

export default Frontoffice;
