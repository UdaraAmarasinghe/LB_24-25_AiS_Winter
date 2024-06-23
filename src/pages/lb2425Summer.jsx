import React, { useState } from "react";
import BO from "../components/2324/BO";
import FO from "../components/2324/FO";
import Home from "../components/2324/Home";
import Info from "../components/2324/Info";
import Timer from "../components/2324/Timer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

const LB1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home />
      <Info />
      <Timer />
      <FO />
      <BO />
    </>
  );
};

export default LB1;