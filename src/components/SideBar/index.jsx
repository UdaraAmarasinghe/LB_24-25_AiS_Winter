import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="info" onClick={toggle}>
            APPLICATION GUIDELINES
          </SidebarLink>
          <SidebarLink to="frontoffice" onClick={toggle}>
            FRONT OFFICE
          </SidebarLink>
          <SidebarLink to="backoffice" onClick={toggle}>
            BACK OFFICE
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
