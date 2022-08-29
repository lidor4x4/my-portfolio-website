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

import {
  animateScroll as scroll,
} from "react-scroll";

export default function Navbar({ toggle }) {
  const ScrollToTop = () => {
    scroll.scrollToTop();
  };

  const ScrollToAbout = () => {
    scroll.scrollTo(800);
  };

  const ScrollToMyProjects = () => {
    scroll.scrollTo(2000);
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
            <NavBtnLink to="contact">Sey Hello</NavBtnLink>
          </NavBtn>
        </NavbarContiner>
      </Nav>
    </>
  );
}
