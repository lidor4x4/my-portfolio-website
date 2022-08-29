import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElems";

import { animateScroll as scroll } from "react-scroll";

export default function Sidebar({ isOpen, toggle }) {


  const ScrollToAbout = () => {
    toggle()
    scroll.scrollTo(600);
  };

  const ScrollToMyProjects = () => {
    toggle();
    scroll.scrollTo(2220);
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={ScrollToAbout} to="about">
            About
          </SidebarLink>
          <SidebarLink onClick={ScrollToMyProjects} to="discover">
            Discover
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
