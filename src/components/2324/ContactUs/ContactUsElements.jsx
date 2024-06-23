import styled from "styled-components";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";

export const ContactUsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
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
export const ContactUsWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    height: auto;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    height: auto;
  }
`;
export const ContactUsCard = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 180px;
  width: 500px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border: solid;
  margin-bottom: 15px;
  border-color: ${(props) => props.borderColor};

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    width: 380px;
    height: 180px;
  }

  @media screen and (max-width: 786px) {
    width: 330px;
    height: 180px;
  }
`;
export const ContactUsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ContactUsH1 = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 30px;
  margin-top: 10px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ContactUsH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

export const ContactUsP = styled.p`
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const ContactUsTitle = styled.p`
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

export const ContactUsLink = styled(LinkR)`
  margin-top: 10px;
  text-decoration: none;
  color: #ffff;
`;

export const ContactUsButton = styled.a`
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
`;
