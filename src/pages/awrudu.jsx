import React from "react";
import styled from "styled-components";

const awrudu = () => {
  return (
    <Container>
      <iframe
        src="https://aiesec-sliit-icomm.web.app/kickstart-oc"
        title="Awrudu"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          width: "100%",
          height: "100%",
          border: "none",
          margin: "0",
          padding: "0",
          overflow: "hidden",
          zIndex: "999999",
        }}
      />
    </Container>
  );
};

export default awrudu;

export const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000000;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
