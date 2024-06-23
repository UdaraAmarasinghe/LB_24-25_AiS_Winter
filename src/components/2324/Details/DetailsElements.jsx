import styled from "styled-components";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";

export const DetailsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding-bottom: 50px;
  width: auto;

  @media screen and (max-width: auto) {
    height: auto;
    width: auto;
  }

  @media screen and (max-width: auto) {
    height: auto;
    width: auto;
  }
`;
export const DetailsWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    height: auto;
    width: auto;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    height: auto;
    width: auto;
  }
`;
export const DetailsCard = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 10px;
  height: auto;
  width: 600px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border: solid;
  border-color: ${(props) => props.borderColor};

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    width: 400px;
    height: auto;
  }

  @media screen and (max-width: 786px) {
    width: 320px;
    height: auto;
  }
`;
export const DetailsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const DetailsH1 = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.color};
  margin-bottom: 30px;
  margin-top: 10px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const DetailsH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

export const DetailsP = styled.p`
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const DetailsTitle = styled.p`
  font-size: 1rem;
  color: ${(props) => props.color};
  text-align: left;
  margin-bottom: 1px;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  font-size: 40px;
  color: #fff;
  margin-right: 1460px;

  @media screen and (max-width: 1000px) {
    font-size: 30px;
    margin-right: 350px;
  }

  @media screen and (max-width: 786px) {
    font-size: 30px;
    margin-right: 350px;
  }
`;

export const DetailsLink = styled(LinkR)`
  text-decoration: none;
  color: #ffff;
  margin-top: 10px;
`;

export const DetailsButton = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#037EF3" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px  48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }

  @media screen and (max-width: auto) {
    height: auto;
    width: auto;
  }
`;
