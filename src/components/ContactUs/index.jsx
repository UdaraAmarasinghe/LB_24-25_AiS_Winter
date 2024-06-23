import React from "react";
import {
  ContactUsContainer,
  ContactUsH1,
  ContactUsWrapper,
  ContactUsCard,
  ContactUsH2,
  ArrowLeft,
  ContactUsLink,
  ContactUsP,
} from "./ContactUsElements";
import { contacts, president, contact2 } from "./Data";
import ScrollToTop from "./../ScrollToTop";

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <ScrollToTop />
      <ContactUsLink to="/lb2324">
        <ArrowLeft />
      </ContactUsLink>
      <ContactUsH1>
        <center>Contact Us</center>
      </ContactUsH1>
      <ContactUsWrapper>
        {president.map((item) => {
          return (
            <div>
              <ContactUsCard borderColor={item.color}>
                <ContactUsH2>{item.name}</ContactUsH2>
                <ContactUsH2>
                  <h5>{item.position}</h5>
                </ContactUsH2>
                <br />
                <ContactUsP>{item.phone}</ContactUsP>
                <ContactUsP>{item.email}</ContactUsP>
              </ContactUsCard>
            </div>
          );
        })}
      </ContactUsWrapper>
      <ContactUsWrapper>
        {contacts.map((item) => {
          return (
            <div>
              <ContactUsCard borderColor={item.color}>
                <ContactUsH2>{item.name}</ContactUsH2>
                <ContactUsH2>
                  <h5>{item.position}</h5>
                </ContactUsH2>
                <br />
                <ContactUsP>{item.phone}</ContactUsP>
                <ContactUsP>{item.email}</ContactUsP>
              </ContactUsCard>
            </div>
          );
        })}
      </ContactUsWrapper>
      <ContactUsWrapper>
        {contact2.map((item) => {
          return (
            <div>
              <ContactUsCard borderColor={item.color}>
                <ContactUsH2>{item.name}</ContactUsH2>
                <ContactUsH2>
                  <h5>{item.position}</h5>
                </ContactUsH2>
                <br />
                <ContactUsP>{item.phone}</ContactUsP>
                <ContactUsP>{item.email}</ContactUsP>
              </ContactUsCard>
            </div>
          );
        })}
      </ContactUsWrapper>
    </ContactUsContainer>
  );
};

export default ContactUs;
