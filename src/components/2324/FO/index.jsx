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

      <br/> 

 <FrontofficeWrapper>
        <FrontofficeCard backgroundColor="#db4bca">
          <FrontofficeH2> 
            <FrontofficeLink to="/lb/ogx_b2b_ed">oGTa</FrontofficeLink> {/* should be chnaged  */}
          </FrontofficeH2>
        </FrontofficeCard>
        <FrontofficeCard backgroundColor="#db4bca">
          <FrontofficeH2>
            <FrontofficeLink to="/lb/ogt">oGTe</FrontofficeLink> {/* should be chnaged  */}
          </FrontofficeH2>
        </FrontofficeCard>
        <FrontofficeCard backgroundColor="#db4bca">
          <FrontofficeH2>
            <FrontofficeLink to="/lb/ogv">oGV</FrontofficeLink> {/* should be changed  */}
          </FrontofficeH2>
        </FrontofficeCard>
      </FrontofficeWrapper>


    </FrontofficeContainer>
  );
};

export default Frontoffice;
