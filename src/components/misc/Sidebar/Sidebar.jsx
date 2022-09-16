import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWarp,
  SideBtnRoute,
} from "./SidebarElems";

import { animateScroll as scroll } from "react-scroll";

export default function Sidebar({ isOpen, toggle }) {
  const ScrollToAbout = () => {
    toggle();
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
        <SideBtnWarp>
          <SideBtnRoute
            style={{ border: "1px solid #01BF71" }}
            to="/contact"
            href="contact-me"
          >
            Contact Me
          </SideBtnRoute>
        </SideBtnWarp>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
