import styled from "styled-components";

export const TimerContainer = styled.div`
  color: #fff;
  background: #000000;
  display: flex;
  justify-content: space-around;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: auto;
    background: #000000;
  }
`;

export const TimeSubtitle = styled.p`
  max-width: 600px;
  font-size: 20px;
  justify-content: center;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
