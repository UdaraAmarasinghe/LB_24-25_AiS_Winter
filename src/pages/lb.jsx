import React, { useState } from "react";
import Backoffice from "../components/Backoffice";
import Frontoffice from "../components/FrontOffice";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Timer from "../components/Timer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

const LB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info />
      <Timer />
      <Frontoffice />
      <Backoffice />
    </>
  );
};

export default LB;
