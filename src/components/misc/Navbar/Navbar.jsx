import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContiner,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElems";

import { animateScroll as scroll } from "react-scroll";

export default function Navbar({ toggle }) {
  const WebsiteURL = "https://www.lidorh.com/";
  const ScrollToTop = () => {
    if (window.location.href !== WebsiteURL) {
      window.location.href = WebsiteURL;
    }
    scroll.scrollToTop();
  };

  const ScrollToAbout = () => {
    if (window.location.href === WebsiteURL) {
      scroll.scrollTo(800);
    }
  };

  const ScrollToMyProjects = () => {
    if (window.location.href === WebsiteURL) {
      scroll.scrollTo(2000);
    }
  };

  return (
    <>
      <Nav>
        <NavbarContiner>
          <NavLogo to="/" onClick={ScrollToTop} smooth={true} duration={500}>
            LidorH
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                onClick={ScrollToAbout}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                onClick={ScrollToMyProjects}
              >
                Discover
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="contact"
              href="contact-me"
              style={{ border: "1px solid #01BF71" }}
            >
              Sey Hello
            </NavBtnLink>
          </NavBtn>
        </NavbarContiner>
      </Nav>
    </>
  );
}
